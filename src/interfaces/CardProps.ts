import { ReactNode } from 'react';
import { ViewStyle, StyleProp } from 'react-native';
import { ColorScheme } from './ColorScheme';

export interface CardProps {
  children: ReactNode;
  style?: StyleProp<ViewStyle>;
  colors: ColorScheme;
}
