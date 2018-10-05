import { connect } from 'react-redux';
import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Alert, BackHandler } from 'react-native';
import { Icon } from "react-native-elements";
import { compose } from "redux";
import { Field, reduxForm, getFormValues } from "redux-form";
import validator from "validator";

import { navigateTo } from "../helpers";
import { InputText, Button, Toolbar } from "../components";
import { navigateBack } from "../helpers";

import styles from '../styles';

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
                <Text style={styles.errorText}>{touched ? error : ""}</Text>
            </View>
        );
    }

    render() {
        const { email, handleSubmit } = this.props;
        return (
            <View style={[styles.appContainer, styles.whiteBackground]}>
                <Toolbar style={styles.noBorderToolbar}>
                    <Icon
                        name="arrow-left"
                        size={24}
                        type="material-community"
                        onPress={navigateBack}
                        iconStyle={styles.leftIconContainer}
                    />
                    <View style={styles.toolbarUtils}>
                        <Text style={styles.appTitle}>Forgot Password</Text>
                    </View>
                </Toolbar>
                <View style={{ flex: 7 }}>
                    <Text style={styles.paragraphOne}>
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
