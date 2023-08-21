import React from 'react';
import { Grid, Typography } from '@mui/material';
import { ProjectCard, ProjectsSection, ShowcaseProjectCard, TitleBox, CardBackground } from "../styles/Home.styles";

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
      <ShowcaseProjectCard onClick={() => console.log("Clicked on " + showcaseProject.title)}>
        <CardBackground imageUrl={showcaseProject.imageUrl} />
        <TitleBox>
          <Typography variant="h4">{showcaseProject.title}</Typography>
        </TitleBox>
        <TitleBox>
          <Typography variant="body1" style={{ color: "#333" }}>
            {showcaseProject.description}
          </Typography>
        </TitleBox>
      </ShowcaseProjectCard>

      <Grid container spacing={3}>
        {otherProjects.map((project) => (
          <Grid key={project.id} item xs={12} sm={6} md={4} lg={3}>
            <ProjectCard onClick={() => console.log("Clicked on " + project.title)}>
              <CardBackground imageUrl={project.imageUrl} />
              <TitleBox>
                <Typography variant="h6">{project.title}</Typography>
              </TitleBox>
              <TitleBox>
                <Typography variant="body2" style={{ color: "#333" }}>
                  {project.description}
                </Typography>
              </TitleBox>
            </ProjectCard>
          </Grid>
        ))}
      </Grid>
    </ProjectsSection>
  );
};

export default ProjectGrid;

