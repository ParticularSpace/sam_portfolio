import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';


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
        </StyledHeader>
    );
}

export default Header;
