import { useState, useRef } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  ActivityIndicator,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { faEnvelope, faKey } from '@fortawesome/free-solid-svg-icons';
import useApp from '../../hooks/useApp';
import createStyles from './styles';
import LoginHeader from '../../components/LoginHeader';
import LoginInput from '../../components/LoginInput';
import LoginButton from '../../components/LoginButton';


const VALID_EMAIL = 'professor@faculdade.com';
const VALID_PASSWORD = 'satelite123';

const LoginScreen = () => {
  const { colors, isDark, toggleTheme, login, isLoading } = useApp();
  const styles = createStyles(colors, isDark);

  const scrollViewRef = useRef<ScrollView>(null);

  const handleFocus = () => {
    setTimeout(() => {
      scrollViewRef.current?.scrollToEnd({ animated: true });
    }, 150);
  };

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const handleLogin = async () => {
    setError('');

    if (!email.trim() || !password.trim()) {
      setError('⚠️ Por favor, preencha todos os campos antes de continuar.');
      return;
    }

    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 800));

    if (
      email.trim().toLowerCase() === VALID_EMAIL &&
      password === VALID_PASSWORD
    ) {
      await login();
    } else {
      setError(
        '❌ Credenciais inválidas. Verifique seu e-mail e senha.\n\n' +
        'Dica: professor@faculdade.com / satelite123'
      );
    }

    setIsSubmitting(false);
  };

  if (isLoading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color={colors.primary} />
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={isDark ? colors.background : '#4C00B0'} />
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.mainContent}
      >
        <ScrollView
          ref={scrollViewRef}
          contentContainerStyle={styles.scrollContent}
          bounces={false}
          keyboardShouldPersistTaps="handled"
        >
          
          <LoginHeader
            isDark={isDark}
            toggleTheme={toggleTheme}
            colors={colors}
          />

          
          <View style={styles.formContainer}>
            <View>
              <Text style={styles.loginTitle}>Login</Text>
              <Text style={styles.loginSubtitle}>
                Seja bem-vindo(a) de volta! Faça login para continuar
              </Text>

              
              <LoginInput
                label="E-mail"
                icon={faEnvelope}
                error={!!error}
                isDark={isDark}
                colors={colors}
                value={email}
                onChangeText={(t) => { setEmail(t); setError(''); }}
                placeholder="professor@faculdade.com"
                keyboardType="email-address"
                autoCapitalize="none"
                autoCorrect={false}
                accessibilityLabel="Campo de e-mail"
                onFocus={handleFocus}
              />

              
              <LoginInput
                label="Senha"
                icon={faKey}
                error={!!error}
                isDark={isDark}
                colors={colors}
                value={password}
                onChangeText={(t) => { setPassword(t); setError(''); }}
                placeholder="••••••••••"
                secureTextEntry={!showPassword}
                showPasswordToggle={true}
                onPasswordTogglePress={() => setShowPassword(!showPassword)}
                accessibilityLabel="Campo de senha"
                onFocus={handleFocus}
              />

              
              {error !== '' && (
                <View style={styles.errorContainer}>
                  <Text style={styles.errorText}>{error}</Text>
                </View>
              )}

              
              <LoginButton
                onPress={handleLogin}
                disabled={isSubmitting}
                isSubmitting={isSubmitting}
                colors={colors}
                text="Entrar"
              />
            </View>

            
            <Text style={styles.footerText}>
              SpaceAlert • Global Solution 2026 • FIAP
            </Text>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default LoginScreen;
