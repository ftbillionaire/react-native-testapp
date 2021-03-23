import React from 'react';
import {createDrawerNavigator, useIsDrawerOpen} from '@react-navigation/drawer';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {SettingsStack} from './NavigatorStack';
import NavigatorTab from './NavigatorTab';

import Settings from '../screens/SettingsScreen';

const Drawer = createDrawerNavigator();

export default function NavigatorDrawer() {
  return (
    <Drawer.Navigator
      drawerStyle={{
        backgroundColor: '#F58D77',
      }}
      drawerContentOptions={{
        inactiveTintColor: '#fff',
        activeTintColor: '#fff',
      }}>
      <Drawer.Screen
        name="Profile"
        component={NavigatorTab}
        options={{
          drawerIcon: ({focused, size}) => (
            <Ionicons
              name={focused ? 'home' : 'home-outline'}
              size={size}
              color="#fff"
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Settings"
        component={SettingsStack}
        options={{
          drawerIcon: ({focused, size}) => (
            <Ionicons
              name={focused ? 'settings' : 'settings-outline'}
              size={size}
              color="#fff"
            />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}
