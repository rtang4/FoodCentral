import React from 'react';
import { StyleSheet, View, Text, Alert, Share,StatusBar,TouchableOpacity,ScrollView} from 'react-native';
import { Font,AppLoading } from 'expo';
import FontAwesome from './../node_modules/@expo/vector-icons/fonts/FontAwesome.ttf';
import * as Animatable from 'react-native-animatable';
import { Card, ListItem, Button, Icon } from 'react-native-elements'
import Draggable from 'react-native-draggable'
import Camera from '../assets/camera.png'
import { createStackNavigator } from 'react-navigation';
import Gallery from '../components/gallery.js'
import Slider from "react-native-slider";


export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fontLoaded: false,
      distance: 0,
      maxDist: 10,
      minDist: 1
    }
  }

  async componentDidMount() {
    try {
      await Font.loadAsync({
        FontAwesome
        //circular // require()
      });
      this.setState({ fontLoaded: true });
    } catch (error) {
      console.log('Error with getting FontAwesome', error);
    }
  }
  roundUp(num){
    let newNum = Math.floor(num)
    this.setState({distance: newNum})
  }
  navToAR(){
    this.props.navigation.navigate('AR')
  }

  galleryRender(){}

  render(){
    console.log("header")
    return(
      <View style={styles.headerBox} >
        {this.state.fontLoaded ?
          <View>
            <View>
              <TouchableOpacity onPress={() => this.navToAR()}>
              <Text style={styles.textBig}>InstaYelp!</Text>
              </TouchableOpacity>
            </View>
            <View>
              <Text style={styles.textSmall}>You are located in: Boston</Text>
              <Text style={styles.textSmall}>Find food within: {this.state.distance} miles</Text>
              <View style={{paddingRight:20,paddingLeft:20}}>
                <Slider
                  value={this.state.distance}
                  onSlidingComplete={distance => this.roundUp(distance)}
                />
              </View>
            </View>
            <ScrollView>
              <Gallery navigation={this.props.navigation}/>
            </ScrollView>
          </View>
        :
        <AppLoading/>
        }
      </View>
    )
  }
}

const styles = StyleSheet.create({
  headerBox:{
    backgroundColor: "#F0F8FF",
    paddingTop: 10,
  },
  textBig: {
    fontSize: 40,
    textAlign: 'center',
    justifyContent: 'center',
    margin: 10,
    fontWeight: 'bold'
  },
  textSmall:{
    textAlign: 'center',
    justifyContent: 'center',
    fontSize:20,
    fontWeight: 'bold'
  }
});
