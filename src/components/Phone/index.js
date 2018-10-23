/**
* @author Vineet Mishra <vineet.m@photoninfotech.net>
* @version 1.0.0
*/

// import - npm modules
import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { Icon } from "react-native-elements";

// import - Styles
import componentstyles from "../../styles/componentStyles";

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

/**
* Represents Phone.
* @class Phone
* @extends Component
*/
class Phone extends Component {

    mapElement = (node) => {
        this.props.mapElement(node);
    }

    /**
    * @function render
    * React render method for rendering the native elements
    */

    render() {
        return (
            <View style={[componentstyles.textInputContainer, this.props.style]}>
                <Text style={componentstyles.textInputLabel}>{this.props.label}</Text>
                <View style={{flexDirection: "row"}}>
                    <TextInput
                        style={[componentstyles.textInputBox, {width: "12%"}]}
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
                        style={[componentstyles.textInputBox, {width: "88%", paddingLeft: 16}]}
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
