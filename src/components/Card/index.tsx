import React from 'react';
import { View } from 'react-native';
import { CardProps } from '../../interfaces';
import createStyles from './styles';

const Card = ({ children, style, colors }: CardProps) => {
  const styles = createStyles(colors);
  return (
    <View style={[styles.card, style]}>
      {children}
    </View>
  );
};

export default Card;
