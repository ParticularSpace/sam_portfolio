import React, { useState, useEffect, useRef } from 'react';
import { Scene, PerspectiveCamera, TextureLoader, BufferGeometry, PointsMaterial, Float32BufferAttribute, Points, MeshBasicMaterial, SphereGeometry, Mesh, CircleGeometry, WebGLRenderer, AdditiveBlending } from 'three';

import styled from 'styled-components';
import { useSpring, animated } from 'react-spring';
import { useTheme } from '../contexts/ThemeContext';

import { Button } from '@mui/material';
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';


const HomePageWrapper = styled.div`
    height: 100%; /* Span the entire height of the viewport */
    width: 100%; /* Span the entire width of the viewport */
    position: fixed; /* Fixed positioning */
    top: 0; 
    left: 0;
    display: flex; 
    align-items: center; /* Center vertically */
    justify-content: center; /* Center horizontally */
    overflow: hidden;
    z-index: -1; /* Sit behind other content */
    background-color: ${props => props.theme === 'dark' ? '#000' : '#fff'};
    color: ${props => props.theme === 'dark' ? '#fff' : '#000'};
`;


const ProjectsSection = styled.div`
    width: 100%;
    padding: 50px 0; /* Example padding, adjust as needed */
    background-color: 0.3; /* Light grey background for contrast, adjust as needed */
`;

const ProjectCarouselWrapper = styled.div`
    display: flex;
    overflow: hidden;
    scroll-snap-type: x mandatory;

    &::-webkit-scrollbar {
        display: none; /* Hide scrollbar */
    }
`;

const ProjectCarouselInner = styled.div`
    display: flex;
    transition: all 0.5s;
    transform: translateX(${props => props.translation}px); 
`;


const ProjectCard = styled.div`
    flex: 0 0 auto;
    width: 300px; /* Width of individual project card */
    height: 200px;
    margin: 10px;
    background-color: #e0e0e0; /* Light gray background for placeholder */
    scroll-snap-align: start;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;




const CarouselContainer = styled.div`
    display: flex;
    align-items: center; 
    justify-content: center; 
`;


function Home() {
    const containerRef = useRef(null);
    const { theme, toggleTheme } = useTheme();
    const [pastWelcome, setPastWelcome] = useState(false);

    const PROJECT_WIDTH = 320;  // Width of individual project card + margin
    const TOTAL_PROJECTS = 7;  // Now you have 6 projects including clones

    const [carouselTranslation, setCarouselTranslation] = useState(-PROJECT_WIDTH);

    const slideCarouselLeft = () => {
        if (carouselTranslation === 0) { 
            setTimeout(() => {
                setCarouselTranslation(-PROJECT_WIDTH * 4);
            }, 50);
            return;
        }
        setCarouselTranslation(carouselTranslation + PROJECT_WIDTH);
    };
    
    const slideCarouselRight = () => {
        if (carouselTranslation === -PROJECT_WIDTH * 5) { 
            setTimeout(() => {
                setCarouselTranslation(-PROJECT_WIDTH);
            }, 50);
            return;
        }
        setCarouselTranslation(carouselTranslation - PROJECT_WIDTH);
    };
    




    const fadeIn = useSpring({
        from: { opacity: 0 },
        to: { opacity: 1 },
        delay: 500,
    });

    useEffect(() => {
        let mouseX = 0, mouseY = 0;
        const scene = new Scene();
        const camera = new PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 2000);
        camera.position.z = 1000;

        const loader = new TextureLoader();

        const starsGeometry = new BufferGeometry();
        const starsMaterial = new PointsMaterial({ color: 0xFFFFFF, size: 2, map: loader.load('textures/stars.jpg'), transparent: true, blending: AdditiveBlending });

        const vertices = [];
        for (let i = 0; i < 10000; i++) {
            const x = (Math.random() - 0.5) * 2000;
            const y = (Math.random() - 0.5) * 2000;
            const z = (Math.random() - 0.5) * 2000;
            vertices.push(x, y, z);
        }
        starsGeometry.setAttribute('position', new Float32BufferAttribute(vertices, 3));
        const stars = new Points(starsGeometry, starsMaterial);
        scene.add(stars);

        const earthMaterial = new MeshBasicMaterial({ map: loader.load('textures/eath.jpg') });
        const earth = new Mesh(new SphereGeometry(50, 32, 32), earthMaterial);
        scene.add(earth);

        const marsMaterial = new MeshBasicMaterial({ map: loader.load('textures/mars.jpg'), color: theme === 'dark' ? 0xFFFFFF : 0x000000 });
        const mars = new Mesh(new SphereGeometry(30, 32, 32), marsMaterial);
        scene.add(mars);

        const blackHoleMaterial = new MeshBasicMaterial({ map: loader.load('textures/blackhom.jpg'), transparent: true, opacity: 0.8 });
        const blackHole = new Mesh(new CircleGeometry(100, 64), blackHoleMaterial);
        blackHole.position.set(-500, 0, -500);
        scene.add(blackHole);

        const renderer = new WebGLRenderer({ alpha: true, antialias: true });
        renderer.setClearColor(0x00000, 0);
        renderer.setSize(window.innerWidth, window.innerHeight);
        containerRef.current.appendChild(renderer.domElement);

        const handleScroll = () => {
            const scrollFactor = window.scrollY / window.innerHeight;

            // Simulate stars being sucked into black hole
            stars.position.z = scrollFactor * -300;

            // Move the black hole further in the scene based on scroll position
            blackHole.position.z = 100 - (scrollFactor * 100);
            blackHole.position.y = -100 + (scrollFactor * 100);

            setPastWelcome(window.scrollY > window.innerHeight / 2);
        };

        const handleResize = () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        };

        const onDocumentMouseMove = (event) => {
            mouseX = pastWelcome ? window.innerWidth / 2 : (event.clientX - window.innerWidth / 2);
            mouseY = pastWelcome ? window.innerHeight / 2 : (event.clientY - window.innerHeight / 2);
        };

        const animate = () => {
            requestAnimationFrame(animate);

            earth.rotation.y += 0.005;
            mars.rotation.y += 0.005;

            if (pastWelcome) {
                stars.position.x += (mouseX - stars.position.x) * 0.01;
                stars.position.y += (-mouseY - stars.position.y) * 0.01;
            }

            camera.position.x += (mouseX - camera.position.x) * 0.025;
            camera.position.y += (-mouseY - camera.position.y) * 0.025;
            camera.lookAt(scene.position);
            renderer.render(scene, camera);
        };

        document.addEventListener('mousemove', onDocumentMouseMove);
        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', handleResize);
        animate();

        return () => {
            document.removeEventListener('mousemove', onDocumentMouseMove);
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleResize);
            if (containerRef.current && renderer.domElement && containerRef.current.contains(renderer.domElement)) {
                containerRef.current.removeChild(renderer.domElement);
            }

        };
    }, [theme, pastWelcome]);

    return (
        <>
            <HomePageWrapper theme={theme} ref={containerRef}>
                <animated.div style={{ ...fadeIn, position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
                    <h1>Welcome to Sam Jones' Portfolio</h1>
                </animated.div>
            </HomePageWrapper>

            <div style={{ paddingTop: '100vh' }}>
                <ProjectsSection>
                    <h2>Projects</h2>
                    <CarouselContainer>
                        <Button variant="outlined" onClick={slideCarouselLeft}>
                            <ArrowBackIos />
                        </Button>
                        <ProjectCarouselWrapper>
                            <ProjectCarouselInner translation={carouselTranslation}>
                                <ProjectCard>Project 4 (Clone)</ProjectCard>  {/* Last project clone */}
                                <ProjectCard>Project 1</ProjectCard>
                                <ProjectCard>Project 2</ProjectCard>
                                <ProjectCard>Project 3</ProjectCard>
                                <ProjectCard>Project 4</ProjectCard>
                                <ProjectCard>Project 1 (Clone)</ProjectCard>  {/* First project clone */}
                            </ProjectCarouselInner>

                        </ProjectCarouselWrapper>
                        <Button variant="outlined" onClick={slideCarouselRight}>
                            <ArrowForwardIos />
                        </Button>
                    </CarouselContainer>

                </ProjectsSection>
            </div>
        </>
    );
}

export default Home;
