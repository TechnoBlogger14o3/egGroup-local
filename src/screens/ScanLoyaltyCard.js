import { connect } from 'react-redux';
import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Alert } from 'react-native';
import { Icon, Card } from "react-native-elements";

import { InputText, Button, Toolbar } from "../components";
import { navigateBack, navigateTo } from "../helpers";
import { CardIOModule, CardIOUtilities } from 'react-native-awesome-card-io';
import styles from '../styles';

class ScanLoyaltyCard extends Component {


  // componentWillMount() {
  //   if (Platform.OS === 'ios') {
  //     CardIOUtilities.preload();
  //   }
  // }

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
        Vibration.vibrate();
        this.setState({ scanning: true });
        navigateTo("LoyaltyCardList")
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
              text: "Ok",
              onPress: () => {
                navigateTo("AddLoyaltyCardManually")
              }
            }
          ],
          { cancelable: false }
        );
      })
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
            <Text style={{
              fontSize: 20,
              color: "#000000",
              padding: 40,
            }}>Scan Loyalty card</Text>
          </View>
        </Toolbar>
        <View style={{ flex: 3 }}>

          <Text style={styles.paragraphthree}>
            Hold the card inside the frame, it will {"\n"} be scanned automatically
            </Text>
        </View>

        <View style={{ flex: 4 }}>

          <TouchableOpacity onPress={this.scanCard.bind(this)}>
            <Text style={{ textAlign: "center", paddingTop: 30 }}>Scan card!</Text>
          </TouchableOpacity>
        </View>
        <View >

          <Button
            title="Enter Manually"
            onPress={() => alert('Your Go Fuel Card scanned successfully!')}
            backgroundColor="rgb(15, 113, 184)" />
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(ScanLoyaltyCard);