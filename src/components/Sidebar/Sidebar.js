/**
* @author Vineet Mishra <vineet.m@photoninfotech.net>
* @version 1.0.0
*/

// import - npm modules
import React from 'react';
import {Text, View, TouchableNativeFeedback,Image, ScrollView,StyleSheet} from 'react-native';

// import - custom class
import componentstyles from "../../styles/componentStyles";
import { navigateTo } from "./../../helpers";

/**
* Represents Sidebar.
* @class Sidebar
* @extends React.Component
*/
class Sidebar extends React.Component {
 
    /**
    * @function render
    * React render method for rendering the native elements
    */
 
    render() {

    return (
      <ScrollView style={componentstyles.sidebarContainer}>
          <TouchableNativeFeedback  onPress={()=>navigateTo("register")}>
              <View style={componentstyles.menifestContainer}>
                  <View style={componentstyles.sidebarIcon}>
                      <Image
                        source={require('./../../assets/images/randomIcon.png')}
                        style={componentstyles.sidebarIconImage}
                      />
                  </View>
                  <View style={componentstyles.listViewCont}>
                      <Text>Register</Text>
                  </View>
              </View>
          </TouchableNativeFeedback>
          <TouchableNativeFeedback  onPress={() => navigateTo("login")}>
              <View style={componentstyles.menifestContainer}>
                  <View style={componentstyles.sidebarIcon}>
                      <Image
                        source={require('./../../assets/images/randomIcon.png')}
                        style={componentstyles.sidebarIconImage}
                      />
                  </View>
                  <View style={componentstyles.listViewCont}>
                      <Text>Login</Text>
                  </View>
              </View>
          </TouchableNativeFeedback>
          <TouchableNativeFeedback onPress={() => navigateTo("forgotPassword")}>
              <View style={componentstyles.menifestContainer}>
                  <View style={componentstyles.sidebarIcon}>
                      <Image
                        source={require('./../../assets/images/randomIcon.png')}
                        style={componentstyles.sidebarIconImage}
                      />
                  </View>
                  <View style={componentstyles.listViewCont}>
                      <Text>forgotPassword</Text>
                  </View>
              </View>
          </TouchableNativeFeedback>
          <TouchableNativeFeedback onPress={() => navigateTo("socialLogin")}>
              <View style={componentstyles.menifestContainer}>
                  <View style={componentstyles.sidebarIcon}>
                      <Image
                        source={require('./../../assets/images/randomIcon.png')}
                        style={componentstyles.sidebarIconImage}
                      />
                  </View>
                  <View style={componentstyles.listViewCont}>
                      <Text>Social Login</Text>
                  </View>
              </View>
          </TouchableNativeFeedback>

          <TouchableNativeFeedback onPress={() => navigateTo("settings")}>
              <View style={componentstyles.menifestContainer}>
                  <View style={componentstyles.sidebarIcon}>
                      <Image
                        source={require('./../../assets/images/randomIcon.png')}
                        style={componentstyles.sidebarIconImage}
                      />
                  </View>
                  <View style={componentstyles.listViewCont}>
                      <Text>Settings</Text>
                  </View>
              </View>
          </TouchableNativeFeedback>
      </ScrollView>
    );
  }
}

export default Sidebar;
