import React, { Component } from 'react';
import { View, Text ,StyleSheet} from 'react-native';
import PropTypes from 'prop-types';
/*
 *  @Params 
 */
Text.propTypes = {
    /*
     * @Params 
     * text : text text as a params
     */
     text : PropTypes.string.isRequired,
    /*
     * @Params 
     * style : text style as a params
     */
     style : PropTypes.object.isRequired
}

/*
 *  @Params Default
 */
Text.defaultProps = {
    /*
     * @Params 
     * text : text text as a params
     */
    text : defaultProps.text,
    /*
     * @Params 
     * style : text style as a params
     */
    style : defaultProps.style

}

const defaultProps = {
    text : 'sample',
    style : style.textStyle
}

export default class Text extends Component {
  render() {
      const { text , style }  = this.props
    return (
        <Text style={style}>{text}</Text>
    );
  }
}


const style = StyleSheet.create({
    textStyle: {
        fontSize: 23,
        color: '#2699FB',
        textAlign: 'center',
        paddingTop: 40,
        paddingBottom: 10,
        marginBottom: 40,
      },
})
