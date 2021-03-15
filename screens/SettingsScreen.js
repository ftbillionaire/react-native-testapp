import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

const SettingsScreen = (props) => {
  return (
    <View style={styles.containerView}>
      <Text style={styles.textTitle}>Settings screen</Text>
      <Button title="Posts" onPress={() => props.navigation.navigate('Posts')} />
    </View>
  );
};

const styles = StyleSheet.create({
  containerView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textTitle: {
    fontSize: 24,
  },
});

export default SettingsScreen;
