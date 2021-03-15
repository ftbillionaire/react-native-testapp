import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

import ProfileScreen from '../screens/ProfileScreen';
import SettingsScreen from '../screens/SettingsScreen';

import PostScreen from '../screens/PostScreen';
import SearchScreen from '../screens/SearchScreen';

const Stack = createStackNavigator();

function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={ProfileScreen}
        options={(props) => ({
          headerStyle: {
            backgroundColor: '#F58D77',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        })}
        initialParams={{ID: 11}}
      />
      <Stack.Screen
        name="Posts"
        component={PostScreen}
        options={(props) => ({
          headerStyle: {
            backgroundColor: '#F58D77',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        })}
      />
    </Stack.Navigator>
  );
}

function SearchStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen 
       name="Search" 
       component={SearchScreen} 
       options={{
         headerStyle: {
           backgroundColor: "#F58D77"
         },
         headerTintColor: "#fff",
         headerTitleStyle: {
           fontWeight: "bold"
         }
       }}
      />
    </Stack.Navigator>
  );
}

function SettingsStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          headerStyle: {
            backgroundColor: '#F58D77',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
    </Stack.Navigator>
  );
}

export {HomeStack, SettingsStack, SearchStack};
