import { connect } from 'react-redux';
import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Icon } from "react-native-elements";

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
                    <Text style={styles.appTitle}>Forgot Password</Text>
                </View>
          </Toolbar>
          <View style={{flex:7}}>
              <Text style={styles.paragraphOne}>
                Enter your email address below to receive your password reset instructions.
              </Text>
              <InputText
                  label="Email"
                  value={this.state.email}
                  onChangeText={value => this.onChange("email", value)}
                  placeholder="Enter Email Address" />
          </View>
          <View style={{flex:3, justifyContent: "flex-end", paddingBottom: 8}}>
              <Button
                  title="Request Password"
                  backgroundColor="rgb(15, 113, 184)" />
          </View>
      </View>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(ForgotPassword);
