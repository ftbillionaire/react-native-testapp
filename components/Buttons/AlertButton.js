import React from 'react';
import { TouchableOpacity, Text, View, StyleSheet } from 'react-native';

const BtnAlert = (props) => {
    const {createPost, title} = props;
    return(
        <View>
            <TouchableOpacity
             style={styles.btnView}
             onPress={createPost}
            >
                <Text
                 style={styles.textBtn}
                >
                    {title}
                </Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    btnView: {
        backgroundColor: '#FC5936',
        height: 40,
        width: 150,
        alignItems: 'center',
        borderRadius: 18,
        padding: 10,
        marginTop: 10,
    },
    textBtn: {
        color: '#fff',
        fontWeight: 'bold'
    }
})

export default BtnAlert;