import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';


const StyledHeader = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center; 
    padding: 1rem;
    z-index: 10; 
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

function Header() {

    return (
        <StyledHeader>
            <div>Sam Jones</div>
            <Navigation>
                <Link to="/">Home</Link>
                <Link to="/about">About Me</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/resume">Resume</Link>
            </Navigation>
        </StyledHeader>
    );
}

export default Header;
