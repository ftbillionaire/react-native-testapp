import React, {useState} from 'react';
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    FlatList,
    Alert,
    Image,
    Button
} from 'react-native';

import BtnPost from '../components/Buttons/AddButton';
import BtnAlert from '../components/Buttons/AlertButton';
import PostItem from '../components/Boxes/PostItem';
import Card from '../components/Boxes/Card';

import ScreensName from '../constants/screens';

const InitialScreen = props => {
    const [idPost, changeId] = useState(0);
    const [posts, changeText] = useState([]);
    const [title, changeTitle] = useState('');
    const addPost = () => {
      changeId(idPost+1);
      const obj = {
        id: idPost,
        post: title
      }
      changeText(posts=>[obj, ...posts]);
      changeTitle('');
    }

    const checkAlert = () => {
      Alert.alert(
        'Title',
        'Check alert message!',
        [{text: 'OK', onPress: changeTitle('')}]
      )
    }

    return (
        <View>
          <View style={styles.initialView}>
            <Text style={styles.sectionTitle}>Route ID: {props.route.params.ID}</Text>
            <Image
            style={styles.image}
            source={require('../assets/wp4371791.jpg')}
            />
          </View>
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
              <Button
               title="Posts page"
               onPress={()=>props.navigation.navigate('Posts')}
              />
          </View>
          <View style={styles.listView}>
              <FlatList
              data={posts}
              renderItem={({item}) =>{
                return(
                  <PostItem key={item.id} item={item} />
                )
                }}
              />
          </View>
        </View>
    )
};
const styles = StyleSheet.create({
    initialView: {
      alignItems: 'center'
    },
    body: {
      alignItems: 'center',
      marginTop: 20
    },
    image: {
      height: 220,
      width: '70%',
      justifyContent: 'center',
      borderWidth: 4,
      borderRadius: 180,
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

export default InitialScreen;