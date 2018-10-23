/**
* @author Vineet Mishra <vineet.m@photoninfotech.net>
* @version 1.0.0
* @summary Showing when Payment is Successfull
*/

// import - npm modules
import { connect } from 'react-redux';
import React, { Component } from 'react';
import { View, Text, ScrollView, Image, BackHandler, Alert, TouchableOpacity } from 'react-native';
import { Icon } from "react-native-elements";
import { compose } from "redux";
import { Field, reduxForm, getFormValues } from "redux-form";

// import custom Classes
import { InputText, Button, Toolbar, DatePicker } from "../components";
import { navigateBack, navigateTo } from "../helpers";

// import Styles
import styles from "../styles/screenStyles";


/**
* Represents PaymentSuccessfull Screen.
* @class PaymentSuccessfull
* @extends Component
*/
class PaymentSuccessfull extends Component {

      continueButtonTapped = () =>{
          navigateTo("home");
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
                              title="Transcation Complete" />
                        <ScrollView>
                              <View style={{ marginLeft: 0, marginRight: 0, marginTop: 0, justifyContent: 'center', alignItems: 'center', padding: 16 }} >
                                    <Image source={require('../assets/images/imgbgfuel2.png')} style={{ width: 150, height: 150, marginBottom: 20 }} />
                                    <Text style={{ color: "rgb(15, 113, 184)", fontSize: 25, marginBottom: 20 }}>€ 25</Text>
                                    <Text style={{ color: "rgb(15, 113, 184)", fontSize: 17 }}>Your payment is  complete, you can now drive away</Text>
                              </View >

                              <View style={{ marginLeft: 16, marginRight: 16, marginTop: 20, backgroundColor: 'rgb(249, 249, 249)' }}>

                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 20, padding: 5 }}>
                                          <Text style={{ color: "rgb(15, 113, 184)", fontSize: 17,marginLeft:5 }}>Synergy unleaded</Text>
                                          <Text style={{ color: "rgb(15, 113, 184)", fontSize: 17,marginLeft:5 }}>€ 25.05</Text>
                                    </View>

                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10, marginBottom: 30 }}>
                                          <Text style={{ color: "rgb(142, 142, 147)", fontSize: 17, alignSelf: 'flex-start',marginLeft:5 }}>24.53 ltrs - 101.9 p/l</Text>
                                    </View>

                                    <View style={{ backgroundColor: 'rgb(141, 198, 63)', height: 1 }} />

                                    <View style={{ flexDirection: 'row', height: 80 }}>
                                          <View style={{ flex: 1, flexDirection: 'row' }}>
                                                <Image source={require('../assets/images/GofuelCard.png')} style={{ width: 30, height: 25, marginTop: 27.5, marginLeft: 5 }} />
                                                <Text style={{ color:'rgb(142, 142, 147)', fontSize: 17, marginLeft: 10, marginTop: 27.5, }}>Go Fuelcard</Text>
                                          </View>
                                          <View style={{ flex: 1, justifyContent: 'center', padding: 5 }}>
                                                <Text style={{ color:"rgb(15, 113, 184)", fontSize: 17, marginLeft: 10, alignSelf: 'flex-end' }}>.... .... .... 4533</Text>
                                          </View>
                                    </View>
                                    <View style={{ backgroundColor: 'rgb(141, 198, 63)', height: 1 }} />
                              </View>
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
                                    <Text style={{ fontSize: 20, color: 'white', fontWeight: 'bold' }}>Go Home</Text>
                              </TouchableOpacity>
                        </View>
                  </View>
            );
      }
}

const mapStateToProps = state => ({
      formValues: getFormValues("paymentSuccessfull")(state)
});

const mapDispatchToProps = dispatch => ({});

export default compose(
      connect(mapStateToProps, mapDispatchToProps),
      reduxForm({ form: "paymentSuccessfull" })
)(PaymentSuccessfull);
