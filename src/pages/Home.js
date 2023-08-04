import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { TextureLoader } from 'three';
import styled from 'styled-components';
import { useSpring, animated } from 'react-spring';
import { useTheme } from '../contexts/ThemeContext';

const HomePageWrapper = styled.div`
    height: 100vh;
    overflow: hidden;
`;

function Home() {
    const containerRef = useRef(null);
    const { theme } = useTheme();
    const fadeIn = useSpring({
        from: { opacity: 0 },
        to: { opacity: 1 },
        delay: 500,
    });

    useEffect(() => {
        let mouseX = 0, mouseY = 0;
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 2000);
        camera.position.z = 1000;

        const loader = new TextureLoader();

        // Stars
        const starsGeometry = new THREE.BufferGeometry();
        const starsMaterial = new THREE.PointsMaterial({ color: 0xFFFFFF, size: 2, map: loader.load('textures/stars.jpg'), transparent: true, blending: THREE.AdditiveBlending });
        const vertices = [];
        for (let i = 0; i < 10000; i++) {
            const x = (Math.random() - 0.5) * 2000;
            const y = (Math.random() - 0.5) * 2000;
            const z = (Math.random() - 0.5) * 2000;
            vertices.push(x, y, z);
        }
        starsGeometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));
        const stars = new THREE.Points(starsGeometry, starsMaterial);
        scene.add(stars);

        // Earth
        const earthGeometry = new THREE.SphereGeometry(50, 32, 32);
        const earthMaterial = new THREE.MeshBasicMaterial({ map: loader.load('textures/eath.jpg') });
        const earth = new THREE.Mesh(earthGeometry, earthMaterial);
        earth.position.set(-150, 0, -500);
        scene.add(earth);

        // Mars
        const marsGeometry = new THREE.SphereGeometry(30, 32, 32);
        const marsMaterial = new THREE.MeshBasicMaterial({ map: loader.load('textures/mars.jpg') });
        const mars = new THREE.Mesh(marsGeometry, marsMaterial);
        mars.position.set(200, 0, 500);
        scene.add(mars);

        // Black Hole
        const blackHoleGeometry = new THREE.CircleGeometry(100, 64); // Reduced size
        const blackHoleMaterial = new THREE.MeshBasicMaterial({
            map: loader.load('textures/blackhole.jpg'),
            transparent: true,
            opacity: 0.8  // Making it semi-transparent
        });
        const blackHole = new THREE.Mesh(blackHoleGeometry, blackHoleMaterial);
        blackHole.position.set(-500, 0, -500);
        scene.add(blackHole);

        const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
        renderer.setClearColor(0x00000, 0);  // Ensure clear color is transparent
        renderer.setSize(window.innerWidth, window.innerHeight);
        containerRef.current.appendChild(renderer.domElement);

        const animate = () => {
            requestAnimationFrame(animate);
            earth.rotation.y += 0.005;
            mars.rotation.y += 0.005;
            camera.position.x += (mouseX - camera.position.x) * 0.025; // Reduced the factor for smoother movement
            camera.position.y += (-mouseY - camera.position.y) * 0.025; // Reduced the factor for smoother movement
            camera.lookAt(scene.position);
            renderer.render(scene, camera);
        };

        const onDocumentMouseMove = (event) => {
            mouseX = (event.clientX - window.innerWidth / 2);
            mouseY = (event.clientY - window.innerHeight / 2);
        };

        document.addEventListener('mousemove', onDocumentMouseMove, false);

        animate();

        return () => {
            document.removeEventListener('mousemove', onDocumentMouseMove);
            containerRef.current.removeChild(renderer.domElement);
        };
    }, []);

    return (
        <HomePageWrapper theme={theme} ref={containerRef}>
            <animated.div style={{ ...fadeIn, position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
                <h1>Welcome to Sam Jones' Portfolio</h1>
            </animated.div>
        </HomePageWrapper>
    );
}

export default Home;
