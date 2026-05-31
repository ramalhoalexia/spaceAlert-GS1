import { ColorScheme } from './ColorScheme';

export interface LoginHeaderProps {
  isDark: boolean;
  toggleTheme: () => void;
  colors: ColorScheme;
}
