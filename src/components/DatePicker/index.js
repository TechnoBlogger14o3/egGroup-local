import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, DatePickerAndroid, TouchableWithoutFeedback } from 'react-native';
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
    openDatePicker: () => {}
}

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
                this.props.onChangeDate(`${month+1}/${day}/${year}`);
                this.datePicker.blur();
            } else if(action === DatePickerAndroid.dismissedAction) {
                this.datePicker.blur();
            }
        } catch ({code, message}) {
              console.warn('Cannot open date picker', message);
        }
    }

    render() {
        return (
            <View style={[styles.textInputContainer, this.props.style]}>
                <TouchableWithoutFeedback onPress={this.openDatePicker}>
                    <View>
                        <Text style={styles.textInputLabel}>{this.props.label}</Text>
                        <TextInput
                            underlineColorAndroid="rgba(0,0,0,0)"
                            placeholderTextColor="rgba(51, 51, 51, 0.6)"
                            selectionColor= "rgb(51, 51, 51)"
                            style={styles.textInputBox}
                            ref= {this.mapElement}
                            returnKeyType={this.props.returnKeyType}
                            placeholder={this.props.placeholder}
                            secureTextEntry={this.props.secureTextEntry}
                            keyboardType= {this.props.keyboardType}
                            maxLength= {this.props.maxLength}
                            value= {this.props.value}
                            onChangeText= {this.props.onChangeText} />
                        <View style={styles.dateOverlay} />
                    </View>
                </TouchableWithoutFeedback>
            </View>
        );
    }
}

DatePicker.defaultProps = defaultProps;

export default DatePicker;
