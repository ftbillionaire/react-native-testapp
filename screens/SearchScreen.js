import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const SearchScreen = () => {

    return(
        <View style={styles.profileDetail}>
            <Text>Search</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    profileDetail: {
        flex: 1,
        alignItems: 'center'
    }
})

export default SearchScreen;