import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Alert, Share, Image } from 'react-native';
import { Font } from 'expo';
import Header from '../components/header.js'
import Gallery from '../components/gallery.js'
import Camera from '../assets/camera.png'

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state={
    }
  }

  render(){
    return(
      <View>
        <Header navigation={this.props.navigation}/>
        <View>
          <Gallery navigation={this.props.navigation}/>
        </View>
      </View>
    )
  }
}
