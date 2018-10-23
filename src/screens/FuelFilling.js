/**
* @author Vineet Mishra <vineet.m@photoninfotech.net>
* @version 1.0.0
* @summary FuelFilling Screen
*/

// import - npm modules

import { connect } from 'react-redux';
import React, { Component } from 'react';
import { View, Text, ScrollView, Image, BackHandler, Alert, TouchableOpacity } from 'react-native';
import { Icon } from "react-native-elements";
import { compose } from "redux";
import { Field, reduxForm, getFormValues } from "redux-form";

// import Custom Classes
import { InputText, Button, Toolbar, DatePicker } from "../components";
import { navigateBack, navigateTo } from "../helpers";

// import Styles
import screenstyles from "../styles/screenStyles";


/**
* Represents Screen for Fuel Filling.
* @class FuelFilling
* @extends Component
*/
class FuelFilling extends Component {

      // Setting a timeout for 10 Sec
      componentDidMount() {
            setTimeout( () => {
                  navigateTo('paymentSuccessfull');
            },10000);
          }


          /**
          * @function render
          * React render method for rendering the native elements
          */
      render() {
            return (
                  <View style={[screenstyles.appContainer, screenstyles.whiteBackground]}>
                        <Toolbar
                              style={screenstyles.noBorderToolbar}
                              onClickLeftIcon={navigateBack}
                              iconName="back-arrow"
                              title="Start Fuelling" />

                        <View style={{ flex:0.8, marginLeft: 16, marginRight: 16, marginTop: 20, justifyContent: 'center', alignItems: 'center' }} >
                              <Text style={{ color: "rgb(15, 113, 184)", fontSize: 25, fontWeight: 'bold', marginBottom: 20 }}>Now Fueling</Text>
                        </View>

                        <View style={{ flex: 2.1, marginLeft: 0, marginRight: 0, justifyContent: 'center', alignItems: 'center',padding:30 }} >
                              <Image source={require('../assets/images/ICfuelstation1.png')} />
                        </View>
                        <View style={{ flex: 2.1}}>
                        <View style={{marginLeft: 16, marginRight: 16, marginTop: 50,flexDirection:'row', justifyContent: 'center', alignItems: 'center', height: 50, borderBottomColor: 'rgb(204, 204, 204)', borderTopColor: 'rgb(204, 204, 204)', borderTopWidth: 1, borderBottomWidth: 1 }}>
                        <Image source={require('../assets/images/ICfuelpump.png')} style={{width:25,height:30}} />

                              <Text style={{ color: "rgb(18, 115, 185)", fontSize: 20,marginLeft:10 }}>Pump 1</Text>
                        </View>
                        </View>

                        {/* <View style={{
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
                        </View> */}
                  </View>
            );
      }
}

const mapStateToProps = state => ({
      formValues: getFormValues("fuelFilling")(state)
});

const mapDispatchToProps = dispatch => ({});


export default compose(
      connect(mapStateToProps, mapDispatchToProps),
      reduxForm({ form: "fuelFilling" })
)(FuelFilling);
