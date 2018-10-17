import { connect } from 'react-redux';
import React, { Component } from 'react';
import { View, Text, TouchableOpacity ,SafeAreaView} from 'react-native';
import { Icon } from "react-native-elements";

import { InputText, Button, Toolbar } from "../components";
import { navigateBack } from "../helpers";

import screenstyles from "../styles/screenStyles";

class Home extends Component {

  constructor(props) {
      super(props);
  }

  render() {
      return (
        <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
        <View style={[screenstyles.appContainer, screenstyles.whiteBackground]}>
            <Toolbar style={screenstyles.noBorderToolbar}>
                  <View style={screenstyles.toolbarUtils}>
                      <Text style={screenstyles.appTitle}>Home</Text>
                  </View>
            </Toolbar>
            <View style={{flex:1, justifyContent: "center", alignItems: "center"}}>
                <Text>Hi, I am a home page</Text>
            </View>
        </View>
        </SafeAreaView>
      );
    }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
