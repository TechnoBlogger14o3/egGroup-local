import { connect } from 'react-redux';
import React, { Component } from 'react';
import { View, Text, ScrollView ,Image, BackHandler, Alert } from 'react-native';
import { Icon } from "react-native-elements";
import { compose } from "redux";
import { Field, reduxForm , getFormValues } from "redux-form";

import { InputText, Button, Toolbar, DatePicker } from "../components";
import { navigateBack,navigateTo } from "../helpers";

import styles from "../styles/screenStyles";

class AddLoyaltyCardManually extends Component {
    constructor(props) {
        super(props);
        this.state = {
            errors: false
        };
    }
    componentWillReceiveProps(nextProps) {
        const that = this;
        if (nextProps.errors) {
            that.setState({errors: true})
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
        const { meta: { touched, error }, placeholder, keyboardType, onIconPress, isPassword,label, secureTextEntry,maxLength, input: { onChange, ...restInput } } = field;
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
        const { handleSubmit,submitting, pristine} = this.props;
        return (
            <View style={[styles.appContainer, styles.whiteBackground]}>
                    <Toolbar
                        style={styles.noBorderToolbar}
                        onClickLeftIcon={navigateBack}
                        iconName="back-arrow"
                        title="Add Loyalty Card" />
                    <Field
                        name="cardNumber"
                        label="Enter Go Fuel Card number"
                        placeholder="1234 5678 9012 3455"
                        keyboardType="number-pad"
                        maxLength={19}
                        component={this.renderTextInput}
                        normalize={normalizePhone}
                    />
                    <Field
                        name="datePicker"
                        label="Card Expiry"
                        placeholder="20/05/2022"
                        component={this.renderDatePicker}
                    />
                   <View style={{ flex: 3, justifyContent: "flex-end", paddingBottom: 8 }}>
                    <Button
                        title="Done"
                        disabled={this.state.errors  || submitting || pristine}
                        backgroundColor="rgb(15, 113, 184)"
                        onPress={handleSubmit(this.onSubmit)} />
            </View>
            </View>
        );
    }
}

const validate = values => {
    const errors = {};

    if (!values.cardNumber) {
        errors.cardNumber = "Rerquired"
    }  else if (values.cardNumber.length < 19) {
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
    return onlyNums.slice(0, 4) + ' ' + onlyNums.slice(4, 8) + ' ' + onlyNums.slice(8, 12)+' '+ onlyNums.slice(12, 16)
  }


const mapStateToProps = state => ({
    formValues: getFormValues("loyaltyCardsList")(state)
});

const mapDispatchToProps = dispatch => ({});


export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    reduxForm({ form: "loyaltyCardsList", validate })
    )(AddLoyaltyCardManually);
