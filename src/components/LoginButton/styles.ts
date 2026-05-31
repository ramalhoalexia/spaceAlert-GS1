import { StyleSheet } from 'react-native';
import { ColorScheme } from '../../interfaces';

const createStyles = (colors: ColorScheme) => {
  return StyleSheet.create({
    submitButton: {
      backgroundColor: colors.primary,
      borderRadius: 14,
      padding: 16,
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 8,
      elevation: 4,
    },
    submitButtonDisabled: {
      backgroundColor: colors.primary,
      opacity: 0.8,
    },
    submitButtonText: {
      color: '#FFFFFF',
      fontSize: 16,
      fontWeight: '700',
      fontFamily: 'Inter_700Bold',
    },
  });
};

export default createStyles;
