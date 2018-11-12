import React, { Component } from 'react';
import {View} from 'react-native'


export default class Login extends Component{
    render(){
        const {PageName , } = this.props
        return(
            <View style={styles.divStyle}>
            <KeyboardAwareScrollView style={styles.logForm} resetScrollToCoords={{ x: 0, y: 0 }} scrollEnabled={true} automaticallyAdjustContentInsets={false} keyboardShouldPersistTaps="always" showsVerticalScrollIndicator={false}>
              <Text style={styles.textStyle}>{PageName}</Text>
              <TextInput style={[styles.textInput, !this.state.validated ? styles.error : null]} placeholder="Username or Email" underlineColorAndroid={'transparent'} keyboardType={'email-address'}
                autoCapitalize={'none'} autoCorrect={false} onChangeText={(text) => this.validate(text)}
                value={this.state.email}></TextInput>
              <TextInput style={[styles.textInput, !this.state.passwordvalidation ? styles.error : null]} placeholder="Password" underlineColorAndroid={'transparent'} secureTextEntry={true} onChangeText={(text) => this.getpassword(text)} value={this.state.password} maxLength={25} autoCapitalize={'none'} autoCorrect={false}></TextInput>
              <Text style={styles.forgotpass}>Forgot Password ?</Text>
              <TouchableOpacity style={styles.loginButton} onPress={this.loginPressed}>
                <Text style={styles.btnText}> LOGIN </Text>
              </TouchableOpacity>
             
              <View style={styles.inlineComp} >
                <Text style={styles.donthaveaccount} onPress={() => this.props.navigation.navigate('RegisterScreen')}>Don't have an account? <Text style={styles.donthaveaccountinnertext}>Sign up</Text></Text>
              </View>
            </KeyboardAwareScrollView>
          </View>
        )
    }
} 
