import React, { useState, useEffect, useRef } from "react";
import {
  Scene,
  PerspectiveCamera,
  TextureLoader,
  BufferGeometry,
  PointsMaterial,
  Float32BufferAttribute,
  Points,
  MeshBasicMaterial,
  SphereGeometry,
  Mesh,
  CircleGeometry,
  WebGLRenderer,
  AdditiveBlending,
} from "three";

import { useSpring, animated } from "react-spring";

import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import Slider from "react-slick";

import {
  HomePageWrapper,
  ProjectsSection,
  SliderWrapper,
  ProjectCard,
  CarouselContainer,
  ArrowButton,
} from "../styles/Home.styles";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


type Project = string;

function Home() {
  const containerRef = useRef<HTMLDivElement | null>(null); // Type ref for an HTMLDivElement
  const [pastWelcome, setPastWelcome] = useState<boolean>(false);
  const sliderRef = useRef<any>(null); // Ref type for slider can be better defined if we have its type. Here, I'm using 'any' as a placeholder.

  const projects: Project[] = [
    "Project 1",
    "Project 2",
    "Project 3",
    "Project 4",
    "Project 5",
    "Project 6",
    "Project 7",
    "Project 8",
    "Project 9",
    "Project 10",
  ];

  const settings = {
    infinite: true,
    slidesToShow: 3, // Reduced from 4 to 3 for larger screens
    slidesToScroll: 1,
    arrows: false,
    centerMode: true,
    centerPadding: "10px", // Increased padding for a bit more space between slides
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2, // Show 2 slides for medium-sized screens
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1, // Show 1 slide for small screens
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

    const earthMaterial = new MeshBasicMaterial({
      map: loader.load("textures/eath.jpg"),
    });
    const earth = new Mesh(new SphereGeometry(50, 32, 32), earthMaterial);
    scene.add(earth);

    const marsMaterial = new MeshBasicMaterial({
      map: loader.load("textures/mars.jpg"),
    });
    const mars = new Mesh(new SphereGeometry(30, 32, 32), marsMaterial);
    scene.add(mars);

    const blackHoleMaterial = new MeshBasicMaterial({
      map: loader.load("textures/blackhom.jpg"),
      transparent: true,
      opacity: 0.8,
    });
    const blackHole = new Mesh(new CircleGeometry(100, 64), blackHoleMaterial);
    blackHole.position.set(-500, 0, -500);
    scene.add(blackHole);

    const renderer = new WebGLRenderer({ alpha: true, antialias: true });
    renderer.setClearColor(0x00000, 0);
    renderer.setSize(window.innerWidth, window.innerHeight);
    if (containerRef.current) {
      containerRef.current.appendChild(renderer.domElement);
    }
    

    const handleScroll = () => {
      const scrollFactor = window.scrollY / window.innerHeight;

      // Simulate stars being sucked into black hole
      stars.position.z = scrollFactor * -300;

      // Move the black hole further in the scene based on scroll position
      blackHole.position.z = 100 - scrollFactor * 100;
      blackHole.position.y = -100 + scrollFactor * 100;

      setPastWelcome(window.scrollY > window.innerHeight / 2);
    };

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    const onDocumentMouseMove = (event: MouseEvent) => {
        mouseX = pastWelcome
          ? window.innerWidth / 2
          : event.clientX - window.innerWidth / 2;
        mouseY = pastWelcome
          ? window.innerHeight / 2
          : event.clientY - window.innerHeight / 2;
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

    document.addEventListener("mousemove", onDocumentMouseMove);
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    animate();

    return () => {
      document.removeEventListener("mousemove", onDocumentMouseMove);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
      if (
        containerRef.current &&
        renderer.domElement &&
        containerRef.current.contains(renderer.domElement)
      ) {
        containerRef.current.removeChild(renderer.domElement);
      }
    };
  }, [pastWelcome]);

  return (
    <>
      <HomePageWrapper ref={containerRef}>
        <animated.div
          style={{
            ...fadeIn,
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <h1>Welcome to Sam Jones' Portfolio</h1>
        </animated.div>
      </HomePageWrapper>

      <div style={{ paddingTop: "100vh" }}>
        <ProjectsSection>
          <h2>Projects</h2>
          <CarouselContainer>
            <ArrowButton
              variant="outlined"
              onClick={() => sliderRef.current.slickPrev()}
            >
              <ArrowBackIos />
            </ArrowButton>
            <SliderWrapper>
              <Slider ref={sliderRef} {...settings}>
                {projects.map((project) => (
                  <ProjectCard key={project}>{project}</ProjectCard>
                ))}
              </Slider>
            </SliderWrapper>
            <ArrowButton
              variant="outlined"
              onClick={() => sliderRef.current.slickNext()}
            >
              <ArrowForwardIos />
            </ArrowButton>
          </CarouselContainer>
        </ProjectsSection>
      </div>
    </>
  );
}

export default Home;