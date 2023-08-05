import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useTheme } from '../contexts/ThemeContext';

const LightSwitchButton = styled.button`
   
    border: none;
    border-radius: 20px;
    padding: 8px 16px;
    cursor: pointer;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
    transition: background-color 0.3s ease;

   

    &:active {
        transform: translateY(1px);
    }
`;

const StyledHeader = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;  // for vertical alignment
    padding: 1rem;
`;

const Navigation = styled.nav`
    & a {
        margin: 0 1rem;
        text-decoration: none;  // to remove default link styles
        color: inherit;         // use inherited color (from parent elements)
        &:hover {
            text-decoration: underline; // underline when hovered
        }
    }
`;

function Header() {

    return (
        <StyledHeader>
            <div>Sam Jones</div>
            <Navigation>
                <Link to="/">Home</Link>
                <Link to="/about">About Me</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/resume">Resume</Link>
                <Link to="/blog">Blog</Link>
            </Navigation>
            {/* <LightSwitchButton theme={theme} onClick={toggleTheme}>
                {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
            </LightSwitchButton> */}
        </StyledHeader>
    );
}

export default Header;
