import React from 'react';
import { StyleSheet, View, Text, Alert, Share,StatusBar,TouchableOpacity} from 'react-native';
import { Font,AppLoading } from 'expo';
import FontAwesome from './../node_modules/@expo/vector-icons/fonts/FontAwesome.ttf';
import * as Animatable from 'react-native-animatable';
import { Card, ListItem, Button, Icon, Slider } from 'react-native-elements'
import Draggable from 'react-native-draggable'
import Camera from '../assets/camera.png'
import { createStackNavigator } from 'react-navigation';


export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fontLoaded: false,
      distance: 0,
      camera: '../assests/camera.png',
      maxDist: 25,
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

  render(){
    return(
      <View style={styles.headerBox} >
        {this.state.fontLoaded ?
          <View>
            <Draggable renderShape='image' imageSource={Camera} reverse={false} renderSize={56} renderColor='black' offsetX={120} offsetY={200} renderText='A' pressDrag={() => this.navToAR()}/>
            <View>
              <TouchableOpacity onPress={() => this.navToAR()}>
              <Text style={styles.textBig}>InstaYelp!</Text>
              </TouchableOpacity>
            </View>
            <View>
              <Text style={styles.textSmall}>You are located in: Boston</Text>
              <Text style={styles.textSmall}>Find food within: {this.state.distance} miles</Text>
              <View style={{paddingRight:30,paddingLeft:30}}>
                <Slider
                  value={this.state.distance}
                  onValueChange={(distance) => this.roundUp(distance)}
                  maximumValue={this.state.maxDist}
                  minimumValue={this.state.minDist}
                />
              </View>
            </View>
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
