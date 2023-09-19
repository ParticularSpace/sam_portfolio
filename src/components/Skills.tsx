import React from 'react';
import { FaReact, FaHtml5, FaCss3, FaJs, FaNodeJs, FaPython } from 'react-icons/fa';
import { SiTypescript, SiMongodb, SiMysql, SiHandlebarsdotjs, SiJquery, SiGraphql } from 'react-icons/si';
import { useSpring, animated } from 'react-spring';
import { Typography, Grid, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const SkillIcon: React.FC<{ icon: React.ReactNode; name: string }> = ({ icon, name }) => {
  const [scale, setScale] = useSpring(() => ({
    scale: 1,
  }));

  const handleMouseEnter = () => {
    setScale({ scale: 1.2 });
  };

  const handleMouseLeave = () => {
    setScale({ scale: 1 });
  };

  return (
    <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} style={{ textAlign: 'center', padding: '10px' }}>
      <animated.div style={{ transform: scale.scale.interpolate((s) => `scale(${s})`), display: 'inline-block' }}>
        {icon}
      </animated.div>
      <Typography align="center" variant="subtitle1">
        {name}
      </Typography>
    </div>
  );
};

const SkillsSection: React.FC<{ title: string; skills: { icon: React.ReactNode; name: string }[] }> = ({ title, skills }) => (
  <Accordion>
    <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel-content" id="panel-header">
      <Typography variant="h5">{title}</Typography>
    </AccordionSummary>
    <AccordionDetails>
      <Grid container spacing={3} justifyContent="center">
        {skills.map((skill, index) => (
          <Grid item key={index} xs={12} sm={4}>
            <SkillIcon icon={skill.icon} name={skill.name} />
          </Grid>
        ))}
      </Grid>
    </AccordionDetails>
  </Accordion>
);

const Skills: React.FC = () => {
    const frontendSkills = [
      { icon: <FaReact size={50} />, name: 'React' },
      { icon: <FaHtml5 size={50} />, name: 'HTML' },
      { icon: <FaCss3 size={50} />, name: 'CSS' },
      { icon: <FaJs size={50} />, name: 'JavaScript' },
      { icon: <SiTypescript size={50} />, name: 'TypeScript' },
    ];
  
    const backendSkills = [
      { icon: <FaNodeJs size={50} />, name: 'Node.js' },
      { icon: <FaPython size={50} />, name: 'Python' },
      { icon: <SiGraphql size={50} />, name: 'GraphQL' },

    ];
  
    const databaseSkills = [
      { icon: <SiMongodb size={50} />, name: 'MongoDB' },
      { icon: <SiMysql size={50} />, name: 'SQL' },
      { icon: <SiMysql size={50} />, name: 'NoSQL' },
    ];
  
    const otherSkills = [
      { icon: <SiHandlebarsdotjs size={50} />, name: 'Handlebars' },
      { icon: <SiJquery size={50} />, name: 'jQuery' },
    ];
  
    return (
      <div style={{ padding: '15px' }}>
        <SkillsSection title="Frontend" skills={frontendSkills} />
        <SkillsSection title="Backend" skills={backendSkills} />
        <SkillsSection title="Databases" skills={databaseSkills} />
        <SkillsSection title="Other Tools & Libraries" skills={otherSkills} />
      </div>
    );
  };
  
  export default Skills;
