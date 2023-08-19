// ThemeSwitcher.tsx
import React from 'react';
import { useThemeContext } from '../styles/ThemeContext';
import { Button } from '@mui/material';

const ThemeSwitcher: React.FC = () => {
  const { toggleTheme, isDarkMode } = useThemeContext();

  return (
    <Button onClick={toggleTheme}>
      {isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
    </Button>
  );
};

export default ThemeSwitcher;
