/**
* @author Vineet Mishra <vineet.m@photoninfotech.net>
* @version 1.0.0
*/

// import - npm module
import React, { Component } from 'react';
import { View, Text, TextInput, DatePickerIOS, TouchableOpacity, Modal } from 'react-native';
import { Icon } from "react-native-elements";

// import - Styles
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
/**
* Represents DatePicker for iOS
* @class DatePicker
* @extends Component
*/
class DatePicker extends Component {

    state = {
      chosenDate: new Date(),
      isDatePickerOpen: false
    }

    mapElement = (node) => {
        this.datePicker = node;
    }

    renderDatePicker = () => {
        return (
          <Modal
              animationType="fade"
              transparent={true}
              visible={this.state.isDatePickerOpen}
              onRequestClose={() => {
                console.log('Modal has been closed.');
              }}>
              <View style={{height:230,backgroundColor:'white',position:'absolute', bottom:0,left:0,right:0,zIndex:1}}>
                  <View style={{left:0,right:0,height:40,flexDirection:'row',backgroundColor:"rgb(225, 224, 224)",justifyContent:'center',padding:10}}>
                      <View style={{flex:1}}></View>
                      <View style={{flex:3}}>
                          <Text style={{alignSelf:'center',fontSize:17}}>Select DOB</Text>
                      </View>
                      <View style={{flex:1}}>
                          <TouchableOpacity onPress={this.datePickerDoneBtnTapped}>
                               <Text style={{alignSelf:'flex-end',color:'rgb(0, 122, 255)',fontSize:15}}>Done</Text>
                          </TouchableOpacity>
                      </View>
                  </View>
                   <DatePickerIOS
                      date={this.state.chosenDate}
                      mode="date"
                      onDateChange={this.setDateValue} />
              </View>
          </Modal>
        )
    }

    setDateValue = (value) => {
        this.setState({
          chosenDate: value
        })
    }

    datePickerDoneBtnTapped = () => {
      const date = new Date(this.state.chosenDate);
      const month = date.getMonth();
      const day = date.getDate();
      const year = date.getFullYear();
      this.props.onChangeDate(`${day}/${month+1}/${year}`);
      this.setState({
        isDatePickerOpen: false
      })
    }

    openDatePicker = () => {
        this.setState({
          isDatePickerOpen: true
        })
    }

    /**
    * @function render
    * React render method for rendering the native elements
    */

    render() {
        return (
            <View style={[styles.textInputContainer, this.props.style]}>
                <TouchableOpacity onPress={this.openDatePicker}>
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
                </TouchableOpacity>
                {this.state.isDatePickerOpen && this.renderDatePicker()}
            </View>
        );
    }
}

DatePicker.defaultProps = defaultProps;

export default DatePicker;
