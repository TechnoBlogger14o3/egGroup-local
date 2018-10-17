import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Icon } from "react-native-elements";

import styles from "../../styles/componentStyles";

const defaultProps = {
    title: "Button",
    backgroundColor: "gray",
    iconName: "",
    onPress: () => {},
    disabled: false
}

class Button extends Component {

    render() {
        return (
            <View style={styles.buttonContainer}>
                <TouchableOpacity onPress={this.props.onPress} disabled={this.props.disabled}>
                    <View style={[styles.buttonStyle, {backgroundColor: this.props.backgroundColor}]}>
                        {this.props.iconName.length > 0 &&
                            <Icon
                                name={this.props.iconName}
                                type="material-community"
                                color='#ffffff'
                                iconStyle={{marginRight: 7}} />
                        }
                        <Text style={styles.buttonTitle}>{this.props.title}</Text>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }
}

Button.defaultProps = defaultProps;

export default Button;
