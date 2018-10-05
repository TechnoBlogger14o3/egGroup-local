import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Icon } from "react-native-elements";

import styles from "../../styles";

const defaultProps = {
    label: "Subscribe the Newsletter",
    checked: false
}

class Checkbox extends Component {

    render() {
        return (
            <View style={[styles.checkboxContainer, this.props.style]}>
                <TouchableOpacity onPress={this.props.onPress}>
                    <Icon
                        name={this.props.checked ? "checkbox-marked" : "checkbox-blank-outline"}
                        type="material-community"
                        color="rgb(141, 198, 63)"
                    />
                </TouchableOpacity>
                {this.props.labelComponent}
            </View>
        );
    }
}

Checkbox.defaultProps = defaultProps;

export default Checkbox;
