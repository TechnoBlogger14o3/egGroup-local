/**
* @author Vineet Mishra <vineet.m@photoninfotech.net>
* @version 1.0.0
* @summary Creating Loyality Card Scan Screen
*/

// import - npm modules
import {connect} from 'react-redux';
import React, { Component } from 'react';
import { View, Text, TouchableOpacity,Alert,Platform } from 'react-native';
import { Icon,Card } from "react-native-elements";

// import custom Classes
import { InputText, Button, Toolbar } from "../components";
import { navigateBack ,navigateTo} from "../helpers";
import { CardIOModule,CardIOView, CardIOUtilities } from 'react-native-awesome-card-io';

// import Styles
import screenstyles from "../styles/screenStyles";


/**
* Represents Scan Loyalty Card Screen.
* @class ScanLoyaltyCard
* @extends Component
*/

class ScanLoyaltyCard extends Component {

  constructor(props) {
      super(props);
      this.state = {
          email: ""
      };
  }
  componentWillMount() {
    if (Platform.OS === 'ios') {
      CardIOUtilities.preload();
    }
  }
  didScanCard = (card) => {
    // the scanned card
    scanCard({
    })
    .then(card => {

    //  navigateTo("addLoyaltyCard");
      return;
    })
    .catch(() => {
      Alert.alert(
        "Scan",
        "Could not scan the card. Please add the card manually",
        [
          {
            text: "Cancel",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel"
          },
          {
            text: "Yes",
            onPress: () => {
              navigateTo("addLoyaltyCardManually")
            }
          }
        ],
        { cancelable: false }
      );
    })
  }

  // Function for Scanning Card
  scanCard() {
    CardIOModule
    .scanCard({
      hideCardIOLogo: true,
      suppressManualEntry: true,
      suppressConfirmation: true,
      requireExpiry: true,
      requireCardholderName: true,
    })
    .then(card => {
      // the scanned card
        navigateTo("loyaltyCardsList");
    })
    .catch(() => {
      // the user cancelled
      Alert.alert(
        "Scan",
        "Could not scan the card. Please add the card manually",
        [
          {
            text: "Cancel",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel"
          },
          {
            text: "Yes",
            onPress: () => {
              navigateTo("addLoyaltyCardManually")
            }
          }
        ],
        { cancelable: false }
      );
    })
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
                     title="Scan Loyalty card" />
               <View style={{flex:3}}>
                   <Text style={screenstyles.paragraphthree}>
                        Hold the card inside the frame, it will {"\n"} be scanned automatically
                   </Text>
               </View>
               <View style={{flex:4}}>
                  <TouchableOpacity onPress={this.scanCard.bind(this)}>
                      <Text style={{textAlign:"center",paddingTop:30}}>Scan card!</Text>
                  </TouchableOpacity>
               </View>
               <View>
                   <Button
                       title="Enter Manually"
                       onPress={() => navigateTo("addLoyaltyCardManually")}
                       backgroundColor="rgb(15, 113, 184)" />
               </View>
           </View>
        );
    }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(ScanLoyaltyCard);
