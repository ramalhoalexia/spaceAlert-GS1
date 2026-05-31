import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faSatellite, faMoon, faSun, faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import useApp from '../../hooks/useApp';
import createStyles from './styles';
import { AppHeaderProps } from '../../types';

const AppHeader = ({ title, showLogout = true }: AppHeaderProps) => {
  const { colors, isDark, toggleTheme, logout } = useApp();
  const styles = createStyles(colors);

  return (
    <View style={styles.header}>

      <View style={styles.logoContainer}>
        <FontAwesomeIcon
          icon={faSatellite as any}
          color="#FFFFFF"
          size={20}
        />
        <Text style={styles.title}>{title}</Text>
      </View>

      <View style={styles.rightContainer}>

        <TouchableOpacity
          onPress={toggleTheme}
          style={styles.iconButton}
          accessibilityLabel="Alternar tema claro e escuro"
          accessibilityRole="button"
        >
          <FontAwesomeIcon
            icon={(isDark ? faSun : faMoon) as any}
            color="#FFFFFF"
            size={18}
          />
        </TouchableOpacity>


        {showLogout && (
          <TouchableOpacity
            onPress={logout}
            style={styles.iconButton}
            accessibilityLabel="Deslogar do sistema"
            accessibilityRole="button"
          >
            <FontAwesomeIcon
              icon={faRightFromBracket as any}
              color="#FFFFFF"
              size={18}
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default AppHeader;
