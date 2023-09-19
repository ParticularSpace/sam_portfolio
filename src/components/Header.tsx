import React from 'react';
import { Link } from 'react-router-dom';
import styled, { css, keyframes } from 'styled-components';

const slideDown = keyframes`
  from {
    transform: translateY(-100%);
  }
  to {
    transform: translateY(0);
  }
`;

const StyledHeader = styled.header<{ show: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: #f9f9f9;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); 
  position: fixed; 
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
  transform: translateY(${props => (props.show ? '0' : '-100%')});
  transition: transform 0.5s ease-in-out;
`;


const Navigation = styled.nav`
  & a {
    margin: 0 1rem;
    text-decoration: none;
    color: inherit;
    &:hover {
      text-decoration: underline;
    }
  }
`;

type HeaderProps = {
  showHeader: boolean;
};

const Header: React.FC<HeaderProps> = ({ showHeader }) => {
  return (
    <StyledHeader show={showHeader}>
      <div>Sam Jones</div>
      <Navigation>
        <Link to="/">Home</Link>
        <Link to="/about">About Me</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/resume">Resume</Link>
      </Navigation>
    </StyledHeader>
  );
};

export default Header;
