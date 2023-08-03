import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useTheme } from '../contexts/ThemeContext';

const StyledHeader = styled.header`
    display: flex;
    justify-content: space-between;
    padding: 1rem;
`;

const Navigation = styled.nav`
    & a {
        margin: 0 1rem;
    }
`;

function Header() {
    const { theme, toggleTheme } = useTheme();
    
    return (
        <StyledHeader>
            <div>Logo</div>
            <Navigation>
                <Link to="/">Home</Link>
                <Link to="/about">About Me</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/resume">Resume</Link>
                <Link to="/blog">Blog</Link>
            </Navigation>
            <button onClick={toggleTheme}>
                {theme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
            </button>
        </StyledHeader>
    );
}

export default Header;
