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
            <View style={{flex:1, flexGrow:10,backgroundColor:'red', flexDirection:'column'}}>
              <Text>hello world</Text>
              <Gallery images={[
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
              ]}/>
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
