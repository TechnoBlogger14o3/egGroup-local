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

class Phone extends Component {

    mapElement = (node) => {
        this.props.mapElement(node);
    }

    render() {
        return (
            <View style={[styles.textInputContainer, this.props.style]}>
                <Text style={styles.textInputLabel}>{this.props.label}</Text>
                <View style={{flexDirection: "row"}}>
                    <TextInput
                        style={[styles.textInputBox, {width: "12%"}]}
                        underlineColorAndroid="rgba(0,0,0,0)"
                        placeholderTextColor="rgba(51, 51, 51, 0.6)"
                        selectionColor= "rgb(51, 51, 51)"
                        returnKeyType={this.props.returnKeyType}
                        secureTextEntry={this.props.secureTextEntry}
                        keyboardType= {this.props.keyboardType}
                        maxLength= {this.props.maxLength}
                        value="+31"
                        onChangeText= {this.props.onChangeText} />
                    <View style={{marginTop: 15, height: 25, borderRightWidth: 1, borderColor: "rgba(51, 51, 51, 0.6)"}}></View>
                    <TextInput
                        style={[styles.textInputBox, {width: "88%", paddingLeft: 16}]}
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
                </View>
            </View>
        );
    }
}

Phone.defaultProps = defaultProps;

export default Phone;
