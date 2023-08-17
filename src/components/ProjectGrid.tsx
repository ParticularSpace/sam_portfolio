import React from 'react';
import { Grid, Typography } from '@mui/material';
import { ProjectCard, ProjectsSection, ShowcaseProjectCard } from "../styles/Home.styles";

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
        style={{ backgroundImage: `url(${showcaseProject.imageUrl})` }}
        onClick={() => console.log("Clicked on " + showcaseProject.title)}
      >
        <Typography variant="h4" style={{ color: "#333" }}>
          {showcaseProject.title}
        </Typography>
        <Typography variant="body1" style={{ color: "#666" }}>
          {showcaseProject.description}
        </Typography>
      </ShowcaseProjectCard>

      <Grid container spacing={3}>
        {otherProjects.map((project) => (
          <Grid key={project.id} item xs={12} sm={6} md={4} lg={3}>
            <ProjectCard
              style={{ backgroundImage: `url(${project.imageUrl})` }}
              onClick={() => console.log("Clicked on " + project.title)}
            >
              <Typography variant="h6" style={{ color: "#333" }}>
                {project.title}
              </Typography>
              <Typography variant="body2" style={{ color: "#666" }}>
                {project.description}
              </Typography>
            </ProjectCard>
          </Grid>
        ))}
      </Grid>
    </ProjectsSection>
  );
};

export default ProjectGrid;
