import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Alert, Share } from 'react-native';
import { Font } from 'expo';
import Header from '../components/header.js'

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state={
    }
  }

  render(){
    return(
      <View>
        <Header/>
      </View>
    )
  }
}
