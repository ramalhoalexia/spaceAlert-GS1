import { StyleProp, ViewStyle } from 'react-native';
import { Alert } from './Alert';
import { ColorScheme } from './ColorScheme';

export interface AlertCardProps {
  alert: Alert;
  colors: ColorScheme;
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
}
