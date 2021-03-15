import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
  TextInput,
  FlatList,
  TouchableOpacity,
} from 'react-native';

import {
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import InitialScreen from './screens/initialScreen';
import Header from './components/Header';
import ScreensName from './constants/screens';
import PostScreen from './screens/PostScreen';

import NavigatorStack from './navigation/NavigatorStack';
import NavigatorDrawer from './navigation/NavigatorDrawer';

import Ionicons from 'react-native-vector-icons/Ionicons';

const Stack = createStackNavigator();

const App = () => {
  const [screenName, setScreen] = useState(ScreensName.INITIAL);
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    (async () => {
      await Ionicons.loadFont();
      setLoaded(true);
    })();
  }, []);

  return (
    <NavigationContainer>
      <NavigatorDrawer />
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.white,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
});

export default App;
