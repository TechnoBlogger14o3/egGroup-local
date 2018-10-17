import React, { Component } from 'react';
import { View, Picker } from 'react-native';
import componentstyles from "../../styles/componentStyles";

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
