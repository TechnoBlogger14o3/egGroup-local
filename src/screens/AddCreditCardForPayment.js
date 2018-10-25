/**
* @author Vineet Mishra <vineet.m@photoninfotech.net>
* @version 1.0.0
* @summary Creating Adding Credit Card Screen.
*/

// import - npm modules
import { connect } from 'react-redux';
import React, { Component } from 'react';
import { View, Text, ScrollView, Image, BackHandler, Alert, TouchableOpacity } from 'react-native';
import { Icon } from "react-native-elements";
import { compose } from "redux";
import { Field, reduxForm, getFormValues } from "redux-form";

// import custom Classes
import { InputText, Button, Toolbar, DatePickerAndroid } from "../components";
import { navigateBack, navigateTo } from "../helpers";

// import - Styles
import styles from '../styles';

/**
* Represents Adding Credit Card Screen.
* @class AddCreditCardForPayment
* @extends Component
*/
class AddCreditCardForPayment extends Component {
      constructor(props) {
            super(props);
            this.state = {
                  errors: false
            };
      }
      componentWillReceiveProps(nextProps) {
            const that = this;
            if (nextProps.errors) {
                  that.setState({ errors: true })
            }
      }
      onChange = (key, value) => {
            this.setState({
                  [key]: value
            });
      }

      // FUnction when Continue Button is Clicked.
      continueButtonTapped = () => {
            Alert.alert(
                  "Alert!",
                  "Go Fuel Card Added Successfully",
                  [
                      {
                          text: "Ok",
                          onPress: () => {
                              navigateTo("paymentListCards");
                          }
                      }
                  ],
              );
      }

      // Handling Submit Button
      onSubmit = values => {
            alert('Your Go Fuel card added sucessfully!');
            navigateTo("loyaltyCardsList");
      }

      // created render text input component for reusable
      renderTextInput = (field) => {
            const { meta: { touched, error }, placeholder, keyboardType, onIconPress, isPassword, label, secureTextEntry, maxLength, input: { onChange, ...restInput } } = field;
            return (
                  <View>
                        <InputText
                              onChangeText={onChange}
                              keyboardType={keyboardType}
                              isPassword={isPassword}
                              label={label}
                              maxLength={maxLength}
                              onIconPress={onIconPress}
                              secureTextEntry={secureTextEntry}
                              placeholder={placeholder}

                              {...restInput} />
                        <Text style={styles.errorText}>{touched ? error : ""}</Text>
                  </View>
            );
      }

      // Hanndling Date Picker
      renderDatePicker = (field) => {
            const { meta: { touched, error }, placeholder, label, input: { onChange, ...restInput } } = field;
            return (
                  <View>
                        <DatePickerAndroid
                              label={label}
                              onChangeText={onChange}
                              // value={this.state.dateOfBirth}
                              placeholder={placeholder}
                              onChangeDate={onChange}
                              {...restInput} />
                        <Text style={styles.errorText}>{touched ? error : ""}</Text>
                  </View>
            );
      }


    /**
    * @function render
    * React render method for rendering the native elements
    */

      render() {
            const { handleSubmit, submitting, pristine } = this.props;
            return (
                  <View style={[styles.appContainer, styles.whiteBackground]}>
                        <Toolbar
                              style={styles.noBorderToolbar}
                              onClickLeftIcon={navigateBack}
                              iconName="back-arrow"
                              title="Add Card" />

                        <View style={{ marginLeft: 16, marginRight: 16, marginTop: 20, height: 350, backgroundColor: 'white' }}>
                              <View style={{ marginHorizontal: '35%', height: 100, width: 100, borderRadius: 50, backgroundColor: 'rgb(249, 249, 249)', zIndex: 1, justifyContent: 'center', alignItems: 'center' }}>
                                    <Image source={require('../assets/images/ICCamera.png')} style={{ width: 50, height: 30 }} />
                              </View>

                              <View style={{ marginLeft: 0, marginRight: 0, marginTop: -50, height: 300, backgroundColor: 'rgb(249, 249, 249)' }}>
                                    <Text style={{ marginLeft: 0, marginRight: 0, marginTop: 40, fontSize: 20, alignSelf: 'center', color: 'rgb(18, 115, 185)' }}>Scan your Card</Text>
                                    <View style={{ marginLeft: 0, marginRight: 0, height: 0.5, marginTop: 20, backgroundColor: 'gray' }} />
                                    <Field
                                          name="cardNumber"
                                          label="Card Number"
                                          placeholder="Please eneter card number"
                                          keyboardType="number-pad"
                                          maxLength={19}
                                          component={this.renderTextInput}
                                          normalize={normalizePhone}
                                    />
                                    <Field
                                          name="datePicker"
                                          label="Expiry Date"
                                          placeholder="Enter expiry date"
                                          component={this.renderDatePicker}
                                    />
                              </View>



                        </View>
                        <View style={{
                              marginLeft: 16, marginRight: 16, height: 50, backgroundColor: 'rgb(15, 113, 184)', borderRadius: 5,
                              width: '90%',
                              height: 50,
                              justifyContent: 'center',
                              alignItems: 'center',
                              position: 'absolute',
                              bottom: 10,
                        }}>
                              <TouchableOpacity onPress={() => this.continueButtonTapped()}>
                                    <Text style={{ fontSize: 20, color: 'white', fontWeight: 'bold' }}>Add Card</Text>
                              </TouchableOpacity>
                        </View>

                        {/* <View style={{ flex: 3, justifyContent: "flex-end", paddingBottom: 8 }}>
                              <Button style={{fontWeight: 'bold',fontSize:20}}
                                    title="Add Card"
                                    disabled={this.state.errors || submitting || pristine}
                                    backgroundColor="rgb(15, 113, 184)"
                                    onPress={handleSubmit(this.onSubmit)} />
                        </View> */}
                  </View>
            );
      }
}

// Validating Card Number and Format
const validate = values => {
      const errors = {};

      if (!values.cardNumber) {
            errors.cardNumber = "Required"
      } else if (values.cardNumber.length < 19) {
            errors.cardNumber = "Please enter a valid card number";
      }

      if (!values.datePicker) {
            errors.datePicker = "Required"
      }
      return errors;
}

// Validating the Mobile Number
const normalizePhone = (value, previousValue) => {
      if (!value) {
            return value
      }
      const onlyNums = value.replace(/[^\d]/g, '')
      if (!previousValue || value.length > previousValue.length) {
            if (onlyNums.length === 4) {
                  return onlyNums + ' '
            }
            if (onlyNums.length === 6) {
                  return onlyNums.slice(0, 4) + ' ' + onlyNums.slice(4) + ' '
            }
      }
      if (onlyNums.length <= 4) {
            return onlyNums
      }
      if (onlyNums.length <= 8) {
            return onlyNums.slice(0, 4) + ' ' + onlyNums.slice(4)
      }
      return onlyNums.slice(0, 4) + ' ' + onlyNums.slice(4, 8) + ' ' + onlyNums.slice(8, 12) + ' ' + onlyNums.slice(12, 16)
}


const mapStateToProps = state => ({
      formValues: getFormValues("loyaltyCardsList")(state)
});

const mapDispatchToProps = dispatch => ({});

export default compose(
      connect(mapStateToProps, mapDispatchToProps),
      reduxForm({ form: "addCreditCardForPayment", validate })
)(AddCreditCardForPayment);
