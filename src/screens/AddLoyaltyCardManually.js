import { connect } from 'react-redux';
import React, { Component } from 'react';
import { View, Text, TouchableOpacity, } from 'react-native';
import { Icon } from "react-native-elements";

import { InputText, Button, Toolbar } from "../components";
import { navigateBack } from "../helpers";
import styles from '../styles';

class AddLoyaltyCardManually extends Component {

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
                    <Text style={styles.appTitle}>Add Loyalty Card</Text>
                </View>
          </Toolbar>
          <View style={{flex:7}}>
              <InputText
                  label="Enter Go Fuel Card number"
                  value={this.state.email}
                  onChangeText={value => this.onChange("email", value)}
                  placeholder="1234 5678 9012 3455" />

                   <InputText
                  label="Card Expiry"
                  value={this.state.email}
                  onChangeText={value => this.onChange("email", value)}
                  placeholder="05/20/2022" />

     
          </View>
          <View style={{flex:3, justifyContent: "flex-end", paddingBottom: 8}}>
              <Button style={styles.buttonStyle}
                  title="Done"
                  onPress = { () => alert('Your Go Fuel card added sucessfully!') }
                  backgroundColor="rgb(15, 113, 184)" />
          </View>
      </View>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(AddLoyaltyCardManually);