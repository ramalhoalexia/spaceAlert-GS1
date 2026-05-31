import React from 'react';
import { TouchableOpacity, Text, ActivityIndicator } from 'react-native';
import { LoginButtonProps } from '../../interfaces';
import createStyles from './styles';

const LoginButton = ({ onPress, disabled, isSubmitting, colors, text, styles: externalStyles }: LoginButtonProps) => {
  const styles = createStyles(colors);

  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled || isSubmitting}
      style={[styles.submitButton, (disabled || isSubmitting) ? styles.submitButtonDisabled : null]}
      accessibilityLabel={text}
      accessibilityRole="button"
    >
      {isSubmitting ? (
        <ActivityIndicator color="#fff" />
      ) : (
        <Text style={styles.submitButtonText}>
          {text}
        </Text>
      )}
    </TouchableOpacity>
  );
};

export default LoginButton;
