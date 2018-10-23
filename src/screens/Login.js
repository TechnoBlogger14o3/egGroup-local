/**
* @author Vineet Mishra <vineet.m@photoninfotech.net>
* @version 1.0.0
* @summary The Login Screen
*/

// import - npm modules

import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image, Alert, ScrollView, Platform } from 'react-native';
import { connect } from 'react-redux';
import { compose } from "redux";
import { Field, reduxForm } from "redux-form";
import validator from "validator";
import { LoginButton, AccessToken, GraphRequest, GraphRequestManager, LoginManager  } from 'react-native-fbsdk';
import Icon from 'react-native-vector-icons/FontAwesome';

// import Custom Classes
import { InputText, Button, LinkButton, ListPicker } from "../components";
import { navigateTo, redirectTo } from "../helpers";
import logo from "../assets/images/signup/Loginlogo.png";
import {loginUser} from "../actions/authActions";

// import Styles
import screenstyles from "../styles/screenStyles";


/**
* Represents LoginScreen.
* @class Login
* @extends Component
*/
class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isPasswordShown: false,
            PickerValueHolder: "",
            pickerViewHideIOS:false,
            pickerViewHideAndroid:false,
            language: "English",
            pickerValue: "",
            name : '',
            pic : ''
        };
    }

      infoRequestNew = (accessToken) => {
          const infoRequest = new GraphRequest(
            '/me',
            {
              accessToken: accessToken,
              parameters: {
                fields: {
                  string: 'email,name,first_name,middle_name,last_name,picture,id'
                }
              }
            },
            this.responseInfoCallback
          );
          // Start the graph request.
        //  new GraphRequestManager().addRequest(infoRequest).start();

        }

      responseInfoCallback = (error, result) => {
        if (error) {
          console.log(error)
          alert('Error fetching data: ' + error.toString());
        } else {
          console.log(result)
          this.setState({name: result.name, pic:result.picture.data.url});
        }
    }

    // Toggling the Password Hide/Show Button
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
        this.props.handleLoginUser(values);
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

    // Handling the Facebook Login
    handleFacebookLogin(){
        LoginManager.logInWithReadPermissions(['public_profile', 'email',]).then(
            function (result) {
              if (result.isCancelled) {
                console.log('Login cancelled')
              } else {
                console.log('Login success with permissions: ' + result.grantedPermissions.toString());
                AccessToken.getCurrentAccessToken().then(
                    (data) => {
                        const accessToken = data.accessToken
                        this.infoRequestNew(accessToken);
                    }
                    )
              }
            },
            function (error) {
              console.log('Login fail with error: ' + error)
            }
          )
    }

    //Checking the condition For Android & iOS to Display Different Pickers as per Wireframe
    _segmentPicker = () => {
        if (Platform.OS === 'ios' && this.state.pickerViewHideIOS) {
            return (
              <View style={screenstyles.iosPickerHeaderView}>
                  <View style={screenstyles.iosPickerSubView}>
                      <View style={screenstyles.iosPickerLanguageView}>
                          <Text style={screenstyles.iosPickerTextView}>Select Language</Text>
                      </View>
                      <View style={screenstyles.iosPickerButtonView}>
                          <TouchableOpacity onPress={this.pickerDoneBtnTapped}>
                              <Text style={screenstyles.iosPickerButtonTextView}>Done</Text>
                          </TouchableOpacity>
                      </View>
                  </View>
                  <ListPicker onChangePickerValue={this.handlePickerValue} />
              </View>
            );
        }
    }

    languageButtonTapped = () => {
        this.setState({pickerViewHideIOS:true})
    }


    /**
    * @function render
    * React render method for rendering the native elements
    */
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
                        iconName="facebook"
                        onPress={this.handleFacebookLogin} />

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
                <TouchableOpacity onPress={()=>{navigateTo("storeLocator")}}>
                    <View style={{flexDirection:'row',justifyContent:'center',alignContent:'center',marginBottom:10}}>
                    <Icon name="map-marker" size={28} type="material-community" style={{paddingRight:10}}/>
                    <Text style={{marginTop:3,color:'black'}}>Search Station near by you</Text>
                    </View>
                </TouchableOpacity>
                {this._segmentPicker()}
            </View>
        );
    }
}

// Validation for Login Input Fields
const validate = values => {
    const errors = {};
    if (!values.email) {
        errors.email = "Email is required";
    } else if (!validator.isEmail(values.email)) {
        errors.email = "Please enter valid email address";
    }
    if (!values.password) {
        errors.password = "Password is required";
    }
    return errors;
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
    handleLoginUser: payload => dispatch(loginUser(payload))
});

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    reduxForm({
        form: "Login",
        validate
    })
)(Login);
