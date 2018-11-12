/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { View,TextInput,Text} from 'react-native';
import PasswordInput from "./src/components/passwordInput";


export default class App extends Component {
  render() {
    return (
      <View>  
        <Text>Reuseable Components</Text>
          <PasswordInput placeholder="ajsdh" 
                      
                        />

          {/* <TextInput paceholder="taresg"></TextInput> */}
      </View>
    );
  }
}
