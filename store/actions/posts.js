export const ADD_LIKE = 'ADD_LIKE';

export const addLikes = (id) => ({
  type: ADD_LIKE,
  postId: id,
});
