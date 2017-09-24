import React, { Component } from 'react'
import { StyleSheet, View, TextInput } from 'react-native'
import PropTypes from 'prop-types'

import { Board, Button } from '../Board'

export default class App extends Component {
  render() {
    return (
      <View style={styles.view}>
        <Button onClick={() => console.log("hello, world")} text="Click Me" />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  inputs: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
  },
  view: {
    flex: 1,
  },
});
