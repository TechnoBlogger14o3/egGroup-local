/**
* @author Vineet Mishra <vineet.m@photoninfotech.net>
* @version 1.0.0
*/

// import - npm modules
import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, DatePickerAndroid, TouchableWithoutFeedback } from 'react-native';
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
    openDatePicker: () => {}
}
/**
* Represents DatePicker for Android
* @class DatePicker
* @extends Component
*/
class DatePicker extends Component {

    mapElement = (node) => {
        this.datePicker = node;
    }

    openDatePicker = async () => {
        try {
            const {action, year, month, day} = await DatePickerAndroid.open({
                date: new Date(this.props.value)
            });
            if (action !== DatePickerAndroid.dismissedAction) {
                this.props.onChangeDate(`${day}/${month+1}/${year}`);
                this.datePicker.blur();
            } else if(action === DatePickerAndroid.dismissedAction) {
                this.datePicker.blur();
            }
        } catch ({code, message}) {
              console.warn('Cannot open date picker', message);
        }
    }

    /**
    * @function render
    * React render method for rendering the native elements
    */
   
    render() {
        return (
            <View style={[componentstyles.textInputContainer, this.props.style]}>
                <TouchableWithoutFeedback onPress={this.openDatePicker}>
                    <View>
                        <Text style={componentstyles.textInputLabel}>{this.props.label}</Text>
                        <TextInput
                            underlineColorAndroid="rgba(0,0,0,0)"
                            placeholderTextColor="rgba(51, 51, 51, 0.6)"
                            selectionColor= "rgb(51, 51, 51)"
                            style={componentstyles.textInputBox}
                            ref= {this.mapElement}
                            returnKeyType={this.props.returnKeyType}
                            placeholder={this.props.placeholder}
                            secureTextEntry={this.props.secureTextEntry}
                            keyboardType= {this.props.keyboardType}
                            maxLength= {this.props.maxLength}
                            value= {this.props.value}
                            onChangeText= {this.props.onChangeText} />
                        <View style={componentstyles.dateOverlay} />
                    </View>
                </TouchableWithoutFeedback>
            </View>
        );
    }
}

DatePicker.defaultProps = defaultProps;

export default DatePicker;
