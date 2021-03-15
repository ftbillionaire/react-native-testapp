import React from 'react';
import {
    View,
    Text,
    StyleSheet,
} from 'react-native';


const Header = props => {
    return(
        <View style={styles.headerView}>
            <Text style={styles.titleTxt}>{props.title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    headerView: {
        width: '100%',
        height: 90,
        backgroundColor: '#649cb0',
        alignItems: 'center',
        paddingTop: 45
    },
    titleTxt: {
        color: 'black',
        fontSize: 25
    }
});

export default Header;