import React from 'react';
import { View } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import useApp from '../../hooks/useApp';
import { TabIconProps } from '../../types';

const TabIcon = ({ icon, focused }: TabIconProps) => {
  const { colors } = useApp();

  return (
    <View
      style={
        focused
          ? {
            backgroundColor: colors.primary,
            borderRadius: 22,
            width: 44,
            height: 44,
            alignItems: 'center',
            justifyContent: 'center',
            shadowColor: '#006DD3',
            shadowOffset: { width: 1, height: 4 },
            shadowOpacity: 0.7,
            shadowRadius: 6,
            elevation: 5,
          }
          : {
            alignItems: 'center',
            justifyContent: 'center',
            width: 48,
            height: 32,
          }
      }
    >
      <FontAwesomeIcon
        icon={icon as any}
        color={focused ? '#FFFFFF' : colors.textMuted}
        size={25}
      />
    </View>
  );
};

export default TabIcon;
