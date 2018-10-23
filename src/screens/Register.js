import { connect } from 'react-redux';
import React, { Component } from 'react';
import { View, Text, ScrollView ,Image, BackHandler, Alert, Platform } from 'react-native';
import { compose } from "redux";
import { Field, reduxForm , getFormValues } from "redux-form";
import validator from "validator";

import { InputText, Button, LinkButton, Toolbar, Checkbox } from "../components";
import { navigateBack,navigateTo } from "../helpers";
import {registerUser} from "../actions/authActions";

import logo from "../assets/images/signup/Loginlogo.png"
import screenstyles from "../styles/screenStyles";

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
     //alert('Thank you for signing up. You will receive an email shortly with a link to confirm your email address');
     values.tncAcceptance = true;
     //delete values.confirmpassword;
     this.props.handleRegisterUser(values);
    }


    renderTextInput = (field) => {
        const { meta: { touched, error }, placeholder, keyboardType, onIconPress, isPassword, label, maxLength, secureTextEntry, input: { onChange, ...restInput } } = field;
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
                <Text style={screenstyles.errorText}>{touched ? error : ""}</Text>
            </View>
        );
    }



    render() {
        const { handleSubmit } = this.props;
        return (
            <View style={[screenstyles.appContainer, screenstyles.whiteBackground]}>
                <Toolbar
                    style={screenstyles.noBorderToolbar}
                    onClickLeftIcon={this.handleBackNavigation}
                    iconName="back-arrow"
                    title="Registration" />
                <ScrollView>
                    <View style={screenstyles.loginLogoContainer}>
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
                    <View style={screenstyles.checkboxStyle}>
                        <Checkbox
                            onPress={this.onActivateNewsletter}
                            checked={this.state.inActiveNewsletter}
                            labelComponent={
                                    <View style={screenstyles.subscribeStyle}>
                                    <Text style={screenstyles.checkboxText}>Subscribe the Newsletter</Text>
                                    {/* as per vikranth's request removed below toucahability */}
                                    {/*
                                     <LinkButton
                                        title="Newsletter"
                                        color="rgb(15, 113, 184)" /> */}
                                </View>
                            } />
                        <Checkbox
                            onPress={this.acceptTermsConditions}
                            checked={this.state.termsConditions}
                            labelComponent={
                                <View>
                                    <View style={screenstyles.checkboxAgree}>
                                        <Text style={screenstyles.checkboxText}>I agree to </Text>
                                        <LinkButton
                                            title="Terms & Conditions"
                                            color="rgb(15, 113, 184)" />
                                    </View>
                                    <View style={screenstyles.checkboxPrivacy}>
                                        <Text style={screenstyles.checkboxText}> and </Text>
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
        errors.firstName = "Please enter a valid first name"
    }

    else if (!/^[a-zA-Z ]+$/.test(values.firstName.trim())) {
        errors.name = "Please enter a valid first name"
    }

    if (!values.lastName) {
        errors.lastName = "Please enter a valid last name"
    }

    else if (!/^[a-zA-Z ]+$/.test(values.lastName.trim())) {
        errors.name = "Please enter a valid last name"
    }


    if (!values.email) {
        errors.email = "Please enter a valid email"
    } else if (!validator.isEmail(values.email.trim())) {
        errors.email = "Please enter a valid email"
    }

    if (!values.password) {
        errors.password = "Please enter a valid password"
    }

    if (!values.confirmpassword) {
        errors.confirmpassword = "Please enter a valid confirm password"
    } else if (values.confirmpassword !== values.password){
        errors.confirmpassword = "Password and confirm password don't match"
    }

    return errors;
}

const mapStateToProps = state => ({
    formValues: getFormValues("register")(state)
});

const mapDispatchToProps = dispatch => ({
  handleRegisterUser: payload => dispatch(registerUser(payload))

});


export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    reduxForm({ form: "register", validate })
    )(Register);
