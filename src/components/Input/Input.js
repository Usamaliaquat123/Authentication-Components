import React, { Component } from 'react';
import { View,TextInput } from "react-native";
import { PropTypes } from "prop-types";



/*
 * Default Props Model
 */
const defaultProps = {
    name : '',
    placeholder : '',
    onChange : onChangeTrigger,
    value : '',
    type : '',
    style : style.TextInput
}



Input.propTypes = {
    /*
    * @Params
    * Placeholder : Input Placeholder resuseable get a param
    */
    placeholder : PropTypes.string.isRequired,
    /*
    * @Params
    * name : Input name resuseable get as a param
    */
    name : PropTypes.string.isRequired,
    /*
    * @Params
    * value : Input value resuseable get as a param
    */
    value : PropTypes.string.isRequired,
    /*
    * @Params
    * onChange : Input onChange resuseable get as a param
    */
    onChange: PropTypes.func.isRequired,
    /*
    * @Params
    * value : Input value resuseable get as a param
    */
    value : PropTypes.any,
    /*
    * @Params
    * type : Input type resuseable get as a param
    */
    type: PropTypes.oneOf(['text', 'number', 'password']),
    /*
    * @Params
    * error : Input Error resuseable get as a param
    */
    error: PropTypes.string,
   /*
    * @Params
    * style : Input Styles resuseable get as a param
    */
    style : PropTypes.obj.isRequired
   
}   

Input.defaultProps = {
    name : defaultProps.name,
    placeholder : defaultProps.placeholder,
    onChange : defaultProps.onChange,
    value : defaultProps.value,
    type : defaultProps.type,
    style : defaultProps.style
}




onChangeTrigger = () => {

}
export default class Input extends Component{
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
        const {placeholder ,name ,onChange,value,type,style} = this.props
        return(
                 <TextInput placeholder={placeholder} 
                            name={name} 
                           autoCorrect={false}
                           onChange={onChange}
                           value={value}
                           type={type}
                           style={style}
                        ></TextInput>
        )
    }
}
/*
 * StyleSheet Default setup
 */
const style = StyleSheet.create({
    textInput: {
        alignSelf: 'stretch',
        height: 40,
        marginBottom: 30,
        color: '#232632',
        borderBottomColor: '#232632',
        borderBottomWidth: 1,
      }
})








