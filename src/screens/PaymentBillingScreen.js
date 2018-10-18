import { connect } from 'react-redux';
import React, { Component } from 'react';
import { View, Text, ScrollView, Image, BackHandler, Alert, TouchableOpacity } from 'react-native';
import { Icon } from "react-native-elements";
import { compose } from "redux";
import { Field, reduxForm, getFormValues } from "redux-form";
import { InputText, Button, Toolbar, DatePicker } from "../components";
import { navigateBack, navigateTo } from "../helpers";

import styles from '../styles';

class PaymentBillingScreen extends Component {
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
      onSubmit = values => {
            alert('Your Go Fuel card added sucessfully!');
            navigateTo("loyaltyCardsList");
      }

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
      continueButtonTapped = () =>{
            Alert.alert(
                  "Alert!",
                  "Debit/Credit Card Added Successfully",
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
      renderDatePicker = (field) => {
            const { meta: { touched, error }, placeholder, label, input: { onChange, ...restInput } } = field;
            return (
                  <View>
                        <DatePicker
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
      render() {
            const { handleSubmit, submitting, pristine } = this.props;
            return (
                  <View style={[styles.appContainer, styles.whiteBackground]}>
                        <Toolbar
                              style={styles.noBorderToolbar}
                              onClickLeftIcon={navigateBack}
                              iconName="back-arrow"
                              title="Add Card" />
                             <ScrollView style={{ marginLeft: 16, marginRight: 16,marginTop: 10}}>
                              <View style={{  height: 550, backgroundColor: 'white' }}>
                                    <View style={{ marginHorizontal: '35%', height: 100, width: 100, borderRadius: 50, backgroundColor: 'rgb(249, 249, 249)', zIndex: 1, justifyContent: 'center', alignItems: 'center' }}>
                                          <Image source={require('../assets/images/ICCamera.png')} style={{ width: 50, height: 30 }} />
                                    </View>

                                    <View style={{marginTop: -50, height: 500, backgroundColor: 'rgb(249, 249, 249)' }}>
                                          <Text style={{ marginLeft: 0, marginRight: 0, marginTop: 40, fontSize: 20, alignSelf: 'center', color: 'rgb(18, 115, 185)' }}>Scan your Card</Text>
                                          <View style={{ marginLeft: 0, marginRight: 0, height: 0.5, marginTop: 20, backgroundColor: 'gray' }} />
                                          <Field
                                                name="cardNumber"
                                                label="Name"
                                                placeholder="Enter name"
                                                keyboardType="number-pad"
                                                maxLength={19}
                                                component={this.renderTextInput}
                                                normalize={normalizePhone}
                                          />
                                          <Field
                                                name="cardNumber"
                                                label="Card Number"
                                                placeholder="Enter card number"
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
                                           <Field
                                                name="cardNumber"
                                                label="CVV Number"
                                                placeholder="Enter cvv number"
                                                keyboardType="number-pad"
                                                maxLength={19}
                                                component={this.renderTextInput}
                                                normalize={normalizePhone}
                                          />
                                    </View>
                              </View>
                               <View style={{height:80,}}>
                                <View  style={{flex:1}}/>
                                <View  style={{flex:1,justifyContent:'center'}}>
                                <Text style={{fontSize:17,fontWeight:'bold',color:'rgb(142, 142, 147)'}}>Billing Address</Text>
                                </View>
                               </View>
                               
                               <View style={{height:450,backgroundColor: 'rgb(249, 249, 249)'}}>
                               <Field
                                                name="cardNumber"
                                                label="Street name"
                                                placeholder="Enter street name"
                                                keyboardType="number-pad"
                                                maxLength={19}
                                                component={this.renderTextInput}
                                                normalize={normalizePhone}
                                          />
                                          <Field
                                                name="cardNumber"
                                                label="Postal Code"
                                                placeholder="Enter postal code"
                                                keyboardType="number-pad"
                                                maxLength={19}
                                                component={this.renderTextInput}
                                                normalize={normalizePhone}
                                          />
                                          <Field
                                                name="cardNumber"
                                                label="City"
                                                placeholder="Enter city name"
                                                keyboardType="number-pad"
                                                maxLength={19}
                                                component={this.renderTextInput}
                                                normalize={normalizePhone}
                                          />
                                          <Field
                                                name="datePicker"
                                                label="State/Province"
                                                placeholder="Enter State/Province"
                                                component={this.renderDatePicker}
                                          />
                                           
                               </View>
                              </ScrollView>
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
                  </View>
                        );
                  }
            }
            
const validate = values => {
      const errors = {};
                  
      if (!values.cardNumber) {
                              errors.cardNumber = "Rerquired"
                        } else if (values.cardNumber.length < 19) {
                              errors.cardNumber = "Please enter a valid card number";
                        }
                  
      if (!values.datePicker) {
                              errors.datePicker = "Required"
                        }
                        return errors;
                  }
                  
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
                              formValues: getFormValues("paymentBillingScreen")(state)
                  });
                  
const mapDispatchToProps = dispatch => ({});
                        
                        
                        export default compose(
                              connect(mapStateToProps, mapDispatchToProps),
      reduxForm({form: "paymentBillingScreen", validate })
                  )(PaymentBillingScreen);
