import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import ProjectGrid from "../components/ProjectGrid";
import { useThemeContext } from "../styles/ThemeContext";
import ThemeSwitcher from "../components/ThemeSwitcher";
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
import {
  Button,
  Container,
  Grid,
  Typography,
  Paper,
  Divider,
} from "@mui/material"; // Importing Button and Grid from Material-UI

import ProjectsCarousel from "../components/ProjectsCarousel";

import Skills from "../components/Skills";

import AboutMe from "../components/AboutMe";

import Socials from "../components/Socials";

import { HomePageWrapper, SectionTitle } from "../styles/Home.styles";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

type Project = {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
};

function Home() {
  const { isDarkMode } = useThemeContext();
  const containerRef = useRef<HTMLDivElement | null>(null); // Type ref for an HTMLDivElement

  const projects: Project[] = [
    {
      id: "1",
      title: "Project 1",
      description: "Description for project 1",
      imageUrl: "https://via.placeholder.com/300x250",
    },
    {
      id: "2",
      title: "Project 2",
      description: "Description for project 2",
      imageUrl: "https://via.placeholder.com/300x250",
    },
    {
      id: "3",
      title: "Project 3",
      description: "Description for project 3",
      imageUrl: "https://via.placeholder.com/300x250",
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

  const fadeIn = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    delay: 500,
  });

  const textColor = isDarkMode ? "white" : "black";
  const buttonBackgroundColor = isDarkMode ? "grey" : "grey";

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



    return () => {
      document.removeEventListener("mousemove", onDocumentMouseMove);

      window.removeEventListener("resize", handleResize);
      if (
        containerRef.current &&
        renderer.domElement &&
        containerRef.current.contains(renderer.domElement)
      ) {
        containerRef.current.removeChild(renderer.domElement);
      }
    };
  }, [isDarkMode]);

  return (
    <>
      <HomePageWrapper ref={containerRef}>
        <div style={{ position: "absolute", top: "1rem", right: "1rem" }}>
          <ThemeSwitcher />
        </div>
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
              <Button
                variant="contained"
                style={{
                  color: textColor, // Apply theme-based text color
                  backgroundColor: buttonBackgroundColor, // Apply theme-based background color
                  width: "30rem",
                  height: "5rem",
                  margin: "5px",
                  fontSize: "1.5rem",
                }}
              >
                Home
              </Button>
            </Grid>
            <Grid item>
              <Button
                variant="contained"
                color="inherit"
                style={{
                  color: textColor, // Apply theme-based text color
                  backgroundColor: buttonBackgroundColor, // Apply theme-based background color
                  width: "30rem",
                  height: "5rem",
                  margin: "5px",
                  fontSize: "1.5rem",
                }}
                component={Link}
                to="/projects"
              >
                Projects
              </Button>
            </Grid>
          </Grid>
          <Grid container spacing={3} justifyContent="center">
            <Grid item>
              <Button
                variant="contained"
                color="inherit"
                style={{
                  color: textColor, // Apply theme-based text color
                  backgroundColor: buttonBackgroundColor, // Apply theme-based background color
                  width: "30rem",
                  height: "5rem",
                  margin: "5px",
                  fontSize: "1.5rem",
                }}
              >
                About Me
              </Button>
            </Grid>
            <Grid item>
              <Button
                variant="contained"
                color="inherit"
                style={{
                  color: textColor, // Apply theme-based text color
                  backgroundColor: buttonBackgroundColor, // Apply theme-based background color
                  width: "30rem",
                  height: "5rem",
                  margin: "5px",
                  fontSize: "1.5rem",
                }}
              >
                Contact
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </HomePageWrapper>

      <div style={{ padding: "1rem" }}>
        <SectionTitle isDarkMode={isDarkMode} >
          <Typography
            style={{
              fontSize: "1.5rem",
              textAlign: "center",
            }}
          >
            About Me
          </Typography>
        </SectionTitle>
        <AboutMe />
      </div>

      <div style={{ padding: "1rem" }}>
      <SectionTitle isDarkMode={isDarkMode} >
          <Typography
            style={{
              fontSize: "1.5rem",
              textAlign: "center",
            }}
          >
            Projects
          </Typography>
        </SectionTitle>
        <ProjectGrid projects={projects} />
        {/* <ProjectsCarousel projects={projects} /> */}
      </div>

      <div style={{ padding: "1rem" }}>
      <SectionTitle isDarkMode={isDarkMode} >
          <Typography
            style={{
              fontSize: "1.5rem",
              textAlign: "center",
            }}
          >
            Skills
          </Typography>
        </SectionTitle>
        <Skills />
      </div>

      <div style={{ padding: "1rem" }}>
      <SectionTitle isDarkMode={isDarkMode} >
          <Typography
            style={{
              fontSize: "1.5rem",
              textAlign: "center",
            }}
          >
            Socials
          </Typography>
        </SectionTitle>
        <Socials />
      </div>
    </>
  );
}

export default Home;
