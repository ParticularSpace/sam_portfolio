import React from 'react';
import { useThemeContext } from '../styles/ThemeContext';
import { Switch, FormControlLabel } from '@mui/material';

const ThemeSwitcher: React.FC = () => {
  const { toggleTheme, isDarkMode } = useThemeContext();

  return (
    <FormControlLabel
      control={
        <Switch
          checked={isDarkMode}
          onChange={toggleTheme}
          color="default"
          inputProps={{ 'aria-label': 'Toggle light/dark mode' }}
        />
      }
      label={isDarkMode ? 'Dark Mode' : 'Light Mode'}
    />
  );
};

export default ThemeSwitcher;
