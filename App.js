import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import expo from 'expo';
import HomeScreen from './screens/HomeScreen.js'
import ARScreen from './screens/ARScreen.js'
import WebScreen from './screens/WebScreen.js'

class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
      </View>
    );
  }
}

export default createStackNavigator({
  Home : HomeScreen,
  AR : ARScreen,
  Web: WebScreen
},
{
    headerMode: 'none',
}
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
