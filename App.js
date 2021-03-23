import React, {useState, useEffect} from 'react';
import {StyleSheet} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux';

import ScreensName from './constants/screens';
import NavigatorDrawer from './navigation/NavigatorDrawer';
import postsReducer from './store/reducers/posts';

import Ionicons from 'react-native-vector-icons/Ionicons';

const rootReducer = combineReducers({
  posts: postsReducer,
});

const store = createStore(rootReducer);
const Stack = createStackNavigator();

const App = () => {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    (async () => {
      await Ionicons.loadFont();
      setLoaded(true);
    })();
  }, []);

  return (
    <Provider store={store}>
      <NavigationContainer>
        <NavigatorDrawer />
      </NavigationContainer>
    </Provider>
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
