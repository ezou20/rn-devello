import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import PropTypes from 'prop-types';
import Button from '../Button';

export default class Card extends Component {
  render() {
    return (
      <View style={styles.card}>
        <Text>Implement Me!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fffafa',
    borderColor: '#898989',
    borderRadius: 10,
    padding: 50,
    display: 'flex',
    flexDirection: 'row',
    margin: 10,
  },
  textWrap: {
    flex: 3,
  },
  wrapButtons: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
});
