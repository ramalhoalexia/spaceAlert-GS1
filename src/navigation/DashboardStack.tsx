import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DashboardScreen from '../screens/DashboardScreen';
import DetalhesScreen from '../screens/DetalhesScreen';
import { DashboardStackParamList } from '../types/navigation';

const Stack = createNativeStackNavigator<DashboardStackParamList>();


const DashboardStack = () => (
  <Stack.Navigator id={undefined} screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Dashboard" component={DashboardScreen} />
    <Stack.Screen name="Detalhes"  component={DetalhesScreen}  />
  </Stack.Navigator>
);

export default DashboardStack;
