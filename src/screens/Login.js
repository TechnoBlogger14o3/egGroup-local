import React, {Component} from "react";
import {View, Text, TouchableOpacity, Image, Platform} from "react-native";
import {connect} from "react-redux";
import {compose} from "redux";
import {Field, reduxForm} from "redux-form";
import validator from "validator";


import {InputText, Button, LinkButton, ListPicker} from "../components";
import {navigateTo, redirectTo} from "../helpers";

import logo from "../assets/images/signup/Loginlogo.png";
import styles from "../styles";

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isPasswordShown: false,
            PickerValueHolder: "",
            pickerViewHideIOS: false,
            pickerViewHideAndroid: false,
            language: "English",
            pickerValue: ""
        };
    }

     onIconPress = () => {
         this.setState({
             isPasswordShown: !this.state.isPasswordShown
         });
     }

    onChange = (key, value) => {
        this.setState({
            [key]: value
        });
    }

    onSubmit = () => {
        redirectTo("app");
    }

    renderTextInput = (field) => {
        const {meta: {touched, error}, placeholder, isPassword, onIconPress, keyboardType, label, secureTextEntry, input: {onChange, ...restInput}} = field;
        return (
            <View>
                <InputText
                    onChangeText={onChange}
                    keyboardType={keyboardType}
                    label={label}
                    onIconPress={onIconPress}
                    secureTextEntry={secureTextEntry}
                    isPassword={isPassword}
                    placeholder={placeholder}
                    {...restInput} />
                <Text style={styles.errorText}>{touched ? error : ""}</Text>
            </View>
        );
    }

    pickerDoneBtnTapped = () => {
        this.setState({
            language: this.state.pickerValue,
            pickerViewHideIOS: false});
    }

    handlePickerValue = (value) => {
        this.setState({pickerValue: value});
    }

    // Checking the condition For Android & iOS to Display Different Pickers as per Wireframe
    _segmentPicker = () => {
        if (Platform.OS !== "ios") {
            // alert("android picker ");
            if (this.state.pickerViewHideIOS) {
                return (
                    <ListPicker />
                );

            }
        } else if (this.state.pickerViewHideIOS) {
            return (
                <View style={styles.iosPickerHeaderView}>
                    <View style={styles.iosPickerSubView}>
                        {/* <View style={{flex: 1}} /> */}
                        <View style={styles.iosPickerLanguageView}>
                            <Text style={styles.iosPickerTextView}>Select Language</Text>
                        </View>
                        <View style={styles.iosPickerButtonView}>
                            <TouchableOpacity onPress={this.pickerDoneBtnTapped}>
                                <Text style={styles.iosPickerButtonTextView}>Done</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <ListPicker onChangePickerValue={this.handlePickerValue} />
                </View>
            );
        }
    }

    languageButtonTapped = () => {
        this.setState({pickerViewHideIOS: true});
    }


    render() {
        const {handleSubmit} = this.props;

        return (
            <View style={[styles.appContainer, styles.whiteBackground]}>
                <View style={styles.loginMainView}>
                    <View style={styles.loginFormCont}>
                        <View style={styles.loginLogoContainer}>
                            <Image source={logo} />
                        </View>
                        <View>
                            <Field
                                style={styles.emailFieldView}
                                name="email"
                                label="Email"
                                keyboardType="email-address"
                                placeholder="Enter Email Address"
                                component={this.renderTextInput}
                            />
                            <Field
                                name="password"
                                label="Password"
                                component={this.renderTextInput}
                                placeholder="Enter Password"
                                onIconPress={this.onIconPress}
                                isPassword={true}
                                secureTextEntry={!this.state.isPasswordShown}
                            />
                            <View style={styles.loginHelperCont}>
                                {Platform.OS !== "ios" ? <ListPicker onChangePickerValue={this.handlePickerValue} />
                                    : (
                                        <TouchableOpacity onPress={this.languageButtonTapped}>
                                            <Text style={styles.languagePickerTitle}>{this.state.language}</Text>
                                        </TouchableOpacity>
                                    )
                                }
                                <LinkButton
                                    onPress={() => navigateTo("forgotPassword")}
                                    title="Forgot Password?"
                                    color="rgb(15, 113, 184)" />
                            </View>
                        </View>
                    </View>
                </View>
                <View style={styles.loginButtonView}>
                    <Button
                        title="Login"
                        backgroundColor="rgb(15, 113, 184)"
                        onPress={handleSubmit(this.onSubmit)} />
                    <Button
                        title="Login with Facebook"
                        backgroundColor="rgb(57, 83, 152)"
                        iconName="facebook" />
                    <View style={styles.loginFooterTextContainer}>
                        <Text style={[styles.fontSize16, styles.colorBlack, styles.marginRight ]}>
                            Do not have an account yet?
                        </Text>
                        <LinkButton
                            onPress={() => navigateTo("register")}
                            title="Create One"
                            color="rgb(141, 198, 63)" />
                    </View>
                </View>
            </View>
        );
    }
}

const validate = (values) => {
    const errors = {};
    if (!values.email) {
        errors.email = "Please enter valid email address";
    } else if (!validator.isEmail(values.email)) {
        errors.email = "Please enter valid email address";
    }
    if (!values.password) {
        errors.password = "Please enter valid password";
    }
    return errors;
};

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    reduxForm({
        form: "Login",
        validate
    })
)(Login);