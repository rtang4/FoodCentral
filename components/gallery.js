import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Alert, Share,StatusBar, Image } from 'react-native';
import { Font,AppLoading } from 'expo';
import FontAwesome from './../node_modules/@expo/vector-icons/fonts/FontAwesome.ttf';
import * as Animatable from 'react-native-animatable';
import { Card, ListItem, Button, Icon, Slider } from 'react-native-elements'
import Masonry from 'react-native-masonry';
import PhotoGrid from 'react-native-image-grid';
import Camera from '../assets/camera.png';
import BrickList from 'react-native-masonry-brick-list';


// function onProgress(e){
//   console.log(e.nativeEvent.loaded / e.nativeEvent.total)
// }
//
// const fastProps = {
//     resizeMode: FastImage.resizeMode.contain,
//     onProgress: onProgress,
// };

export default class Gallery extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { uri: 'https://img.buzzfeed.com/buzzfeed-static/static/2015-11/30/10/enhanced/webdr15/enhanced-18265-1448896942-17.jpg' },
        { uri: 'https://www.bbcgoodfood.com/sites/default/files/styles/category_retina/public/recipe-collections/collection-image/2013/05/slow-cooker-lamb-curry.jpg?itok=z-2FQfNV' },
        { uri: 'https://www.bbcgoodfood.com/sites/default/files/styles/category_retina/public/recipe-collections/collection-image/2013/05/mexican-chicken-burger_1.jpg?itok=LJYhlfBT' }
      ]
    }
  }

  render(){
    return(
        <View>
          <BrickList
            data = {this.state.data}
            renderItem={(prop)=>this.renderView(prop)}
            columns = {3}
            />
        </View>
    )
  }

  renderView=(prop)=>{
    return(
        <View key={prop.id} style={{
            // margin: 2,
            // borderRadius: 2,
            // backgroundColor: prop.color,
            alignItems:'center',
            justifyContent:'center',
        }} >
            <Image source={{uri: prop.uri}}
                  style={{width: 200, height: 200, resizeMode: 'contain'}}
                />
        </View>
    )
  };

}
