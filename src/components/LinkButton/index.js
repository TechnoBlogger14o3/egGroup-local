import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import styles from "../../styles";

const defaultProps = {
    title: "Button",
    onPress: () => {},
    color: "#333333",
    disabled: false
}

class LinkButton extends Component {

    render() {
        return (
          <TouchableOpacity onPress={this.props.onPress} disabled={this.props.disabled}>
              <Text
                  style={[styles.buttonTitle, {color: this.props.color}]}>
                  {this.props.title}
              </Text>
          </TouchableOpacity>
        );
    }
}

LinkButton.defaultProps = defaultProps;

export default LinkButton;
