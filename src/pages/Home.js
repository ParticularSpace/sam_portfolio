import React from 'react';
import styled from 'styled-components';
import { useSpring, animated } from 'react-spring';
import { useTheme } from '../contexts/ThemeContext';  // Import the hook

const HomePageWrapper = styled.div`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${props => props.theme === 'light' ? '#ffffff' : '#333333'};
    color: ${props => props.theme === 'light' ? '#000000' : '#ffffff'};
`;

function Home() {
    const fadeIn = useSpring({
        from: { opacity: 0 },
        to: { opacity: 1 },
        delay: 500,
    });

    const { theme } = useTheme();  

    return (
        <HomePageWrapper theme={theme}>
            <animated.div style={fadeIn}>
                <h1>Welcome to Sam Jones' Portfolio</h1>
            </animated.div>
        </HomePageWrapper>
    );
}

export default Home;
