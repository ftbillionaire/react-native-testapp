import React from 'react';
import {
  View,
  Text,
  Button,
  FlatList,
  Pressable,
  StyleSheet,
} from 'react-native';
import {useSelector} from 'react-redux';

import Card from '../components/Boxes/Card';

const PostScreen = (props) => {
  const currentPosts = useSelector((state) => state.posts.posts);

  var filteredData = currentPosts.filter((item) => item.user == 'John');

  return (
    <View style={styles.postDetail}>
      <Text style={styles.textTitle}>Posts</Text>
      <Button title="Return" onPress={() => props.navigation.popToTop()} />
      <View style={styles.postsCard}>
        <FlatList
          style={{height: 300}}
          data={filteredData}
          renderItem={(item) => {
            return (
              <Card
                title={item.item.title}
                id={item.item.id}
                navigation={props.navigation}
              />
            );
          }}
          keyExtractor={(item) => item.id}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  postDetail: {
    marginTop: 20,
    maxWidth: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textTitle: {
    fontSize: 24,
  },
  postsCard: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
});

export default PostScreen;
