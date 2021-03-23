import React from 'react';
import {StyleSheet} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import ProfileScreen from '../screens/ProfileScreen';
import SearchScreen from '../screens/SearchScreen';

import {HomeStack, SearchStack} from './NavigatorStack';

const Tab = createBottomTabNavigator();

export default function NavigatorTab() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: '#F58D77',
        inactiveTintColor: 'gray',
      }}>
      <Tab.Screen
        name="Profile"
        component={HomeStack}
        options={{
          tabBarIcon: ({focused, color, size}) => {
            let iconName = focused ? 'home' : 'home-outline';
            return <Ionicons name={iconName} color={color} size={size} />;
          },
          tabBarBadge: 1,
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchStack}
        options={{
          tabBarIcon: ({focused, color, size}) => {
            let iconName = focused ? 'search' : 'search-outline';
            return <Ionicons name={iconName} color={color} size={size} />;
          },
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  homeView: {
    flex: 1,
    alignItems: 'center',
  },
});
