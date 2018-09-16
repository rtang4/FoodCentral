import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Alert, Share } from 'react-native';
import { Font } from 'expo';
import Header from '../components/header.js'
import Gallery from '../components/gallery.js'
import Draggable from 'react-native-draggable'
import Camera from '../assets/camera.png'

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state={
    }
  }

  render(){
    console.log("heeelo")
    return(
      <View style={{flex:1, flexDirection:'column'}}>
        <Draggable renderShape='image' imageSource={Camera} reverse={false} renderSize={56} renderColor='black' offsetX={120} offsetY={200} renderText='A' pressDrag={() => this.props.navigation.navigate('AR')}/>
        <Header navigation={this.props.navigation}/>

      </View>
    )
  }
}
