import Posts from '../../data/PostsData';
import {ADD_LIKE} from '../actions/posts';

const initialState = {
  posts: Posts.posts.data,
};

const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_LIKE:
      var existingPost = state.posts.find((post) => post.id === action.postId);
      existingPost.likes += 1;
      console.log(existingPost);
      return {existingPost, ...state};

    default:
      return state;
  }
};

export default postsReducer;
