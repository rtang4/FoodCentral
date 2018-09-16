
import {AppRegistry,Dimensions,Image,ScrollView,StyleSheet,Text,TouchableOpacity,View} from 'react-native';
import { Font,AppLoading } from 'expo';
import FontAwesome from './../node_modules/@expo/vector-icons/fonts/FontAwesome.ttf';
import * as Animatable from 'react-native-animatable';
import { Card, ListItem, Button, Icon, Slider } from 'react-native-elements'
import Camera from '../assets/camera.png';
import React, { Component } from 'react';
import Swipeout from 'react-native-swipeout';
import YelpData from '../assets/data.js'



export default class Slide extends React.Component {
  render(){
    console.log(this.props)
    return(
      <View style={{width: 350, height: 400, backgroundColor: '#fffff2', alignItems: 'center', paddingTop:80, paddingRight:50}}>
        <Text style={{}}>{this.props.restaurant}</Text>
        <Text style={{}}>{this.props.tags}</Text>
        <Text style={{}}>{this.props.price}</Text>
        <TouchableOpacity onPress={()=>this.props.navigation.navigate('Web', {url: this.props.url})}>
          <Text style={{textDecoration: "underline"}}>See Website</Text>
        </TouchableOpacity>
      </View>
      )
    }
  }
