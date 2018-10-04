import { connect } from 'react-redux';
import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Icon } from "react-native-elements";

import { InputText, Button, Toolbar } from "../components";
import { navigateBack } from "../helpers";

import styles from '../styles';

class Home extends Component {

  constructor(props) {
      super(props);
      this.state = {
        showCamera: true,
        cameraType: Camera.constants.Type.back
      };
  }

  renderCamera() {
    if(this.state.showCamera) {
        return (
            <Camera
                ref="cam"
                style={styles.container}
                onBarCodeRead={this._onBarCodeRead}
                type={this.state.cameraType}>
            </Camera>
        );
    } else {
        return (
            <View></View>
        );
    }
}

_onBarCodeRead(e) {
    this.setState({showCamera: false});
    AlertIOS.alert(
        "Barcode Found!",
        "Type: " + e.type + "\nData: " + e.data
    );
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
          <View style={{flex:1}}>
              <TouchableOpacity onPress={}>
                  <Text>Open Camera</Text>
              </TouchableOpacity>
          </View>
      </View>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
