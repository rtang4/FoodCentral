import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Alert, Share,StatusBar,ScrollView } from 'react-native';
import { Font,AppLoading } from 'expo';
import FontAwesome from './../node_modules/@expo/vector-icons/fonts/FontAwesome.ttf';
import * as Animatable from 'react-native-animatable';
import { Card, ListItem, Button, Icon, Slider } from 'react-native-elements'
import Masonry from 'react-native-masonry'
import Camera from '../assets/camera.png'

export default class Gallery extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      images : [
        { uri: 'http://cdn1.medicalnewstoday.com/content/images/articles/267290-apples.jpg' },
        { uri: 'http://i1.wp.com/hellofreshus.wpengine.com/wp-content/uploads/2016/10/HF160920_Global_Blog_All_About_Apples_15_low.jpg' },
        { uri: 'http://www.theblacktruffle.com.au/tbtwp/wp-content/uploads/2017/07/group-of-apples.jpg' },
        { uri: 'https://s3-media3.fl.yelpcdn.com/bphoto/qJSoZ8eOLSXkBq92py5zMg/o.jpg' },
        { uri: 'https://s3-media2.fl.yelpcdn.com/bphoto/qelRdNH497Ha6CpKfm0ulA/o.jpg' },
        { uri: 'https://s3-media1.fl.yelpcdn.com/bphoto/2mLSGH9aGJQoc3mWE1yEKw/o.jpg' },
        { uri: 'https://s3-media3.fl.yelpcdn.com/bphoto/SS2qfGN1S6tZTWWmn5gTuA/o.jpg' },
        { uri: 'https://s3-media3.fl.yelpcdn.com/bphoto/T774hICq8Mlyx-YIh2Z-4A/o.jpg' },
        { uri: 'https://s3-media4.fl.yelpcdn.com/bphoto/o3EUsWCxpqXKQBgG-A3mEQ/o.jpg' },
        { uri: 'https://s3-media3.fl.yelpcdn.com/bphoto/inNV88lmxTxRXXawhSZYrQ/o.jpg' },
        { uri: 'https://s3-media2.fl.yelpcdn.com/bphoto/4bZHmEOCLSbhPL14RI_Hag/o.jpg' },
        { uri: 'https://s3-media3.fl.yelpcdn.com/bphoto/uINva0Yhu4xwR-xxsmj84Q/o.jpg' },
        { uri: 'https://s3-media1.fl.yelpcdn.com/bphoto/6Uka94aThZOO21HGKJn9GA/o.jpg' },
        { uri: 'https://s3-media4.fl.yelpcdn.com/bphoto/Fm8Z3h4Y1MNQc5jenQZFQw/o.jpg' },
        { uri: 'https://s3-media1.fl.yelpcdn.com/bphoto/u4Lkf6hAjqIVUjEdO6f0Kw/o.jpg' },
      ]
    }
  }

  render(){
    console.log("rendered!")
    console.log(this.props.images)
    return(
      <Masonry
        sorted // optional - Default: false
        bricks={this.props.images}
      />
    )
  }
}
