import { createContext, useState } from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider as ThemeProviderStyled } from 'styled-components';
import { Dark, Light } from '../styles/themes';
import { useUserStore } from '../store/UserStore';

export const ThemeContext = createContext(null);

export const ThemeProvider = (props) => {
  const { dataUsuarios } = useUserStore();
  const temabd = dataUsuarios.tema === "0" ? "light" : "dark";
  const [theme, setTheme] = useState(temabd);
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
