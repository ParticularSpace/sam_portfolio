import React, { useState, useEffect, useRef } from 'react';
import { Scene, PerspectiveCamera, TextureLoader, BufferGeometry, PointsMaterial, Float32BufferAttribute, Points, MeshBasicMaterial, SphereGeometry, Mesh, CircleGeometry, WebGLRenderer, AdditiveBlending } from 'three';

import styled from 'styled-components';
import { useSpring, animated } from 'react-spring';
import { useTheme } from '../contexts/ThemeContext';
import { Button } from '@mui/material';
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';

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

const SliderWrapper = styled.div`
    max-width: 1200px;  /* This defines the maximum width of your carousel */
    width: 100%;
    padding: 0 20px;
    margin: 0 auto;  /* This will center your carousel if its width is less than its container's width */
`;


const ProjectCard = styled.div`
    flex: 0 0 auto;
    width: 300px;  
    height: 250px; 
    margin: 20px;  
    background-color: #e0e0e0; 
    scroll-snap-align: start;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    box-sizing: border-box;
`;


const CarouselContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    overflow: hidden;
    padding: 10px 40px; 
`;

const ArrowButton = styled(Button)`
    margin: 0 10px;
    min-width: auto; 
`;


function Home() {
    const containerRef = useRef(null);
    const { theme, toggleTheme } = useTheme();
    const [pastWelcome, setPastWelcome] = useState(false);
    const sliderRef = useRef(null);


    const projects = [
        'Project 1',
        'Project 2',
        'Project 3',
        'Project 4',
        'Project 5',
        'Project 6',
        'Project 7',
        'Project 8',
        'Project 9',
        'Project 10',
    ];

    const settings = {
        infinite: true,
        slidesToShow: 3,  // Reduced from 4 to 3 for larger screens
        slidesToScroll: 1,  
        arrows: false,
        centerMode: true,  
        centerPadding: '20px',  // Increased padding for a bit more space between slides
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,  // Show 2 slides for medium-sized screens
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,  // Show 1 slide for small screens
                    slidesToScroll: 1,
                },
            },
        ],
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
                        <ArrowButton variant="outlined" onClick={() => sliderRef.current.slickPrev()}>
                            <ArrowBackIos />
                        </ArrowButton>
                        <SliderWrapper>
                            <Slider ref={sliderRef} {...settings}>
                                {projects.map((project) => (
                                    <ProjectCard key={project}>
                                        {project}
                                    </ProjectCard>
                                ))}
                            </Slider>
                        </SliderWrapper>
                        <ArrowButton variant="outlined" onClick={() => sliderRef.current.slickNext()}>
                            <ArrowForwardIos />
                        </ArrowButton>
                    </CarouselContainer>
                </ProjectsSection>
            </div>
        </>
    );
}

export default Home;
