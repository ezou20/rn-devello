import Expo, { Constants } from 'expo';
import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

import MainScreen from './screens/MainScreen';

class Main extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>HSA Devello</Text>
        <MainScreen name="Hi guys"/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Constants.statusBarHeight,
    paddingBottom: 50
  },
});

Expo.registerRootComponent(Main);
