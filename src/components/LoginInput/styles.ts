import { StyleSheet } from 'react-native';
import { ColorScheme } from '../../interfaces';

const createStyles = (colors: ColorScheme, isDark: boolean) => {
  const labelColor = isDark ? colors.text : '#1A202C';

  return StyleSheet.create({
    inputLabel: {
      fontSize: 14,
      fontWeight: '700',
      color: labelColor,
      marginBottom: 8,
      fontFamily: 'Inter_700Bold',
    },
    inputWrapper: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: colors.loginInputBg,
      borderRadius: 14,
      paddingHorizontal: 16,
      borderWidth: 1.5,
      borderColor: colors.loginInputBorder,
    },
    inputWrapperError: {
      borderColor: colors.danger,
      backgroundColor: colors.dangerLight,
    },
    textInput: {
      flex: 1,
      paddingVertical: 14,
      fontSize: 15,
      color: colors.text,
      fontFamily: 'Inter_400Regular',
    },
    iconContainer: {
      marginRight: 10,
      width: 22,
      alignItems: 'center',
      justifyContent: 'center',
    },
    passwordToggle: {
      padding: 4,
    },
  });
};

export default createStyles;
