/**
* @author Vineet Mishra <vineet.m@photoninfotech.net>
* @version 1.0.0
* @summary Creating
*/

// import - npm modules

import React, { Component } from 'react';
import {Platform, StyleSheet, Text, View, FlatList, Button, Image, AppRegistry, Modal, TouchableHighlight} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { connect } from 'react-redux';

// import custom Classes
import { navigateTo } from "../helpers";

// import Styles
import screenstyles from "../styles/screenStyles";


/**
* Represents Promotions List Screen.
* @class PromotionsList
* @extends Component
*/

export class PromotionsList extends Component {


  /**
  * @function render
  * React render method for rendering the native elements
  */

  render() {
    return (
      <View>
        <FlatList
          data={[
            {promo: 'GET 20', validitytext: "Valid till 02 Nov 2018"},
            {promo: 'PROMO10', validitytext: "Valid till 02 Nov 2018"},
            {promo: 'GET 20', validitytext: "Valid till 02 Nov 2018"},
            {promo: 'PROMO10', validitytext: "Valid till 02 Nov 2018"},
            {promo: 'GET 20', validitytext: "Valid till 02 Nov 2018"},
            {promo: 'PROMO10', validitytext: "Valid till 02 Nov 2018"},
            {promo: 'GET 20', validitytext: "Valid till 02 Nov 2018"},
            {promo: 'PROMO10', validitytext: "Valid till 02 Nov 2018"},
          ]}
          renderItem={({item}) =>
          <TouchableHighlight onPress={() => navigateTo("promotionsdetails")}>
          <View style={screenstyles.mainContainer}>

        <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={['#339933', '#006666', '#003366']} style={screenstyles.gradientContainer}>
        <Text style={{ flex: 1, fontSize: 18, alignSelf: 'center', color: 'white', paddingLeft: 10 }}>20% {"\n"}OFF</Text>
        <View  style={screenstyles.descriptionContainer}>
          <Text style={{ color: 'white', marginTop: 8 }}>Fill fuel above €20 in Esso petrol {"\n"}bunk and get 20% OFF in KFC {"\n"}chicken.</Text>
        <View style={screenstyles.promoContainer}>
          <Text style={ screenstyles.promoCodeText }>Promo Code</Text>
          <LinearGradient style={screenstyles.promoBorder} start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={['#339933', '#006666', '#003366']}>
            <Text style={screenstyles.promoText}>{item.promo}</Text>
          </LinearGradient>
        </View>
        </View>
        </LinearGradient>
          <Text style={screenstyles.validityStyle}>{item.validitytext}</Text>
          </View>
          </TouchableHighlight>
        }
        />
        <Button onPress={() => this.props.navigation.navigate('Test')} title="Test"/>
      </View>
    )
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(PromotionsList);
