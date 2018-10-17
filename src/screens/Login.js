import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image, Alert, ScrollView, Platform } from 'react-native';
import { connect } from 'react-redux';
import { compose } from "redux";
import { Field, reduxForm } from "redux-form";
import validator from "validator";
import { InputText, Button, LinkButton, ListPicker } from "../components";
import { navigateTo, redirectTo } from "../helpers";
import logo from "../assets/images/signup/Loginlogo.png"
import screenstyles from "../styles/screenStyles";

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isPasswordShown: false,
            PickerValueHolder: "",
            pickerViewHideIOS:false,
            pickerViewHideAndroid:false,
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

    onSubmit = values => {
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
                <Text style={screenstyles.errorText}>{touched ? error : ""}</Text>
            </View>
        );
    }
    pickerDoneBtnTapped = (value) => {
        this.setState({
            language: this.state.pickerValue,
            pickerViewHideIOS:false})
    }

    handlePickerValue = (value) => {
        this.setState({pickerValue:value})
    }

    //Checking the condition For Android & iOS to Display Different Pickers as per Wireframe
    _segmentPicker = () => {
        if (Platform.OS !== 'ios') {
            alert('android picker ');
            if (this.state.pickerViewHideIOS){
                 return (
                <ListPicker />
            );
         }
        } else {
                if (this.state.pickerViewHideIOS) {
                    return (
                        <View style={{height:230,backgroundColor:'white',position:'absolute', bottom:0,left:0,right:0}}>
                        <View style={{left:0,right:0,height:40,flexDirection:'row',backgroundColor:"rgb(225, 224, 224)",justifyContent:'center',padding:10}}>
                        <View style={{flex:1}}>
                        </View>
                        <View style={{flex:3}}>
                        <Text style={{alignSelf:'center',fontSize:17}}>Select Laungage</Text>
                        </View>
                        <View style={{flex:1}}>
                            <TouchableOpacity onPress={this.pickerDoneBtnTapped}>
                                 <Text style={{alignSelf:'flex-end',color:'rgb(0, 122, 255)',fontSize:15}}>Done</Text>
                            </TouchableOpacity>
                        </View>
                        </View>
                            <ListPicker onChangePickerValue={this.handlePickerValue}/>
                        </View>
                    );
                }
        }
    }
    languageButtonTapped = () => {
        this.setState({pickerViewHideIOS:true})
    }


    render() {
        const { Email, Password, handleSubmit } = this.props;

        return (
            <View style={[screenstyles.appContainer, screenstyles.whiteBackground]}>
                <View style={{ flex: 8 }}>
                    <View style={screenstyles.loginFormCont}>
                        <View style={screenstyles.loginLogoContainer}>
                            <Image source={logo} />
                        </View>
                        <View>
                            <Field
                                style={{ marginTop: 0 }}
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
                            <View style={screenstyles.loginHelperCont}>
                                {Platform.OS !== 'ios' ? <ListPicker onChangePickerValue={this.handlePickerValue}/>
                                :
                                <TouchableOpacity onPress={this.languageButtonTapped}>
                                    <Text style={screenstyles.languagePickerTitle}>{this.state.language}</Text>
                                </TouchableOpacity>
                                }
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
                        title="Login with Facebook"
                        backgroundColor="rgb(57, 83, 152)"
                        iconName="facebook" />
                    <View style={screenstyles.loginFooterTextContainer}>
                        <Text style={[screenstyles.fontSize16, screenstyles.colorBlack, { marginRight: 7 }]}>
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
