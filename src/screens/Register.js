import { connect } from 'react-redux';
import React, { Component } from 'react';
import { View, Text, ScrollView ,Image, BackHandler, Alert } from 'react-native';
import { Icon } from "react-native-elements";
import { compose } from "redux";
import { Field, reduxForm , getFormValues } from "redux-form";
import validator from "validator";

import { InputText, Button, LinkButton, Toolbar, DatePicker, Checkbox, Phone } from "../components";
import { navigateBack } from "../helpers";

import logo from "../assets/images/signup/Loginlogo.png"
import styles from '../styles';

class Register extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isPasswordShown: false,
            isCmfPasswordShown: false,
            inActiveNewsletter: true,
            termsConditions: true
        };
    }

    componentDidMount() {
       BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);
    }

    componentWillUnmount() {
       BackHandler.removeEventListener('hardwareBackPress', this.handleBackPress);
    }

    handleBackPress = () => {
      this.handleBackNavigation();
      return true;
    }

    handleBackNavigation = () => {
        if (this.props.formValues && Object.keys(this.props.formValues).length > 0) {
          Alert.alert(
              'Alert',
              '“Please confirm, if you want to navigate away from this screen. Entered data will be lost.”',
              [
                {text: 'Close', onPress: () => console.log('Cancel Pressed!')},
                {text: 'Confirm',  onPress: () => navigateBack() },
              ],
              { cancelable: false }
          )
        } else {
            navigateBack();
        }
    }

    onIconPress = () => {
        this.setState({
            isPasswordShown: !this.state.isPasswordShown
        });
    }

    onIconPress2 = () => {
        this.setState({
            isCmfPasswordShown: !this.state.isCmfPasswordShown
        });
    }

    onChange = (key, value) => {
        this.setState({
            [key]: value
        });
    }

    onActivateNewsletter = () => {
        this.setState({
            inActiveNewsletter: !this.state.inActiveNewsletter
        });
    }

    acceptTermsConditions = () => {
        this.setState({
            termsConditions: !this.state.termsConditions
        });
    }

    onSubmit = values => {
     alert('Successful Registered');
    }


    renderTextInput = (field) => {
        const { meta: { touched, error }, placeholder, keyboardType, onIconPress, isPassword, label, secureTextEntry, input: { onChange, ...restInput } } = field;
        return (
            <View>
                <InputText
                    onChangeText={onChange}
                    keyboardType={keyboardType}
                    isPassword={isPassword}
                    label={label}
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
                    value={this.state.dateOfBirth}
                    placeholder={placeholder}
                    onChangeDate={onChange}
                    {...restInput} />
                <Text style={styles.errorText}>{touched ? error : ""}</Text>
            </View>
        );
    }

    renderPhone = (field) => {
        const { meta: { touched, error }, placeholder, maxLength, keyboardType, label, input: { onChange, ...restInput } } = field;
        return (
            <View>
                <Phone
                    label={label}
                    onChangeText={onChange}
                    keyboardType={keyboardType}
                    placeholder={placeholder}
                    maxLength={maxLength}
                    {...restInput} />
                <Text style={styles.errorText}>{touched ? error : ""}</Text>
            </View>
        );
    }

    render() {
        const { handleSubmit } = this.props;
        return (
            <View style={[styles.appContainer, styles.whiteBackground]}>
                <Toolbar style={styles.noBorderToolbar}>
                    <Icon
                        name="arrow-left"
                        size={24}
                        type="material-community"
                        onPress={this.handleBackNavigation}
                        iconStyle={styles.leftIconContainer}
                    />
                    <View style={styles.toolbarUtils}>
                        <Text style={styles.appTitle}>Registration</Text>
                    </View>
                </Toolbar>
                <ScrollView>
                    <View style={styles.loginLogoContainer}>
                       <Image source={logo}/>
                    </View>

                    <Field
                        name="firstName"
                        label="First name *"
                        placeholder="Enter first name"
                        maxLength={30}
                        component={this.renderTextInput}
                    />
                    <Field
                        name="lastName"
                        label="Last name *"
                        placeholder="Enter last name"
                        component={this.renderTextInput}
                        maxLength={30}
                    />
                    <Field
                        name="phone"
                        label="Phone *"
                        placeholder="Enter phone number"
                        keyboardType="number-pad"
                        component={this.renderPhone}
                        maxLength={10}
                    />
                    <Field
                        name="datePicker"
                        label="Date of birth *"
                        placeholder="Enter date of birth"
                        component={this.renderDatePicker}
                    />
                    <Field
                        name="email"
                        label="Email *"
                        placeholder="Enter email address"
                        component={this.renderTextInput}
                        keyboardType="email-address"
                    />
                    <Field
                        name="password"
                        label="Password *"
                        onIconPress={this.onIconPress}
                        isPassword={true}
                        secureTextEntry={!this.state.isPasswordShown}
                        placeholder="Enter password"
                        component={this.renderTextInput} />
                    <Field
                        name="confirmpassword"
                        label="Confirm Password *"
                        onIconPress={this.onIconPress2}
                        isPassword={true}
                        secureTextEntry={!this.state.isCmfPasswordShown}
                        placeholder="Re-enter password"
                        component={this.renderTextInput}
                    />
                    <View style={styles.checkboxStyle}>
                        <Checkbox
                            onPress={this.onActivateNewsletter}
                            checked={this.state.inActiveNewsletter}
                            labelComponent={
                                    <View style={styles.subscribeStyle}>
                                    <Text style={styles.checkboxText}>Subscribe the </Text>
                                    <LinkButton
                                        title="Newsletter"
                                        color="rgb(15, 113, 184)" />
                                </View>
                            } />
                        <Checkbox
                            onPress={this.acceptTermsConditions}
                            checked={this.state.termsConditions}
                            labelComponent={
                                <View>
                                    <View style={styles.checkboxAgree}>
                                        <Text style={styles.checkboxText}>I agree to </Text>
                                        <LinkButton
                                            title="Terms & Conditions"
                                            color="rgb(15, 113, 184)" />
                                    </View>
                                    <View style={styles.checkboxPrivacy}>
                                        <Text style={styles.checkboxText}> and </Text>
                                        <LinkButton
                                            title="Privacy Policy"
                                            color="rgb(15, 113, 184)" />
                                    </View>
                                </View>
                            } />
                    </View>
                    <Button
                        title="Register"
                        backgroundColor="rgb(15, 113, 184)"
                        onPress={handleSubmit(this.onSubmit)} />
                </ScrollView>
            </View>
        );
    }
}



const validate = values => {
    const errors = {};

    if (!values.firstName) {
        errors.firstName = "Rerquired"
    } else if (values.firstName.length < 8) {
        errors.firstName = "Length should me greater than 8";
    } else if (values.firstName.length > 30) {
        errors.firstName = "Length should me less than 30";
    } else if (!/^[a-zA-Z ]+$/.test(values.firstName.trim())) {
        errors.name = "Please enter a valid name"
    }


    if (!values.lastName) {
        errors.lastName = "Rerquired"
    } else if (values.lastName.length < 8) {
        errors.lastName = "Length should me greater than 8";
    } else if (values.lastName.length > 30) {
        errors.lastName = "Length should me less than 30";
    } else if (!/^[a-zA-Z ]+$/.test(values.lastName.trim())) {
        errors.name = "Please enter a valid name"
    }

    if (!values.datePicker) {
        errors.datePicker = "Required"
    }

    if (!values.phone) {
        errors.phone = "Required"
    } else if (!validator.isNumeric(values.phone.trim())) {
        errors.phone = "Please enter a valid phone"
    } else if (values.phone.length > 10) {
        errors.lastName = "Mobile number should be 10 digits";
    }

    if (!values.email) {
        errors.email = "Required"
    } else if (!validator.isEmail(values.email.trim())) {
        errors.email = "Please enter a valid email"
    }

    if (!values.password) {
        errors.password = "Required"
    }

    if (!values.confirmpassword) {
        errors.confirmpassword = "Required"
    }else if(values.confirmpassword !== values.password){
        errors.confirmpassword = "Password Mismatched!"
    }

    return errors;
}

const mapStateToProps = state => ({
    formValues: getFormValues("register")(state)
});

const mapDispatchToProps = dispatch => ({});


export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    reduxForm({ form: "register", validate })
    )(Register);
