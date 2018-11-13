
import React, {Component} from 'react';
import { View,Text} from 'react-native';
import Input from "./src/components/Input";
import KeyboardAwareScrollView from "react-native-keyboard-aware-scroll-view";

export default class App extends Component {
  render() {
    return (
      <View> 
        <KeyboardAwareScrollView>
        <Text></Text>
          <Input placeholder="email" type="email"/>
          <Input placeholder="password" type="password" />
          
        </KeyboardAwareScrollView> 
  
      </View>
    );
  }
}
