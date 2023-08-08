import React, { useRef, useState } from "react";

import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";

import Slider from "react-slick";

import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
} from "@mui/material";

import {
  ProjectsSection,
  SliderWrapper,
  ProjectCard,
  CarouselContainer,
} from "../styles/Home.styles";

interface Project {
  title: string;
  imageUrl: string;
  description: string;
}

interface ProjectsCarouselProps {
  projects: Project[];
}

const ProjectsCarousel: React.FC<ProjectsCarouselProps> = ({ projects }) => {
  const sliderRef = useRef<any>(null);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const settings = {
    infinite: true,
    slidesToShow: 1,
    centerMode: true,
    speed: 500,
    arrows: false,
    centerPadding: "20px",
  };

  const handleClose = () => {
    setSelectedProject(null);
  };

  return (
    <ProjectsSection>
      <h2>Projects</h2>

      <CarouselContainer>
        {/* left arrow */}

        <div
          className="carousel-arrow"
          onClick={() => sliderRef.current?.slickPrev()}
        >
          <ArrowBackIos />
        </div>

        <SliderWrapper>
          <Slider ref={sliderRef} {...settings}>
            {projects.map((project) => (
              <ProjectCard
                key={project.title}
                onClick={() => setSelectedProject(project)}
              >
                <img src={project.imageUrl} alt={project.title} />
                <h3>{project.title}</h3>
              </ProjectCard>
            ))}
          </Slider>
        </SliderWrapper>

        {/* right arrow */}

        <div
          className="carousel-arrow"
          onClick={() => sliderRef.current?.slickNext()}
        >
          <ArrowForwardIos />
        </div>
      </CarouselContainer>

      <Dialog open={!!selectedProject} onClose={handleClose}>
        <DialogTitle>{selectedProject?.title}</DialogTitle>
        <DialogContent>
          <p>{selectedProject?.description}</p>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </ProjectsSection>
  );
};

export default ProjectsCarousel;
