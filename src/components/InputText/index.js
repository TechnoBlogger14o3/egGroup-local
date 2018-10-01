import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { Icon } from "react-native-elements";

import styles from "../../styles";

const defaultProps = {
    mapElement: (n) => {},
    onSubmitEditing: () => {},
    value: "",
    placeholder: "",
    maxLength: 200,
    keyboardType: "default",
    secureTextEntry: false,
    returnKeyType: "next",
    label: "Label",
    style: {},
    isPassword: false,
    onIconPress: () => {}
}

class InputText extends Component {

    mapElement = (node) => {
        this.props.mapElement(node);
    }

    render() {
        return (
            <View style={[styles.textInputContainer, this.props.style]}>
                <Text style={styles.textInputLabel}>{this.props.label}</Text>
                <TextInput
                    style={styles.textInputBox}
                    underlineColorAndroid="rgba(0,0,0,0)"
                    placeholderTextColor="rgba(51, 51, 51, 0.6)"
                    selectionColor= "rgb(51, 51, 51)"
                    returnKeyType={this.props.returnKeyType}
                    placeholder={this.props.placeholder}
                    secureTextEntry={this.props.secureTextEntry}
                    keyboardType= {this.props.keyboardType}
                    maxLength= {this.props.maxLength}
                    value= {this.props.value}
                    onChangeText= {this.props.onChangeText} />
                {this.props.isPassword &&
                  <View style={styles.passwordEyeIconCont}>
                      <TouchableOpacity onPress={this.props.onIconPress}>
                          <Icon
                              name={this.props.secureTextEntry ? "eye" : "eye-off"}
                              type="material-community"
                              color="rgb(51, 51, 51)"
                              size={28}
                               />
                       </TouchableOpacity>
                    </View>

                }
            </View>
        );
    }
}

InputText.defaultProps = defaultProps;

export default InputText;
