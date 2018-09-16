import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Alert, Share,StatusBar } from 'react-native';
import { Font,AppLoading } from 'expo';
import FontAwesome from './../node_modules/@expo/vector-icons/fonts/FontAwesome.ttf';
import * as Animatable from 'react-native-animatable';
import { Card, ListItem, Button, Icon, Slider } from 'react-native-elements'
import Masonry from 'react-native-masonry';
import Camera from '../assets/camera.png'

export default class Gallery extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render(){
    return(
      <View>
        <Masonry
          sorted // optional - Default: false
          columns={4} // optional - Default: 2
          bricks={[
            { uri: 'http://cdn1.medicalnewstoday.com/content/images/articles/267290-apples.jpg' },
            { uri: 'http://i1.wp.com/hellofreshus.wpengine.com/wp-content/uploads/2016/10/HF160920_Global_Blog_All_About_Apples_15_low.jpg' },
            { uri: 'http://www.theblacktruffle.com.au/tbtwp/wp-content/uploads/2017/07/group-of-apples.jpg' }
          ]}
        />
        <Text>hello</Text>
      </View>
    )
  }
}
