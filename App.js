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
  TouchableOpacity
} from 'react-native';

import {
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Initial from './screens/initialScreen';
import Header from './components/Header';
import ScreensName from './constants/screens';
import PostScreens from './screens/PostScreen';

const Stack = createStackNavigator();

const App = () => {
  const [screenNum, setScreen] = useState('');

  const changeScreenState = screen => {
    setScreen(screen);
  }

  let content = <Initial />;
  if(screenNum == ScreensName.POST){
    content = <PostScreens />
  }
  return (
    <>
    <Header title="Hello World!"/>   
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       
          {content}
        </ScrollView>
    </>
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
