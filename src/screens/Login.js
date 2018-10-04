import { connect } from 'react-redux';
import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native';

import {InputText, Button, LinkButton} from "../components";
import { navigateTo } from "../helpers";

import logo from "../assets/images/signup/Loginlogo.png"
import styles from '../styles';

class Login extends Component {

  constructor(props) {
      super(props);
      this.state = {
          isPasswordShown: false,
          email: "",
          password: ""
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

  render() {
    return (
      <View style={[styles.appContainer, styles.whiteBackground]}>
          <View style={{flex:8}}>
              <View style={styles.loginFormCont}>
                  <View style={styles.loginLogoContainer}>
                      <Image source={logo}/>
                  </View>
                  <View>
                      <InputText
                          style={{marginTop: 0}}
                          label="Email"
                          value={this.state.email}
                          onChangeText={value => this.onChange("email", value)}
                          placeholder="Enter Email Address" />
                      <InputText
                          label="Password"
                          value={this.state.password}
                          onIconPress={this.onIconPress}
                          isPassword={true}
                          onChangeText={value => this.onChange("password", value)}
                          secureTextEntry={!this.state.isPasswordShown}
                          placeholder="Enter Password" />
                      <View style={styles.loginHelperCont}>
                          <LinkButton
                              title="Netherlands"
                              color="rgb(15, 113, 184)" />
                          <LinkButton
                              onPress={() => navigateTo("forgotPassword")}
                              title="Forgot Password?"
                              color="rgb(15, 113, 184)" />
                      </View>
                  </View>
              </View>
          </View>
          <View style={{flex:4, justifyContent: "flex-end"}}>
              <Button
                  title="Login"
                  backgroundColor="rgb(15, 113, 184)" />
              <Button
                  title="Login with Google"
                  backgroundColor="rgb(218, 71, 51)"
                  iconName="google-plus" />
              <View style={styles.loginFooterTextContainer}>
                  <Text style={[styles.fontSize16, styles.colorBlack, {marginRight: 7}]}>
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

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
