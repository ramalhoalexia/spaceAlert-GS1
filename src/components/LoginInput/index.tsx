import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { LoginInputProps } from '../../interfaces';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import createStyles from './styles';

const LoginInput = ({
  label,
  icon,
  error,
  isDark,
  colors,
  styles: externalStyles,
  showPasswordToggle,
  onPasswordTogglePress,
  ...textInputProps
}: LoginInputProps) => {
  const styles = createStyles(colors, isDark);

  return (
    <View style={{ marginBottom: showPasswordToggle ? 24 : 20 }}>
      <Text style={styles.inputLabel}>{label}</Text>
      <View style={[styles.inputWrapper, error ? styles.inputWrapperError : null]}>
        <View style={styles.iconContainer}>
          <FontAwesomeIcon
            icon={icon as any}
            color={error ? colors.danger : colors.loginInputIcon}
            size={18}
          />
        </View>
        <TextInput
          style={styles.textInput}
          placeholderTextColor={colors.loginInputIcon}
          {...textInputProps}
        />
        {showPasswordToggle && (
          <TouchableOpacity
            onPress={onPasswordTogglePress}
            style={styles.passwordToggle}
            accessibilityLabel={textInputProps.secureTextEntry ? 'Mostrar senha' : 'Ocultar senha'}
          >
            <FontAwesomeIcon
              icon={(textInputProps.secureTextEntry ? faEye : faEyeSlash) as any}
              color={colors.loginInputIcon}
              size={20}
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default LoginInput;
