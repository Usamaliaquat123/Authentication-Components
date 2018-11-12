/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { View,Text} from 'react-native';
import Input from "./src/components/Input";


export default class App extends Component {
  render() {
    return (
      <View>  
        <Text>Reuseable Components</Text>
          <Input placeholder="email" type="email"/>
          <Input placeholder="password" type="password" />
      </View>
    );
  }
}
