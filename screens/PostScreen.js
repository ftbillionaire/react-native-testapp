import React from 'react';
import {View, StyleSheet} from 'react-native';

import Card from "../components/Boxes/Card";

const PostScreen = (props) => {
    <View style={styles.postDetail}>
        <Card title={props.title} id={props.id}/>
    </View>
}

const styles = ({
    postDetail: {
        maxWidth: "80%",
        margintop: 20
    }
})

export default PostScreen;