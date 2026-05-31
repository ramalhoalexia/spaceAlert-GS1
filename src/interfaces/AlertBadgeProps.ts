import { ColorScheme } from './ColorScheme';
import { AlertLevel } from './Alert';

export interface AlertBadgeProps {
  level: AlertLevel;
  label: string;
  colors: ColorScheme;
}
