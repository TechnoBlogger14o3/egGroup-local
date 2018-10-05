import React, { Component } from 'react';
import { View, Picker } from 'react-native';
import styles from './../../styles';

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
    }

    render() {
        return (
            <View style={styles.listPickerContainer}>
                <Picker
                    selectedValue={this.state.pickerValue}
                    style={styles.listPickerStyle}
                    onValueChange={this.onChange}>
                    <Picker.Item label="Netherlands" value="Netherlands" />
                    <Picker.Item label="UK" value="UK" />
                    <Picker.Item label="Germany" value="Germany" />
                    <Picker.Item label="Italy" value="Italy" />
                    <Picker.Item label="USA" value="USA" />
                </Picker>
            </View>
        );
    }
}

export default ListPicker;
