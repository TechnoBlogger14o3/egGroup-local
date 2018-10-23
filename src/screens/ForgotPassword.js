/**
* @author Vineet Mishra <vineet.m@photoninfotech.net>
* @version 1.0.0
* @summary Implementing the Forget Password Screen
*/

// import - npm modules

import { connect } from 'react-redux';
import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Alert, BackHandler, Platform } from 'react-native';
import { Icon } from "react-native-elements";
import { compose } from "redux";
import { Field, reduxForm, getFormValues } from "redux-form";
import validator from "validator";

// import - custom Classes
import { navigateTo } from "../helpers";
import { InputText, Button, Toolbar } from "../components";
import { navigateBack } from "../helpers";

// import - Styles
import screenstyles from "../styles/screenStyles";

/**
* Represents Forget Password Screen.
* @class ForgetPassword
* @extends Component
*/

class ForgotPassword extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: ""
        };
    }

    componentDidMount() {
        BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);
    }

    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.handleBackPress);
    }

    handleBackPress = () => {
        navigateBack();
        return true;
    }

    onChange = (key, value) => {
        this.setState({
            [key]: value
        });
    }

    // Clicking Submit Button, a mail will be sent.
    onSubmit = values => {
        Alert.alert(
            '',
            'Password reset link has been sent to your mail id successfully',
            [
                { text: 'OK', onPress: () => navigateTo("login") },

            ],
            { cancelable: false }
        )
    }

    renderTextInput = (field) => {
        const { meta: { touched, error }, placeholder, keyboardType, label, input: { onChange, ...restInput } } = field;
        return (
            <View>
                <InputText
                    onChangeText={onChange}
                    keyboardType={keyboardType}
                    label={label}
                    placeholder={placeholder}
                    {...restInput} />
                <Text style={screenstyles.errorText}>{touched ? error : ""}</Text>
            </View>
        );
    }

    /**
    * @function render
    * React render method for rendering the native elements
    */
    render() {
        const { email, handleSubmit } = this.props;
        return (
            <View style={[screenstyles.appContainer, screenstyles.whiteBackground]}>
                <Toolbar
                    style={screenstyles.noBorderToolbar}
                    onClickLeftIcon={navigateBack}
                    iconName="back-arrow"
                    title="Forgot Password" />
                <View style={{ flex: 7 }}>
                    <Text style={screenstyles.paragraphOne}>
                        Enter your email address below to receive your password reset instructions.
                    </Text>
                    <Field
                        name="email"
                        label="Email"
                        placeholder="Enter Email Address"
                        component={this.renderTextInput}
                    />
                </View>
                <View style={{ flex: 3, justifyContent: "flex-end", paddingBottom: 8 }}>
                    <Button
                        title="Request Password"
                        backgroundColor="rgb(15, 113, 184)"
                        onPress={handleSubmit(this.onSubmit)} />
                </View>
            </View>
        );
    }
}

// Validating the Input Field
const validate = values => {
    const errors = {};
    if (!values.email) {
        errors.email = "Required"
    }
    else if (!validator.isEmail(values.email)) {
        errors.email = "Enter valid email address";
    }
    return errors;
}

const mapStateToProps = state => ({
  formValues: getFormValues("forgotPassword")(state)
});

const mapDispatchToProps = dispatch => ({});

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    reduxForm({
        form: "forgotPassword",
        validate
    })
)(ForgotPassword);
