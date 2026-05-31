import { TextInputProps } from 'react-native';
import { ColorScheme } from './ColorScheme';

export interface LoginInputProps extends TextInputProps {
  label: string;
  icon: any;
  error?: boolean;
  isDark: boolean;
  colors: ColorScheme;
  styles?: any;
  showPasswordToggle?: boolean;
  onPasswordTogglePress?: () => void;
}
