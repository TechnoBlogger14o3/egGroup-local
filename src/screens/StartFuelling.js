/**
* @author Vineet Mishra <vineet.m@photoninfotech.net>
* @version 1.0.0
* @summary Creating Fuelling Screen
*/

// import - npm modules
import { connect } from 'react-redux';
import React, { Component } from 'react';
import { View, Text, ScrollView, Image, BackHandler, Alert, TouchableOpacity,ImageBackground } from 'react-native';
import { Icon } from "react-native-elements";
import { compose } from "redux";
import { Field, reduxForm, getFormValues } from "redux-form";

// import custom Classes
import { InputText, Button, Toolbar, DatePicker } from "../components";
import { navigateBack, navigateTo } from "../helpers";

// import Styles
import styles from "../styles/screenStyles";


/**
* Represents Start Fuelling Screen.
* @class StartFuelling
* @extends Component
*/

class StartFuelling extends Component {

      // Handling Continue Buttonb
      continueButtonTapped = () =>{
            navigateTo('fuelFilling');
      }
      // Handling Payment Selecting Screen
      slectPaymentMethodTapped(){
            navigateTo('paymentListCards');
      }

      /**
      * @function render
      * React render method for rendering the native elements
      */
      render() {
            return (
                  <View style={[styles.appContainer, styles.whiteBackground]}>
                        <Toolbar
                              style={styles.noBorderToolbar}
                              onClickLeftIcon={navigateBack}
                              iconName="back-arrow"
                              title="Start Fuelling" />
                        <ScrollView>
                              <View style={{ marginLeft: 16, marginRight: 16, marginTop: 20, justifyContent: 'center', alignItems: 'center' }} >
                                    <Text style={{ color: "rgb(15, 113, 184)", fontSize: 20, fontWeight: 'bold', marginBottom: 20 }}>Your Pump</Text>
                                    <Text style={{ color: "rgb(15, 113, 184)", fontSize: 20 }}>The fuel price displayed on the pump
will be applied</Text>
                              </View>
                              <View style={{ marginLeft: 0, marginRight: 0, marginTop: 50, justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }} >
                                    <View style={{ flex: 2, justifyContent: 'center', alignItems: 'center', height: 125 }} >
                                          <ImageBackground style={{width:'100%',height:'100%',justifyContent:'center',alignItems:'center'}} source={require('../assets/images/imgbgfuel1.png')} />
                                    </View>
                                    <View style={{ width:10, justifyContent: 'center', alignItems: 'center', height: 125 }} />
                                    <View style={{ flex: 2, justifyContent: 'center', alignItems: 'center', height: 125}} >
                                          <ImageBackground style={{width:'100%',height:'100%',justifyContent:'center',alignItems:'center'}} source={require('../assets/images/imgbgfuel.png')}>
                                          <Text style={{fontSize:20}}>1</Text>
                                          </ImageBackground>
                                    </View>
                                    <View style={{ width:10, justifyContent: 'center', alignItems: 'center', height: 125 }} />

                                    <View style={{ flex: 2, justifyContent: 'center', alignItems: 'center', height: 125 }} >
                                          <ImageBackground style={{width:'100%',height:'100%',justifyContent:'center',alignItems:'center'}} source={require('../assets/images/imgbgfuel1.png')} />

                                    </View>

                              </View>


                              <View style={{ marginLeft: 16, marginRight: 16, marginTop: 50, justifyContent: 'center', alignItems: 'center' }}>
                                    <Text style={{ color: "rgb(142, 142, 147)", fontSize: 17 }}>East West End
1, Princess street, Edinburgh, EH125BB</Text>
                              </View>
                               <TouchableOpacity onPress={this.slectPaymentMethodTapped}>
                              <View style={{ marginLeft: 16, marginRight: 16, marginTop: 50, justifyContent: 'center', alignItems: 'center', height: 50, borderBottomColor: 'rgb(18, 115, 185)', borderTopColor: 'rgb(18, 115, 185)', borderTopWidth: 1, borderBottomWidth: 1 }}>
                                    <Text style={{ color: "rgb(18, 115, 185)", fontSize: 20 }}>Select Payment Method</Text>
                              </View>
                              </TouchableOpacity>
                        </ScrollView>

                        <View style={{
                              marginLeft: 16, marginRight: 16, height: 50, backgroundColor: 'rgb(15, 113, 184)', borderRadius: 5,
                              width: '90%',
                              height: 50,
                              justifyContent: 'center',
                              alignItems: 'center',
                              position: 'absolute',
                              bottom: 10,
                        }}>
                              <TouchableOpacity onPress={() => this.continueButtonTapped()}>
                                    <Text style={{ fontSize: 20, color: 'white', fontWeight: 'bold' }}>Confirm</Text>
                              </TouchableOpacity>
                        </View>
                  </View>
            );
      }
}

const mapStateToProps = state => ({
      formValues: getFormValues("startFuelling")(state)
});

const mapDispatchToProps = dispatch => ({});

export default compose(
      connect(mapStateToProps, mapDispatchToProps),
      reduxForm({ form: "startFuelling" })
)(StartFuelling);
