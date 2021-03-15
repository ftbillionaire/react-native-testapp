import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

import Card from '../components/Boxes/Card';

import ScreensName from '../constants/screens';

const PostScreen = (props) => {
  return (
    <View style={styles.postDetail}>
      <Card title={props.title} id={props.id} />
      <Button title="Return" onPress={() => props.navigation.popToTop()} />
    </View>
  );
};

const styles = StyleSheet.create({
  postDetail: {
    maxWidth: '100%',
    marginTop: 20,
    alignItems: 'center',
  },
});

export default PostScreen;
