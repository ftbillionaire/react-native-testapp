import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';

const Card = (props) => {
  return (
    <TouchableOpacity
      onPress={() =>
        props.navigation.navigate('Post', {
          title: props.title,
          id: props.id,
        })
      }>
      <View style={styles.cardView}>
        <Text style={styles.cardText}>{props.title}</Text>
        <Text style={styles.cardText}>{props.id}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cardView: {
    maxWidth: '90%',
    width: '100%',
    alignSelf: 'center',
    marginTop: 10,
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderColor: 'black',
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.8,
    elevation: 10,
  },
  cardText: {
    fontSize: 24,
    paddingVertical: 20,
    paddingHorizontal: 10,
    color: 'black',
    textAlign: 'center',
  },
});

Card.propTypes = {
  title: PropTypes.string,
  id: PropTypes.number,
};

export default Card;
