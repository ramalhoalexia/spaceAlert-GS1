import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { faSatellite, faClipboardCheck, faClockRotateLeft, faPaperclip } from '@fortawesome/free-solid-svg-icons';
import useApp from '../hooks/useApp';
import TabIcon from '../components/TabIcon';
import DashboardStack from './DashboardStack';
import ApresentacaoScreen from '../screens/ApresentacaoScreen';
import AcoesScreen from '../screens/AcoesScreen';
import HistoricoScreen from '../screens/HistoricoScreen';
import { MainTabParamList } from '../types/navigation';

const Tab = createBottomTabNavigator<MainTabParamList>();


const MainTabNavigator = () => {
  const { colors } = useApp();
  const insets = useSafeAreaInsets();

  const TAB_BAR_BASE_HEIGHT = 76;

  return (
    <Tab.Navigator
      id={undefined}
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          backgroundColor: colors.surface,
          borderTopWidth: 0,
          height: TAB_BAR_BASE_HEIGHT + insets.bottom,
          paddingTop: 15,
          paddingHorizontal: 20,
          borderTopRightRadius: 20,
          borderTopLeftRadius: 20,
          shadowColor: '#000000',
          shadowOffset: { width: 0, height: -4 },
          shadowOpacity: 0.05,
          shadowRadius: 10,
          elevation: 8,
        },
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.textMuted,
        tabBarShowLabel: false,
      }}
    >
      <Tab.Screen
        name="DashboardTab"
        component={DashboardStack}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabIcon icon={faSatellite} focused={focused} />
          ),
        }}
      />

      <Tab.Screen
        name="AcoesTab"
        component={AcoesScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabIcon icon={faClipboardCheck} focused={focused} />
          ),
        }}
      />

      <Tab.Screen
        name="HistoricoTab"
        component={HistoricoScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabIcon icon={faClockRotateLeft} focused={focused} />
          ),
        }}
      />

      <Tab.Screen
        name="ApresentacaoTab"
        component={ApresentacaoScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabIcon icon={faPaperclip} focused={focused} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default MainTabNavigator;
