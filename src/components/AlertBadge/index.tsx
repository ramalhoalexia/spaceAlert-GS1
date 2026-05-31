import React from 'react';
import { Text } from 'react-native';
import { AlertBadgeProps } from '../../interfaces';
import createStyles from './styles';

const AlertBadge = ({ level, label, colors }: AlertBadgeProps) => {
  const styles = createStyles(colors, level);

  return (
    <Text style={styles.text}>
      ● {label}
    </Text>
  );
};

export default AlertBadge;
