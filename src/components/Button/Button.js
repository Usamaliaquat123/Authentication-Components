import React, { Component } from 'react';
import { PropTypes } from "prop-types";
import { Text, StyleSheet} from 'react-native'


Button.propTypes = {
   /*
    * @Params
    * text : Button text resuseable get a param
    */
   text : PropTypes.string.isRequired,
    /*
    * @Params
    * onPress : Button press resuseable get a param
    */
   onPress : PropTypes.func.isRequired,
   /*
    * @Params
    * style: Button styles resuseable get a param
    */
   buttonStyle : PropTypes.object.isRequired,
   /*
    * @Params
    * textStyle: Button textStyle resuseable get a param
    */
   textStyle : PropTypes.object.isRequired
}

/*
 * 
 * Default @Params
 * 
 */ 

 Button.defaultProps = {
   /*
    * @Params
    * text : Button text resuseable get a param
    */
   text : "Signin",
   /*
    * @Params
    * onPress : Button press resuseable get a param
    */
   onPress : defaultOnPress,
   /*
    * @Params
    * style: Button styles resuseable get a param
    */
   buttonStyle : style.button,
   /*
    * @Params
    * textStyle: Button textStyle resuseable get a param
    */
   textStyle : style.buttonText
 }


 defaultOnPress = () => {

 }


export default class Button extends Component{
  constructor(props){
    super(props)
  }

  render(){
    const { text, onPress ,buttonStyle ,textStyle} = this.props;
    return(
      <TouchableOpacity style={buttonStyle} onPress={onPress}>
          <Text style={textStyle}>{text}</Text>
      </TouchableOpacity>
    )
  }
}


const style = StyleSheet.create({
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  button: {
    alignSelf: 'stretch',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#232632',
    marginTop: 30,
    marginLeft : 70,
    marginRight: 70,
  }
})

