import { Context, useContext } from 'react';
import ThemeContext, { ThemeContextProps } from '../context/ThemeContext';

export const useTheme = () => {
  return useContext(ThemeContext);
};
