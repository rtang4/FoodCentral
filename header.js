import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Alert, Share,StatusBar } from 'react-native';
import { Font,AppLoading } from 'expo';
import FontAwesome from './../node_modules/@expo/vector-icons/fonts/FontAwesome.ttf';
import * as Animatable from 'react-native-animatable';
import { Card, ListItem, Button, Icon } from 'react-native-elements'
import Draggable from 'react-native-draggable'


export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fontLoaded: false,
      distance: 50,
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
  render(){
    return(
      <View style={styles.headerBox} >
        {this.state.fontLoaded ?
          <View>
            <Draggable reverse={false} renderSize={56} renderColor='black' offsetX={-100} offsetY={-200} renderText='A' pressDrag={()=>alert('touched!!')}/>
            <View>
              <Text style={styles.textBig}>InstaYelp!</Text>
              <Icon
              name='camera'
              type='font-awesome'
              color='#fff'
              size='125'
              />
            </View>
            <View >
              <Text>You are located in: Boston</Text>
              <Text>Find food within: {this.state.distance}</Text>
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
});
