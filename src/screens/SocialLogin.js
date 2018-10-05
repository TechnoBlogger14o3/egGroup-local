import { connect } from 'react-redux';
import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView,StyleSheet,Alert } from 'react-native';
import { Icon } from "react-native-elements";
import {InputText, Button,Toolbar, LinkButton} from "../components";
import { navigateBack } from "../helpers";
import {GoogleSignin, GoogleSigninButton,statusCodes} from 'react-native-google-signin';

class SocialLogin extends Component {
    constructor(props) {
        super(props);
        this.state = {
          userInfo: null,
          error: null,
        };
      }

   componentDidMount() {
    this.getCurrentUser();
    this.configureGoogleSignIn();
 
  }

  configureGoogleSignIn() {
    GoogleSignin.configure({
      webClientId: "597686954748-luo5e7ipa2fqiupmgv2dmpmoh4rat840.apps.googleusercontent.com",
      offlineAccess: false,
    });
  }

  async getCurrentUser() {
    try {
      const userInfo = await GoogleSignin.signInSilently();
      this.setState({ userInfo, error: null });
    } catch (error) {
      const errorMessage =
        error.code === statusCodes.SIGN_IN_REQUIRED ? 'Please sign in' : error.message;
      this.setState({
        error: errorMessage,
      });
    }
  }

  render() {
    const { userInfo } = this.state;

    const body = userInfo ? this.renderUserInfo() : this.renderSignInButton();
    return (
      <View style={[styles.container, { flex: 1 }]}>
        {this.renderIsSignedIn()}
        {body}
      </View>
    );
  }

  renderIsSignedIn() {
    return (
      <Button color="blue"
        onPress={async () => {
          const isSignedIn = await GoogleSignin.isSignedIn();
          Alert.alert(String(isSignedIn));
        }}
        title="is user signed in?"
      />
    );
  }

  renderUserInfo() {
    const { userInfo } = this.state;
   // Alert.alert(JSON.stringify(userInfo.user));
   // Alert.alert(userInfo.user.name+" "+ userInfo.user.email);
    Alert.alert(userInfo.user.id)
    return (
      <View style={styles.container}>
        <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 20 }}>
          Welcome {userInfo.user.name}
        </Text>
        <Text>Name: {userInfo.user.name}</Text>
        <Text>UserId: {userInfo.user.id}</Text>
        <Image source={{uri:userInfo.user.photo}} style={{width:120,height:120}} alt="image"></Image>
        <Text>email Id: {userInfo.user.email} {"\n"}</Text>
        <Text>Your user info: {JSON.stringify(userInfo.user)}</Text>

        <Button onPress={this._signOut} title="Log out" />
        {this.renderError()}
      </View>
    );
  }

  renderSignInButton() {
    return (
      <View style={styles.container}>
          <TouchableOpacity onPress={this._signIn}>
               <Image source={require('./../assets/images/signup/googlesignin.png')} style={{width:212,height:48}} />
          </TouchableOpacity>
          {/* <GoogleSigninButton
            style={{ width: 212, height: 48 }}
            size={GoogleSigninButton.Size.Standard}
            color={GoogleSigninButton.Color.Auto}
            onPress={this._signIn}
          /> */}
          {this.renderError()}
      </View>
    );
  }

  renderError() {
    const { error } = this.state;
    if (!error) {
      return null;
    }
    const text = `${error.toString()} ${error.code ? error.code : ''}`;
    return <Text>{text}</Text>;
  }

  _signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      this.setState({ userInfo, error: null });
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // sign in was cancelled
        Alert.alert('cancelled');
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation in progress already
        Alert.alert('in progress');
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        Alert.alert('play services not available or outdated');
      } else {
        Alert.alert('Something went wrong', error.toString());
        this.setState({
          error,
        });
      }
    }
  };

  _signOut = async () => {
    try {
      await GoogleSignin.revokeAccess();
      await GoogleSignin.signOut();

      this.setState({ userInfo: null, error: null });
    } catch (error) {
      this.setState({
        error,
      });
    }
  };
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(SocialLogin);
