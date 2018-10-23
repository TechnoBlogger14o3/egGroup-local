/**
* @author Vineet Mishra <vineet.m@photoninfotech.net>
* @version 1.0.0
*/

// import - npm modules
import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

// import - Styles
import componentstyles from "../../styles/componentStyles";

const defaultProps = {
    title: "Button",
    onPress: () => {},
    color: "#333333",
    disabled: false
}
/**
* Represents ExpandCollapseView.
* @class ExpandCollapseView
* @extends Component
*/
class LinkButton extends Component {

    /**
    * @function render
    * React render method for rendering the native elements
    */

    render() {
        return (
          <TouchableOpacity onPress={this.props.onPress} disabled={this.props.disabled}>
              <Text
                  style={[componentstyles.buttonTitle, {color: this.props.color}]}>
                  {this.props.title}
              </Text>
          </TouchableOpacity>
        );
    }
}

LinkButton.defaultProps = defaultProps;

export default LinkButton;
