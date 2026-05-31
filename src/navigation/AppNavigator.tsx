import React from 'react';
import { View, Text, ActivityIndicator, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import useApp from '../hooks/useApp';
import LoginScreen from '../screens/LoginScreen';
import MainTabNavigator from './MainTabNavigator';
import { RootStackParamList } from '../types/navigation';

const Stack = createNativeStackNavigator<RootStackParamList>();


const AppNavigator = () => {
  const { isAuthenticated, isLoading, colors, isDark } = useApp();

  
  const navTheme = {
    dark: isDark,
    colors: {
      primary: colors.primary,
      background: colors.background,
      card: colors.surface,
      text: colors.text,
      border: colors.tabBarBorder,
      notification: colors.danger,
    },
    fonts: {
      regular: {
        fontFamily: 'System',
        fontWeight: '400' as const,
      },
      medium: {
        fontFamily: 'System',
        fontWeight: '500' as const,
      },
      bold: {
        fontFamily: 'System',
        fontWeight: '700' as const,
      },
      heavy: {
        fontFamily: 'System',
        fontWeight: '900' as const,
      },
    },
  };

  
  if (isLoading) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: colors.background,
        }}
      >
        <StatusBar barStyle={colors.statusBar} backgroundColor={colors.background} />
        <Text style={{ fontSize: 44, marginBottom: 16 }}>🛰️</Text>
        <Text style={{ fontSize: 22, fontWeight: '800', color: colors.primary }}>
          SpaceAlert
        </Text>
        <ActivityIndicator size="large" color={colors.primary} style={{ marginTop: 20 }} />
        <Text style={{ fontSize: 13, color: colors.textMuted, marginTop: 10 }}>
          Carregando dados...
        </Text>
      </View>
    );
  }

  return (
    <NavigationContainer theme={navTheme}>
      <StatusBar barStyle={colors.statusBar} backgroundColor={colors.background} />
      {isAuthenticated ? (
        
        <MainTabNavigator />
      ) : (
        
        <Stack.Navigator id={undefined} screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Login" component={LoginScreen} />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
};

export default AppNavigator;
