import React, { Component } from 'react';
import { PropTypes } from "prop-types";
import { Text} from 'react-native'


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