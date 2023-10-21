import { createContext, useState } from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider as ThemeProviderStyled } from 'styled-components';
import { Dark, Light } from '../styles/themes';

export const ThemeContext = createContext(null);

export const ThemeProvider = (props) => {
  const [theme, setTheme] = useState("dark");
  const { children } = props;

  const themeSelected = theme === 'light' ? Light : Dark;

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <ThemeProviderStyled theme={themeSelected}>
        {children}
      </ThemeProviderStyled>
    </ThemeContext.Provider>
  )
};

ThemeProvider.propTypes = {
  children: PropTypes.node
}
