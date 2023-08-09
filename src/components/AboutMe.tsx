import React, { useRef, useEffect } from "react";
import * as THREE from "three";
import {
  AboutMeWrapper,
  AnimatedFigureWrapper,
  LinkedInButton,
 
  AboutMeTextWrapper,
  FigureAndButtonWrapper,
  LinkedInPostsWrapper,
} from '../styles/AboutMe.styles';


const AboutMe = () => {
  const mountRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      mountRef.current.clientWidth / mountRef.current.clientHeight,
      0.1,
      1000
    );

    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setClearColor(0x000000, 0);
    renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);

    mountRef.current.appendChild(renderer.domElement);

    camera.position.z = 7;

    // Listen to mouse movements
    let mouseX = 0;
    let mouseY = 0;

    const handleMouseMove = (event: MouseEvent) => {
      mouseX = (event.clientX / window.innerWidth) * 2 - 1;
      mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
    };

    window.addEventListener("mousemove", handleMouseMove);

    const handleResize = () => {
      const newWidth = window.innerWidth;
      const newHeight = window.innerHeight;

      renderer.setSize(newWidth, newHeight);
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
    };

    window.addEventListener("resize", handleResize);

    // Load a texture (skin) for the cube
    const textureLoader = new THREE.TextureLoader();
    textureLoader.load('textures/smiley.png', (texture) => {
        texture.offset.set(0.25, 0);
    
        const geometry = new THREE.SphereGeometry(2.5, 32, 32);
        const material = new THREE.MeshBasicMaterial({ map: texture });
    
        const sphere = new THREE.Mesh(geometry, material);
        scene.add(sphere);
    
        // Set the initial rotation to make it look slightly down
        sphere.rotation.x = -0.2;  // Adjust this value as needed
    
        const animate = () => {
            requestAnimationFrame(animate);
            sphere.rotation.x += (-mouseY - sphere.rotation.x) * 0.05;
            sphere.rotation.y += (mouseX - sphere.rotation.y) * 0.05;
            renderer.render(scene, camera);
        };
    
        animate();
    });
    

    // Cleanup
    return () => {
      renderer.dispose();
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <AboutMeWrapper>
      <FigureAndButtonWrapper>
        <AnimatedFigureWrapper ref={mountRef}>
          {/* Animated Figure Here */}
        </AnimatedFigureWrapper>
        <LinkedInButton
          href="https://www.linkedin.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Visit My LinkedIn
        </LinkedInButton>
      </FigureAndButtonWrapper>
     
      <AboutMeTextWrapper>

      </AboutMeTextWrapper>
     
      <LinkedInPostsWrapper>
        {/* LinkedIn Posts Here */}
        <h1>LinkedIn Posts</h1>
      </LinkedInPostsWrapper>
    </AboutMeWrapper>   
  );
};

export default AboutMe;




