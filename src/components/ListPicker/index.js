/**
* @author Vineet Mishra <vineet.m@photoninfotech.net>
* @version 1.0.0
*/

// import - npm modules
import React, { Component } from 'react';
import { View, Picker } from 'react-native';

// import - Styles
import componentstyles from "../../styles/componentStyles";


/**
* Represents ListPicker.
* @class ListPicker
* @extends Component
*/
class ListPicker extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pickerValue: 'Netherlands'
        };
    }

    onChange = (value) => {
        this.setState({
            pickerValue: value
        });
        this.props.onChangePickerValue(value);
    }

    /**
    * @function render
    * React render method for rendering the native elements
    */

    render() {
        return (
            <View style={componentstyles.listPickerContainer}>
                <Picker
                    selectedValue={this.state.pickerValue}
                    style={componentstyles.listPickerStyle}
                    onValueChange={this.onChange}>
                    <Picker.Item label="Dutch" value="Dutch" />
                    <Picker.Item label="English" value="English" />
                    <Picker.Item label="French" value="French" />
                    <Picker.Item label="German" value="German" />
                    <Picker.Item label="Italian" value="Italian" />
                </Picker>
            </View>
        );
    }
}

export default ListPicker;
