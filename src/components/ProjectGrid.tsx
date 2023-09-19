import React from "react";
import { Grid, Typography } from "@mui/material";
import {
  ProjectCard,
  ProjectsSection,
  ShowcaseProjectCard,
  CardBackground,
} from "../styles/Home.styles";

type Project = {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
};

type Props = {
  projects: Project[];
};

const ProjectGrid: React.FC<Props> = ({ projects }) => {
  const showcaseProject = projects[0];
  const otherProjects = projects.slice(1);

  return (
    <ProjectsSection>
      <ShowcaseProjectCard
        onClick={() => console.log("Clicked on " + showcaseProject.title)}
      >
        <CardBackground imageUrl={showcaseProject.imageUrl} />
      </ShowcaseProjectCard>

      <Grid container spacing={3}>
        {otherProjects.map((project) => (
          <Grid key={project.id} item xs={12} sm={6} md={4} lg={3}>
            <ProjectCard
              onClick={() => console.log("Clicked on " + project.title)}
            >
              <CardBackground imageUrl={project.imageUrl} />
      
            </ProjectCard>
          </Grid>
        ))}
      </Grid>
    </ProjectsSection>
  );
};

export default ProjectGrid;
