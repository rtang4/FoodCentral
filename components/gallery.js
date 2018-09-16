
import {AppRegistry,Dimensions,Image,ScrollView,StyleSheet,Text,TouchableOpacity,View} from 'react-native';
import { Font,AppLoading } from 'expo';
import FontAwesome from './../node_modules/@expo/vector-icons/fonts/FontAwesome.ttf';
import * as Animatable from 'react-native-animatable';
import { Card, ListItem, Button, Icon, Slider } from 'react-native-elements'
import Camera from '../assets/camera.png';
import React, { Component } from 'react';
import Swipeout from 'react-native-swipeout';
import YelpData from '../assets/data.js'
import Slide from './slide.js'



export default class Gallery extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      galleryImg : YelpData,
      test : [{text: 'Button'},{text: 'Button'}]
    }
  }

  navToWeb(url){
    console.log(url)
    this.props.navigation.navigate('Web',{url:url})
  }

  render(){
    return(
      <View style={{flex:1, flexDirection:'column', itemAlign: 'center', justifyContent: 'center', paddingLeft:10}}>
        {this.state.galleryImg.map(photo =>
          { console.log(photo)
            return <View style={{width: 350, height: 400, backgroundColor: 'steelblue', justifyContent: 'center'}}>
            <Swipeout buttonWidth={300} right={[{component:
              <Slide restaurant={photo.restaurant} tags={photo.tags} url={photo.shopurl}
                navigation={this.props.navigation} price={photo.price} />
            }]}>
            <Image
              style={{width: 350, height: 500}}
              source={{uri: photo.foodurl}}
            />
          </Swipeout>
          </View>})}
        </View>
      )
    }
  }
