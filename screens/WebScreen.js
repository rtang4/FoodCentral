import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Alert, Share,ScrollView, WebView } from 'react-native';
import { Font } from 'expo';
import Header from '../components/header.js'
import Gallery from '../components/gallery.js'
import Masonry from 'react-native-masonry'

export default class ARScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state={
    }
  }

  render(){
    console.log(this.props.url)
    return(
      <WebView
        source={{uri: this.props.navigation.state.params.url}}
        style={{marginTop: 20}}
      />
    )
  }
}
