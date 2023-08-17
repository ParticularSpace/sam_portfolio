import React, { useState, useEffect, useRef } from "react";
import ProjectGrid from "../components/ProjectGrid";
import ContactMe from "../components/ContactMe";
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
import { Button, Grid } from "@mui/material"; // Importing Button and Grid from Material-UI

import ProjectsCarousel from "../components/ProjectsCarousel";
import AboutMe from "../components/AboutMe";
import { HomePageWrapper } from "../styles/Home.styles";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

type Project = {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
};

function Home() {
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
      color: 0xffffff,
      size: 2,
      map: loader.load("textures/stars.jpg"),
      transparent: true,
      blending: AdditiveBlending,
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
    renderer.setClearColor(0x00000, 0);
    renderer.setSize(window.innerWidth, window.innerHeight);
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
  });

  return (
    <>
      <HomePageWrapper ref={containerRef}>
        <animated.div
          style={{
            ...fadeIn,
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
                color="inherit"
                style={{
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
                  width: "30rem",
                  height: "5rem",
                  margin: "5px",
                  fontSize: "1.5rem",
                }}
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

      <div >
        <ProjectGrid projects={projects} />
      </div>

      <div style={{ paddingTop: "10vh" }}>
        <ContactMe />
      </div>

      {/* <div style={{ paddingTop: "33vh" }}>
        <ProjectsCarousel projects={projects} />
      </div> */}

      <div style={{ paddingTop: "33vh" }}>
        <AboutMe />
      </div>
    </>
  );
}

export default Home;
