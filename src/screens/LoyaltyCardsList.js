
/**
* @author Vineet Mishra <vineet.m@photoninfotech.net>
* @version 1.0.0
* @summary Creating Loyality Card List Screen
*/

// import - npm modules
import { connect } from 'react-redux';
import React, { Component } from 'react';
import { View, Text, TouchableOpacity,Alert,Image,TouchableHighlight,ImageBackground } from 'react-native';
import { Icon, Card } from "react-native-elements";

// import required Icons
import logo from "../assets/images/signup/Loginlogo.png"
import feulcard from "../assets/images/go_fuel_card.png"

// import custom Classes
import { InputText, Button, Toolbar } from "../components";
import { navigateBack,navigateTo } from "../helpers";

// import Styles
import screenstyles from "../styles/screenStyles";


/**
* Represents Loyalty Cards List.
* @class LoyaltyCardsList
* @extends Component
*/

class LoyaltyCardsList extends Component {

state = {
  modalVisible: false,
};

setModalVisible(visible) {
  this.setState({modalVisible: visible});
}

closeModal = () => {
  this.setState({modalVisible: false})
}


/**
* @function render
* React render method for rendering the native elements
*/
render() {

  return (
    <View style={[screenstyles.appContainer, screenstyles.whiteBackground]}>
        <Toolbar
            style={[screenstyles.noBorderToolbar]}
            onClickLeftIcon={navigateBack}
            iconName="back-arrow"
            title="Loyalty Cards"
            rightIconName="plus"
            onClickRightIcon={() => {
              navigateTo("addLoyaltyCard")
            }} />
        <Card
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {alert("Modal has been closed.")}}>
<View

            style={{ flexDirection: 'row',justifyContent: 'space-between'}}>
<View style={{paddingRight:10}}>
 <Image style={{width:130,height:80,borderRadius:5,alignSelf: 'stretch', flex: 1,alignItems: "center",}}source={feulcard}/>
</View>

<View >

<Text style={{color:"rgb(15, 113, 184)"}}>Fuel card Number </Text>
<Text>1234 5678 9012 3455{"\n"}</Text>

<Text style={{color:"rgb(15, 113, 184)"}}>Card Expiry</Text>
<Text>20/05/2022</Text>
</View>
<View >
  <Icon style={{}} name="cancel"  size={16} reverseColor={'red'}
 />
</View>
</View>
</Card>

              <Card
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {alert("Modal has been closed.")}}>
<View

            style={{ flexDirection: 'row',justifyContent: 'space-between'}}>
<View style={{paddingRight:10}}>
 <Image style={{width:130,height:80,borderRadius:5,alignSelf: 'stretch',flex: 1,alignItems: "center",}}source={feulcard}/>
</View>

<View >

<Text style={{color:"rgb(15, 113, 184)"}}>Fuel card Number </Text>
<Text>1234 5678 9012 3455{"\n"}</Text>

<Text style={{color:"rgb(15, 113, 184)"}}>Card Expiry</Text>
<Text>20/05/2022</Text>
</View>
<View >
  <Icon style={{}} name="cancel"  size={16} reverseColor={'red'}
 />
</View>
</View>
</Card>

               <Card
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {alert("Modal has been closed.")}}>
<View
            style={{ flexDirection: 'row',justifyContent: 'space-between'}}>
<View style={{paddingRight:10}}>
 <Image style={{width:130,height:80,borderRadius:5,alignSelf: 'stretch',flex: 1,alignItems: "center",}}source={feulcard}/>
</View>

<View >

<Text style={{color:"rgb(15, 113, 184)"}}>Fuel card Number </Text>
<Text>1234 5678 9012 3455{"\n"}</Text>

<Text style={{color:"rgb(15, 113, 184)"}}>Card Expiry</Text>
<Text>20/05/2022</Text>
</View>
<View >
  <Icon style={{}} name="cancel"  size={16} reverseColor={'red'}
 />
</View>
</View>
</Card>
        <View style={{flex:3, justifyContent: "flex-end", paddingBottom: 8}}>


        </View>
    </View>
  );
}
}
const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(LoyaltyCardsList)
