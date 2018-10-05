import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image, Alert, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { compose } from "redux";
import { Field, reduxForm } from "redux-form";
import validator from "validator";


import { InputText, Button, LinkButton, ListPicker } from "../components";
import { navigateTo, redirectTo } from "../helpers";

import logo from "../assets/images/signup/Loginlogo.png"
import styles from '../styles';

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isPasswordShown: false,
            PickerValueHolder: ""
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

    onSubmit = values => {
        alert('Login Successful');
        redirectTo("app")
    }

    renderTextInput = (field) => {
        const { meta: { touched, error }, placeholder, isPassword, onIconPress, keyboardType, label, secureTextEntry, input: { onChange, ...restInput } } = field;
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



    render() {
        const { Email, Password, handleSubmit } = this.props;

        return (
            <View style={[styles.appContainer, styles.whiteBackground]}>
                <View style={{ flex: 8 }}>
                    <View style={styles.loginFormCont}>
                        <View style={styles.loginLogoContainer}>
                            <Image source={logo} />
                        </View>
                        <View>
                            <Field
                                style={{ marginTop: 0 }}
                                name="email"
                                label="Email"
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
                                <Image source={require('./../assets/images/select_country.png')} style={styles.countryImage} />
                                <ListPicker />
                                <LinkButton
                                    onPress={() => navigateTo("forgotPassword")}
                                    title="Forgot Password?"
                                    color="rgb(15, 113, 184)" />
                            </View>
                        </View>
                    </View>
                </View>
                <View style={{justifyContent: "flex-end" }}>
                    <Button
                        title="Login"
                        backgroundColor="rgb(15, 113, 184)"
                        onPress={handleSubmit(this.onSubmit)} />

                    <Button
                        title="Login with Google"
                        backgroundColor="rgb(218, 71, 51)"
                        iconName="google-plus" />
                    <View style={styles.loginFooterTextContainer}>
                        <Text style={[styles.fontSize16, styles.colorBlack, { marginRight: 7 }]}>
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

const validate = values => {
    const errors = {};
    if (!values.email) {
        errors.email = "Required"
    } else if (!validator.isEmail(values.email)) {
        errors.email = "Please enter valid email address";
    }
    if (!values.password) {
        errors.password = "Required"
    }
    return errors;
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    reduxForm({
        form: "Login",
        validate
    })
)(Login);
