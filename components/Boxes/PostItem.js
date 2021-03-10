import React from 'react';
import {
    TouchableOpacity,
    View,
    StyleSheet,
    Text
} from 'react-native';

const PostItem = props => {
    return(
        <TouchableOpacity onPress={props.onDelete.bind(this, props.item.id)}>
            <View style={styles.itemView}>
                <Text style={styles.lineItem}>{props.item.post}</Text>
                <Text style={styles.lineItem}>{props.item.id}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    lineItem: {
        padding: 10,
        fontSize: 24
    },
    itemView: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
});

export default PostItem;