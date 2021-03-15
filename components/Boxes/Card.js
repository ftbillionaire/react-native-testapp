import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Card = (props) => {
    return (
        <View style={styles.cardView}>
            <Text style={styles.cardText}>{props.content}</Text>
            <Text style={styles.cardText}>{props.id}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    cardView: {
        width: "100%",
        alignItems: "center",
        marginTop: 10,
        backgroundColor: "#fff",
        flexDirection: "row",
        justifyContent: "space-between",
        borderColor: "black",
        shadowColor: "#000000",
        shadowOffset: {
            width: 0,
            height: 3
        },
        shadowOpacity: 0.8,
        elevation: 10,
    },
    cardText: {
        fontSize: 24,
        paddingVertical: 20,
        paddingHorizontal: 10,
        color: "black",
        textAlign: "center"
    }
})
export default Card;