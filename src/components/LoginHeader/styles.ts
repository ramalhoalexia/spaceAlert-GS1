import { StyleSheet, Dimensions } from 'react-native';
import { ColorScheme } from '../../interfaces';

const { height: SCREEN_HEIGHT } = Dimensions.get('window');

const createStyles = (colors: ColorScheme) => {
  return StyleSheet.create({
    header: {
      height: SCREEN_HEIGHT * 0.48,
      backgroundColor: colors.primary,
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      paddingTop: 30,
    },
    themeToggleContainer: {
      position: 'absolute',
      top: 40,
      right: 20,
      zIndex: 20,
    },
    themeToggleButton: {
      backgroundColor: 'rgba(255, 255, 255, 0.15)',
      borderRadius: 20,
      padding: 10,
      borderWidth: 1,
      borderColor: 'rgba(255, 255, 255, 0.25)',
    },
    themeToggleText: {
      fontSize: 18,
    },
    star: {
      position: 'absolute',
      color: 'rgba(255, 255, 255, 1)',
      textShadowColor: 'rgba(255, 255, 255, 0.9)',
      textShadowOffset: { width: 0, height: 0 },
      textShadowRadius: 6,
      opacity: 0.6,
    },
    star1: {
      top: '12%',
      left: '18%',
      fontSize: 34,
    },
    star2: {
      top: '14%',
      right: '10%',
      fontSize: 28,
    },
    star3: {
      top: '20%',
      left: '12%',
      fontSize: 18,
    },
    star4: {
      top: '32%',
      left: '48%',
      fontSize: 32,
    },
    star5: {
      top: '45%',
      left: '14%',
      fontSize: 16,
    },
    star6: {
      top: '48%',
      right: '12%',
      fontSize: 26,
    },
    star7: {
      top: '64%',
      left: '20%',
      fontSize: 36,
    },
    star8: {
      top: '78%',
      left: '52%',
      fontSize: 20,
    },
    satelliteContainer: {
      marginBottom: 15,
      alignItems: 'center',
      justifyContent: 'center',
    },
    appName: {
      fontSize: 42,
      color: '#FFFFFF',
      fontFamily: 'DMSerifText_400Regular',
      textAlign: 'center',
      textShadowColor: 'rgba(255, 255, 255, 0.4)',
      textShadowOffset: { width: 0, height: 0 },
      textShadowRadius: 15,
    },
    appSubtitle: {
      fontSize: 12,
      color: 'rgba(255, 255, 255, 0.7)',
      marginTop: 4,
      textAlign: 'center',
      fontFamily: 'Inter_400Regular',
    },
  });
};

export default createStyles;
