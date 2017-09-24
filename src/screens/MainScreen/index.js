import React, { Component } from "react"
import {
  Text,
  ScrollView,
  StyleSheet,
  View
} from "react-native"
import PropTypes from "prop-types"
import {
  Button
} from '../../components'

export default class MainScreen extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
  }

  clickFunction = () => {
    console.log("hello, world");
  }

  render() {
    return (
      <ScrollView style={styles.view}>
        <Text style={styles.header}>Devello!</Text>
        <Button onClick={this.clickFunction} style="backward" text="Click Me" />
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    height: 10,
    backgroundColor: "white",
  },
  header: {
    fontSize: 30,
    textAlign: "center",
    marginTop: 15
  }
})