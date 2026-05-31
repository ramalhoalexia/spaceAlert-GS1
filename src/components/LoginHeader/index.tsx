import React, { useEffect, useRef } from 'react';
import { View, Text, TouchableOpacity, Animated, Easing } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faMoon, faSun, faSatellite } from '@fortawesome/free-solid-svg-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { LoginHeaderProps } from '../../interfaces';
import createStyles from './styles';



const LoginHeader = ({ isDark, toggleTheme, colors }: LoginHeaderProps) => {
  const styles = createStyles(colors);
  
  const floatAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(floatAnim, {
          toValue: 1,
          duration: 3000,
          easing: Easing.inOut(Easing.ease),
          useNativeDriver: true,
        }),
        Animated.timing(floatAnim, {
          toValue: 0,
          duration: 3000,
          easing: Easing.inOut(Easing.ease),
          useNativeDriver: true,
        }),
      ])
    ).start();
  }, [floatAnim]);

  const HeaderContainer = LinearGradient;
  const headerProps = {
    style: styles.header,
    colors: [colors.loginHeaderGradStart, colors.primary],
    start: { x: 0, y: 0 },
    end: { x: 0, y: 0.55 }
  };

  return (
    <HeaderContainer {...(headerProps as any)}>
      
      <View style={styles.themeToggleContainer}>
        <TouchableOpacity
          onPress={toggleTheme}
          style={styles.themeToggleButton}
          accessibilityLabel="Alternar tema"
        >
          <FontAwesomeIcon
            icon={(isDark ? faSun : faMoon) as any}
            color="#FFFFFF"
            size={18}
          />
        </TouchableOpacity>
      </View>

      
      <Text style={[styles.star, styles.star1]}>★</Text>
      <Text style={[styles.star, styles.star2]}>✦</Text>
      <Text style={[styles.star, styles.star3]}>★</Text>
      <Text style={[styles.star, styles.star4]}>★</Text>
      <Text style={[styles.star, styles.star5]}>✦</Text>
      <Text style={[styles.star, styles.star6]}>✴</Text>
      <Text style={[styles.star, styles.star7]}>✴</Text>
      <Text style={[styles.star, styles.star8]}>✦</Text>

      
      <Animated.View
        style={[
          styles.satelliteContainer,
          {
            transform: [
              {
                translateY: floatAnim.interpolate({
                  inputRange: [0, 1],
                  outputRange: [-8, 8],
                }),
              },
            ],
          },
        ]}
      >

        
        <FontAwesomeIcon
          icon={faSatellite as any}
          color="#FFFFFF"
          size={48}
        />
      </Animated.View>

      <Text style={styles.appName}>SpaceAlert</Text>
      <Text style={styles.appSubtitle}>Monitoramento Ambiental por Satélite</Text>
    </HeaderContainer>
  );
};

export default LoginHeader;
