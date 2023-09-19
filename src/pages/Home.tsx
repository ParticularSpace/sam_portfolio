import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { useThemeContext } from "../styles/ThemeContext";

// Import Three.js animation
import {
  Scene,
  PerspectiveCamera,
  TextureLoader,
  BufferGeometry,
  PointsMaterial,
  Float32BufferAttribute,
  Points,
  WebGLRenderer,
  AdditiveBlending,
} from "three";

import { useSpring, animated } from "react-spring";
import { Button, Grid } from "@mui/material"; 

// Import components
import Skills from "../components/Skills";
import AboutMe from "../components/AboutMe";
import Socials from "../components/Socials";
import ProjectGrid from "../components/ProjectGrid";
import ThemeSwitcher from "../components/ThemeSwitcher";
import Header from "../components/Header";

// Import styles
import { HomePageWrapper, SectionTitle, ColumnWrapper, StyledButton } from "../styles/Home.styles";

// Define project type
type Project = {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
};

function Home() {
  const { isDarkMode } = useThemeContext();
  
  const containerRef = useRef<HTMLDivElement | null>(null);

  const projects: Project[] = [
    {
      id: "1",
      title: "Ecommerce Website",
      description:
        "Full stack ecommerce website built with TypeScript, React, Node, Express, MongoDB, GQL, and Stripe.",
      imageUrl: "../images/tech_store.png",
    },
    {
      id: "2",
      title: "AI Chat App",
      description:
        "An AI with multiple functionalities such as: Chat, Translation, Stock analysis, and Speech to Text.",
      imageUrl: "../images/Ai_chat.png",
    },
    {
      id: "3",
      title: "React Weather App",
      description:
        "Using OpenWeatherMap API to create a weather app with React.",
      imageUrl: "../images/weather_app.png",
    },
    {
      id: "4",
      title: "Project 4",
      description: "Description for project 4",
      imageUrl: "https://via.placeholder.com/300x250",
    },
    {
      id: "5",
      title: "Project 5",
      description: "Description for project 5",
      imageUrl: "https://via.placeholder.com/300x250",
    },
  ];

  // Fade in animation for title
  const fadeIn = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    delay: 500,
  });

  // Apply theme-based colors
  const textColor = isDarkMode ? "white" : "black";
  const buttonBackgroundColor = isDarkMode ? "grey" : "grey";


  const [showHeader, setShowHeader] = useState(false);

 

  // Three.js animation
  useEffect(() => {
    let mouseX = 0,
      mouseY = 0;
    const scene = new Scene();
    const camera = new PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      2000
    );
    camera.position.z = 1000;

    const loader = new TextureLoader();

    const starsGeometry = new BufferGeometry();
    const starsMaterial = new PointsMaterial({
      color: isDarkMode ? 0xffffff : 0x000000, // Stars color based on theme mode
      size: 2,
      map: loader.load("textures/stars.jpg"),
      transparent: true,
      blending: isDarkMode ? AdditiveBlending : undefined, // Set blending based on theme mode
      opacity: isDarkMode ? 1 : 0.5, // Set opacity based on theme mode
    });

    const vertices: number[] = [];
    for (let i = 0; i < 10000; i++) {
      const x = (Math.random() - 0.5) * 2000;
      const y = (Math.random() - 0.5) * 2000;
      const z = (Math.random() - 0.5) * 2000;
      vertices.push(x, y, z);
    }

    starsGeometry.setAttribute(
      "position",
      new Float32BufferAttribute(vertices, 3)
    );

    const stars = new Points(starsGeometry, starsMaterial);
    scene.add(stars);

    const renderer = new WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(isDarkMode ? 0x181818 : 0xffffff, 1); // Background color based on theme mode

    if (containerRef.current) {
      containerRef.current.appendChild(renderer.domElement);
    }

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    const onDocumentMouseMove = (event: MouseEvent) => {
      mouseX = event.clientX - window.innerWidth / 2;
      mouseY = event.clientY - window.innerHeight / 2;
    };

    const animate = () => {
      requestAnimationFrame(animate);

      camera.position.x += (mouseX - camera.position.x) * 0.025;
      camera.position.y += (-mouseY - camera.position.y) * 0.025;
      camera.lookAt(scene.position);
      renderer.render(scene, camera);
    };

    document.addEventListener("mousemove", onDocumentMouseMove);

    window.addEventListener("resize", handleResize);
    animate();

    const handleScroll = () => {
      const columnWrapper = document.getElementById('column-wrapper');
      if (columnWrapper) {
        const rect = columnWrapper.getBoundingClientRect();
        const shouldBeVisible = rect.top <= 0;
        console.log("Should header be visible:", shouldBeVisible);  // Debug log
        setShowHeader(shouldBeVisible);
      }
    }; 

    window.addEventListener('scroll', handleScroll);

    return () => {
      document.removeEventListener("mousemove", onDocumentMouseMove);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener('scroll', handleScroll); // Add this line
    
      if (
        containerRef.current &&
        renderer.domElement &&
        containerRef.current.contains(renderer.domElement)
      ) {
        containerRef.current.removeChild(renderer.domElement);
      }
    };
  }, [isDarkMode, setShowHeader]);

  return (
    <>
     <Header showHeader={showHeader} />


      <HomePageWrapper ref={containerRef}>
        <SectionTitle isDarkMode={isDarkMode}>
          <div style={{ position: "absolute", top: "1rem", right: "1rem" }}>
            <ThemeSwitcher />
          </div>
        </SectionTitle>
        <animated.div
          style={{
            ...fadeIn,
            color: textColor, // Apply theme-based text color
            position: "absolute",
            top: "30%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            fontSize: "5rem",
          }}
        >
          Sam Jones
        </animated.div>
        <animated.div
          style={{
            ...fadeIn,
            color: textColor, // Apply theme-based text color
            fontSize: "2rem",
            position: "absolute",
            top: "40%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          Full Stack Developer
        </animated.div>

        <Grid
          container
          direction="column"
          style={{
            position: "absolute",
            top: "60%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
<Grid container spacing={4} justifyContent="center">
          <Grid item>
            <Link to="/">
              <StyledButton buttonColor={buttonBackgroundColor} textColor={textColor}>
                Home
              </StyledButton>
            </Link>
          </Grid>
          <Grid item>
            <Link to="/projects">
              <StyledButton buttonColor={buttonBackgroundColor} textColor={textColor}>
                Projects
              </StyledButton>
            </Link>
          </Grid>
        </Grid>
        <Grid container spacing={3} justifyContent="center">
          <Grid item>
            <Link to="/about-me">
              <StyledButton buttonColor={buttonBackgroundColor} textColor={textColor}>
                About Me
              </StyledButton>
            </Link>
          </Grid>
          <Grid item>
            <Link to="/contact">
              <StyledButton buttonColor={buttonBackgroundColor} textColor={textColor}>
                Contact
              </StyledButton>
            </Link>
          </Grid>
        </Grid>
      </Grid>
    </HomePageWrapper>

      <ColumnWrapper id="column-wrapper">

        <div style={{ padding: "1rem" }}>
            <AboutMe />       
        </div>

        <div style={{ padding: "1rem" }}>
          <ProjectGrid projects={projects} />
        </div>

        <div style={{ padding: "1rem" }}>
          <Skills />
        </div>

        <div style={{ padding: "1rem" }}>
          <Socials />
        </div>

      </ColumnWrapper>
    </>
  );
}

export default Home;
