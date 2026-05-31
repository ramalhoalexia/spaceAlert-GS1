import { StyleSheet } from 'react-native';
import { ColorScheme, AlertLevel } from '../../interfaces';

const createStyles = (colors: ColorScheme, level: AlertLevel) => {
  const config = {
    green:  { bg: colors.successLight, text: colors.success, border: colors.success },
    yellow: { bg: colors.warningLight, text: colors.warning, border: colors.warning },
    red:    { bg: colors.dangerLight,  text: colors.danger,  border: colors.danger  },
  }[level] ?? { bg: '', text: '', border: '' };

  return StyleSheet.create({
    text: {
      color: config.text,
      fontSize: 12,
      fontFamily: 'Inter_700Bold'
    },
  });
};

export default createStyles;
