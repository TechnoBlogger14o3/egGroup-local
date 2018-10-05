import React from 'react';
import {Text, View, TouchableNativeFeedback,Image, ScrollView,StyleSheet} from 'react-native';
import styles from './../../styles'
import { navigateTo } from "./../../helpers";
class Sidebar extends React.Component {
  render() {

    return (
      <ScrollView style={styles.sidebarContainer}>
          <TouchableNativeFeedback  onPress={()=>navigateTo("register")}>
              <View style={styles.menifestContainer}>
                  <View style={styles.sidebarIcon}>
                      <Image
                        source={require('./../../assets/images/randomIcon.png')}
                        style={styles.sidebarIconImage}
                      />
                  </View>
                  <View style={styles.listViewCont}>
                      <Text>Register</Text>
                  </View>
              </View>
          </TouchableNativeFeedback>
          <TouchableNativeFeedback  onPress={() => navigateTo("login")}>
              <View style={styles.menifestContainer}>
                  <View style={styles.sidebarIcon}>
                      <Image
                        source={require('./../../assets/images/randomIcon.png')}
                        style={styles.sidebarIconImage}
                      />
                  </View>
                  <View style={styles.listViewCont}>
                      <Text>Login</Text>
                  </View>
              </View>
          </TouchableNativeFeedback>
          <TouchableNativeFeedback onPress={() => navigateTo("forgotPassword")}>
              <View style={styles.menifestContainer}>
                  <View style={styles.sidebarIcon}>
                      <Image
                        source={require('./../../assets/images/randomIcon.png')}
                        style={styles.sidebarIconImage}
                      />
                  </View>
                  <View style={styles.listViewCont}>
                      <Text>forgotPassword</Text>
                  </View>
              </View>
          </TouchableNativeFeedback>
          <TouchableNativeFeedback onPress={() => navigateTo("socialLogin")}>
              <View style={styles.menifestContainer}>
                  <View style={styles.sidebarIcon}>
                      <Image
                        source={require('./../../assets/images/randomIcon.png')}
                        style={styles.sidebarIconImage}
                      />
                  </View>
                  <View style={styles.listViewCont}>
                      <Text>Social Login</Text>
                  </View>
              </View>
          </TouchableNativeFeedback>

          <TouchableNativeFeedback onPress={() => navigateTo("settings")}>
              <View style={styles.menifestContainer}>
                  <View style={styles.sidebarIcon}>
                      <Image
                        source={require('./../../assets/images/randomIcon.png')}
                        style={styles.sidebarIconImage}
                      />
                  </View>
                  <View style={styles.listViewCont}>
                      <Text>Settings</Text>
                  </View>
              </View>
          </TouchableNativeFeedback>
      </ScrollView>
    );
  }
}

export default Sidebar;
