import { connect } from 'react-redux';
import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView, DatePickerAndroid } from 'react-native';
import { Icon } from "react-native-elements";

import {InputText, Button, LinkButton, Toolbar, DatePicker} from "../components";
import { navigateBack } from "../helpers";

import logo from "../assets/images/signup/Loginlogo.png"
import styles from '../styles';

class Register extends Component {

  constructor(props) {
      super(props);
      this.state = {
          isPasswordShown: false,
          email: "",
          password: "",
          comfirmPassword: "",
          dateOfBirth: ""
      };
  }

  mapElement = node => {
      this.datePicker = node
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
          <Toolbar style={styles.noBorderToolbar}>
                <Icon
                    name="arrow-left"
                    size={24}
                    type="material-community"
                    onPress={navigateBack}
                    iconStyle={styles.leftIconContainer}
                />
                <View style={styles.toolbarUtils}>
                    <Text style={styles.appTitle}>Registration</Text>
                </View>
          </Toolbar>
          <ScrollView>
              <InputText
                  label="First name *"
                  value={this.state.firstName}
                  onChangeText={value => this.onChange("firstName", value)}
                  placeholder="Enter first name" />
              <InputText
                  label="Last name *"
                  value={this.state.lastName}
                  onChangeText={value => this.onChange("lastName", value)}
                  placeholder="Enter last name" />
              <DatePicker
                  label="Date of birth *"
                  value={this.state.dateOfBirth}
                  mapElement={this.mapElement}
                  placeholder="Enter date of birth"
                  onChangeDate={value => this.onChange("dateOfBirth", value)} />
              <InputText
                  label="Email *"
                  value={this.state.email}
                  onChangeText={value => this.onChange("email", value)}
                  placeholder="Enter email address" />
              <InputText
                  label="Password *"
                  value={this.state.password}
                  onIconPress={this.onIconPress}
                  isPassword={true}
                  onChangeText={value => this.onChange("password", value)}
                  secureTextEntry={!this.state.isPasswordShown}
                  placeholder="Enter password" />
              <InputText
                  label="Confirm Password *"
                  value={this.state.comfirmPassword}
                  onIconPress={this.onIconPress}
                  isPassword={true}
                  onChangeText={value => this.onChange("comfirmPassword", value)}
                  secureTextEntry={!this.state.isPasswordShown}
                  placeholder="Re-enter password" />
              <Button
                  title="Register"
                  backgroundColor="rgb(15, 113, 184)" />
          </ScrollView>
      </View>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Register);
