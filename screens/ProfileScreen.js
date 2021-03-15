import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

const ProfileScreen = ({navigation}) => {
  return (
    <View style={styles.profileDetail}>
      <Text style={styles.titleView}>Profile</Text>
      <Button title="Posts page" onPress={() => navigation.navigate('Posts')} />
    </View>
  );
};

const styles = StyleSheet.create({
  profileDetail: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleView: {
    fontSize: 24,
  },
});

export default ProfileScreen;
