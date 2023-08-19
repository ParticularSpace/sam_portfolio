import React from 'react';
import { Card, CardActionArea, CardContent, CardMedia, Typography, Button } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LanguageIcon from '@mui/icons-material/Language';
import Chip from '@mui/material/Chip';
import Header from '../components/Header';

const ProjectCard: React.FC<{
  thumbnail: string;
  title: string;
  description: string;
  techUsed: React.ReactNode[];
  githubLink: string;
  demoLink: string;
}> = ({ thumbnail, title, description, techUsed, githubLink, demoLink }) => (
  <Card style={{ display: "flex", marginBottom: "20px", flexDirection: "row" }}>
    <CardActionArea style={{ width: "300px", flexShrink: 0 }}>
      <CardMedia
        component="img"
        alt={title}
        height="180"
        width="300"
        image={thumbnail}
      />
    </CardActionArea>
    <CardContent style={{ flex: 1, display: "flex", flexDirection: "column" }}>
      <Typography gutterBottom variant="h5" component="div">
        {title}
      </Typography>
      <Typography
        variant="body2"
        color="text.secondary"
        style={{ flexGrow: 1 }}
      >
        {description}
      </Typography>
      <div style={{ display: "flex", flexWrap: "wrap", marginTop: "10px" }}>
        {techUsed.map((tech, index) => (
          <div key={index} style={{ margin: "5px" }}>
            {tech}
          </div>
        ))}
      </div>
      <div style={{ marginTop: "15px", display: "flex", gap: "10px" }}>
        <Button
          href={githubLink}
          target="_blank"
          variant="contained"
          startIcon={<GitHubIcon />}
        >
          View on GitHub
        </Button>
        <Button
          href={demoLink}
          target="_blank"
          variant="contained"
          startIcon={<LanguageIcon />}
        >
          View Demo
        </Button>
      </div>
    </CardContent>
  </Card>
);

const Projects: React.FC = () => {
  const projects = [
    {
      thumbnail: "https://placehold.co/400 ", // Replace with actual image URL
      title: "Project 1",
      description: "Description of project 1",
      techUsed: ["React", "Node.js", "MongoDB"],
      githubLink: "https://github.com/ParticularSpace/project1", // Replace with actual GitHub link
      demoLink: "https://project1.demo", // Replace with actual demo link
    },
    {
      thumbnail: "https://placehold.co/400", // Replace with actual image URL
      title: "Project 2",
      description: "Description of project 2",
      techUsed: ["Angular", "Express", "MySQL"],
      githubLink: "https://github.com/ParticularSpace/project2", // Replace with actual GitHub link
      demoLink: "https://project2.demo", // Replace with actual demo link
    },
    {
        thumbnail: "https://placehold.co/400", // Replace with actual image URL
        title: "Project 2",
        description: "Description of project 2",
        techUsed: ["Angular", "Express", "MySQL"],
        githubLink: "https://github.com/ParticularSpace/project2", // Replace with actual GitHub link
        demoLink: "https://project2.demo", // Replace with actual demo link
      },
      {
        thumbnail: "https://placehold.co/400", // Replace with actual image URL
        title: "Project 2",
        description: "Description of project 2",
        techUsed: ["Angular", "Express", "MySQL"],
        githubLink: "https://github.com/ParticularSpace/project2", // Replace with actual GitHub link
        demoLink: "https://project2.demo", // Replace with actual demo link
      },
      {
        thumbnail: "https://placehold.co/400", // Replace with actual image URL
        title: "Project 2",
        description: "Description of project 2",
        techUsed: ["Angular", "Express", "MySQL"],
        githubLink: "https://github.com/ParticularSpace/project2", // Replace with actual GitHub link
        demoLink: "https://project2.demo", // Replace with actual demo link
      },
      {
        thumbnail: "https://placehold.co/400", // Replace with actual image URL
        title: "Project 2",
        description: "Description of project 2",
        techUsed: ["Angular", "Express", "MySQL"],
        githubLink: "https://github.com/ParticularSpace/project2", // Replace with actual GitHub link
        demoLink: "https://project2.demo", // Replace with actual demo link
      },
      {
        thumbnail: "https://placehold.co/400", // Replace with actual image URL
        title: "Project 2",
        description: "Description of project 2",
        techUsed: ["Angular", "Express", "MySQL"],
        githubLink: "https://github.com/ParticularSpace/project2", // Replace with actual GitHub link
        demoLink: "https://project2.demo", // Replace with actual demo link
      },
    // Add more projects as needed
  ];

  return (
    <>
    <Header />
    <div>
      {projects.map((project, index) => (
        <ProjectCard
          key={index}
          thumbnail={project.thumbnail}
          title={project.title}
          description={project.description}
          techUsed={project.techUsed.map((tech) => (
            <Chip label={tech} />
          ))}
          githubLink={project.githubLink}
          demoLink={project.demoLink}
        />
      ))}
    </div>
    </>
  );
};

export default Projects;
