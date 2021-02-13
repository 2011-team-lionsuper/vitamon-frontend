import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ImageBackground,
  Platform,
  Dimensions, 
  Alert
} from "react-native";
import { Block, Button, Card, Icon, Input, NavBar } from 'galio-framework';

import { connect } from "react-redux";
import AppIntroSlider from 'react-native-app-intro-slider';
import theme from '../theme';
const { height, width } = Dimensions.get('window');

const slides = [
  {
    key: 1,
    title: 'Title 1',
    text: 'Description.\nSay something cool',
    image: require('../../assets/register-bg.png'),
    backgroundColor: '#59b2ab',
  },
  {
    key: 2,
    title: 'Title 2',
    text: 'Other cool stuff',
    image: require('../../assets/register-bg.png'),
    backgroundColor: '#febe29',
  },
  {
    key: 3,
    title: 'Rocket guy',
    text: 'I\'m already out of descriptions\n\nLorem ipsum bla bla bla',
    image: require('../../assets/register-bg.png'),
    backgroundColor: '#22bcb5',
  }
];
 
 class WelcomeScreen extends React.Component {
  state = {
    showRealApp: false
  }
  _renderItem = ({ item }) => {
    return (
     
      
     
      <View style={styles.slide2}>
        <Text style={styles.title}>{item.title}</Text>
        <Image source={item.image} />
        <Text style={styles.text}>{item.text}</Text>
      </View>
   
    );
  }
  _onDone = () => {
    // User finished the introduction. Show real app through
    // navigation or simply by controlling state
    this.setState({ showRealApp: false });
    Alert.alert('Go to Goals Below!')
  }
  render() {
    if (this.state.showRealApp) {
      return <App />;
    } else {
      return <AppIntroSlider renderItem={this._renderItem} data={slides} onDone={this._onDone}/>;
    }
  }
}
const styles = StyleSheet.create({
  buttonCircle: {
    width: 40,
    height: 40,
    backgroundColor: 'rgba(0, 0, 0, .2)',
    // borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  slide: {
    width: 200,
    height: 200,
    resizeMode: 'contain'
  },
  text: {
    paddingTop: 25,
    paddingBottom: 10,
    fontSize: 23,
    fontWeight: 'bold',
    color: '#009CFF',
    alignSelf: 'center'
  },
  title: {
    fontSize: 26,
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
    // marginTop: 20,
  },
  slide2: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    // padding: 20
    resizeMode: 'contain'
  }
})


// const mapState = (state) => {
//   return {
//     user: state.user,
//     //friends: state.friends,
//   };
// };



// export default connect(mapState)(WelcomeScreen);
export default WelcomeScreen

