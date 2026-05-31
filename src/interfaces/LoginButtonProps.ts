import { ColorScheme } from './ColorScheme';

export interface LoginButtonProps {
  onPress: () => void;
  disabled?: boolean;
  isSubmitting?: boolean;
  colors: ColorScheme;
  text: string;
  styles?: any;
}
