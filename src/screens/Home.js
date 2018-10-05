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
  }

  render() {
      return (
        <View style={[styles.appContainer, styles.whiteBackground]}>
            <Toolbar style={styles.noBorderToolbar}>
                  <View style={styles.toolbarUtils}>
                      <Text style={styles.appTitle}>Home</Text>
                  </View>
            </Toolbar>
            <View style={{flex:1, justifyContent: "center", alignItems: "center"}}>
                <Text>Hi, I am a home page</Text>
            </View>
        </View>
      );
    }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
