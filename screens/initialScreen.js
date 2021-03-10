import React, {useState} from 'react';
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    FlatList,
    Alert
} from 'react-native';

import BtnPost from '../components/Buttons/AddButton';
import BtnAlert from '../components/Buttons/AlertButton';
import PostItem from '../components/Boxes/PostItem';

import Card from '../components/Boxes/Card';

const Initial = () => {
    const [idPost, changeId] = useState(0);
    const [posts, changeText] = useState([]);
    const [title, changeTitle] = useState('');
    const addPost = () => {
      changeId(idPost+1);
      const obj = {
        id: idPost,
        post: title
      }
      changeText(posts=>[...posts, obj]);
      changeTitle('');
    }
  
    const removePost = postId => {
      changeText(currentPosts => {
        return currentPosts.filter((post) => post.id !== postId);
      })
    }

    const checkAlert = () => {
      Alert.alert(
        'Title',
        'Check alert message!',
        [{text: 'OK', onPress: changeTitle('')}]
      )
    }
    return (
        <>
        <Text style={styles.sectionTitle}>Add post</Text>
        <View style={styles.body}>
            <TextInput
             placeholder="Add Title to post"
             style={styles.textInput}
             onChangeText={text=>{changeTitle(text)}}
             clearButtonMode="always"
             value={title}
            />
            <BtnPost title="Add Post" line="dfs" createPost={addPost} />
            <BtnAlert title="Alert" line="dfs" createPost={checkAlert} />
            {/* <Card id="1" content="fdfsd"/> */}
        </View>
        <View style={styles.listView}>
            <FlatList
             data={posts}
             renderItem={({item}) =>{
               return(
                <PostItem item={item} onDelete={removePost}/>
               )
              }}
            />
          </View>
        </>
    )
};
const styles = StyleSheet.create({
    body: {
        alignItems: 'center',
        marginTop: 20
    },
    textInput: {
      width: 275,
      borderWidth: 1,
      padding: 10,
      marginBottom: 10,
      borderRadius: 19
    },
    listView: {
      flex: 1,
      paddingTop: 22,
    },
    sectionTitle: {
        marginTop: 15,
        textAlign: 'center',
        fontSize: 28
    }
});

export default Initial;