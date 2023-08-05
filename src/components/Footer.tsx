import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.footer`
    padding: 1rem;
    text-align: center;
`;

function Footer() {
    return (
        <StyledFooter>
            &copy; {new Date().getFullYear()} Sam Jones
        </StyledFooter>
    );
}

export default Footer;
