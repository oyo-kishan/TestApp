import React from 'react';
import { AppRegistry } from 'react-native';
import HomeScreen from './HomeScreen';


class myApp extends React.Component {
  render(){
      return(
          <HomeScreen/>
      )
  }
}

AppRegistry.registerComponent('MyReactNativeApp',() => myApp);