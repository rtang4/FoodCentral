import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Alert, Share,ScrollView } from 'react-native';
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
    return(
      <ScrollView>
      <Masonry
        bricks={[
          { uri: 'https://csharpcorner-mindcrackerinc.netdna-ssl.com/UploadFile/c63ec5/math-functions-in-phppart-2/Images/math-floor-function-in-php.jpg' },
          { uri: 'http://i1.wp.com/hellofreshus.wpengine.com/wp-content/uploads/2016/10/HF160920_Global_Blog_All_About_Apples_15_low.jpg' },
          { uri: 'http://www.theblacktruffle.com.au/tbtwp/wp-content/uploads/2017/07/group-of-apples.jpg' }
        ]}
      />
      </ScrollView>
    )
  }
}
