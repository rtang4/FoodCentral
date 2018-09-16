import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from 'react-navigation';
// import expo from 'expo';
import HomeScreen from './screens/HomeScreen.js'

class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
      </View>
    );
  }
}

export default createStackNavigator({
  Home : HomeScreen
},
{
    headerMode: 'none',
    mode: 'modal',
    navigationOptions: {
      gesturesEnabled: false,
    },
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
