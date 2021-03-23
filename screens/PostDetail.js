import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {View, Text, Button, StyleSheet} from 'react-native';

import {addLikes} from '../store/actions/posts';
import {connect} from 'react-redux';

const PostDetail = (props) => {
  const allPosts = useSelector((state) => state.posts.posts);
  const currentPost = allPosts.find((item) => item.id == props.route.params.id);

  const dispatch = useDispatch();
  const addLikesHandler = () => {
    dispatch(addLikes(currentPost.id));
  };
  console.log(props.posts);
  return (
    <View style={styles.detailContainer}>
      <Text style={styles.textDetail}>{props.route.params.title}</Text>
      <View style={styles.likeActions}>
        <Button title="Like" style={styles.likeBtn} onPress={addLikesHandler} />
        <Text style={styles.textDetail}></Text>
        <Button title="Dislike" style={styles.likeBtn} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  detailContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textDetail: {
    fontSize: 24,
  },
  likeActions: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

function mapStateToProps(state) {
  return {
    likes: state.posts.likes,
  };
}

export default connect(mapStateToProps)(PostDetail);
