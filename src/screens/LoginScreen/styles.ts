import { StyleSheet, Dimensions } from 'react-native';
import { ColorScheme } from '../../interfaces';

const { height: SCREEN_HEIGHT } = Dimensions.get('window');

const createStyles = (colors: ColorScheme, isDark: boolean) => {
  const headerBg = colors.primary;
  const formBg = isDark ? colors.surface : '#FFFFFF';
  const titleColor = colors.primary;

  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: headerBg,
    },
    loadingContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: colors.background,
    },
    mainContent: {
      flex: 1,
      backgroundColor: headerBg,
    },
    scrollContent: {
      flexGrow: 1,
      backgroundColor: headerBg,
    },
    formContainer: {
      backgroundColor: formBg,
      borderTopLeftRadius: 40,
      borderTopRightRadius: 40,
      paddingHorizontal: 28,
      paddingTop: 30,
      paddingBottom: 20,
      flex: 1,
      justifyContent: 'space-between',
    },
    loginTitle: {
      fontSize: 36,
      color: titleColor,
      fontFamily: 'DMSerifText_400Regular',
      textAlign: 'center',
      marginBottom: 8,
    },
    loginSubtitle: {
      fontSize: 13,
      color: colors.loginTextSubtitle,
      textAlign: 'center',
      fontFamily: 'Inter_400Regular',
      lineHeight: 18,
      marginBottom: 24,
      paddingLeft: 20,
      paddingRight: 20,
    },
    errorContainer: {
      backgroundColor: colors.dangerLight,
      borderRadius: 10,
      padding: 12,
      marginBottom: 20,
      borderWidth: 1,
      borderColor: colors.danger,
    },
    errorText: {
      color: colors.danger,
      fontSize: 13,
      lineHeight: 18,
      fontFamily: 'Inter_400Regular',
    },
    footerText: {
      textAlign: 'center',
      color: isDark ? colors.textMuted : '#A0AEC0',
      fontSize: 11,
      marginTop: 36,
      fontFamily: 'Inter_400Regular',
    },
  });
};

export default createStyles;
