import React, { Component } from 'react';
import { View,TextInput } from "react-native";
import { PropTypes } from "prop-types";

PasswordInput.propTypes = {
    /*
    * @Params
    * Placeholder : Input Placeholder resuseable get a param
    */
    placeholder : PropTypes.string.isRequired,
    /*
    * @Params
    * name : Input name resuseable get a param
    */
    name : PropTypes.string.isRequired,
    /*
    * @Params
    * value : Input value resuseable get a param
    */
    value : PropTypes.string.isRequired,
    /*
    * @Params
    * onChange : Input onChange resuseable get a param
    */
    onChange: PropTypes.func.isRequired,
    /*
    * @Params
    * value : Input value resuseable get a param
    */
    value : PropTypes.any,
    /*
    * @Params
    * type : Input type resuseable get a param
    */
    type: PropTypes.oneOf(['text', 'number', 'password']),
     /*
    * @Params
    * error : Input Error resuseable get a param
    */
//    error: PropTypes.string
}   
export default class PasswordInput extends Component{
    constructor(props){
        super(props)
        this.state = {
            showPassword : false
        }
    }

    toggleShowPassword = () =>{
    this.setState(prevState =>{
            return { showPassword : !prevState.showPassword}
        })
    }   
    render(){
        const {placeholder ,name ,onChange,value,type} = this.props
        return(
            <View>
                 <TextInput placeholder={placeholder} 
                            name={name} 
                           autoCorrect={false}
                           onChange={onChange}
                           value={value}
                           type={type}
                        ></TextInput>
            </View>
        )
    }
}








