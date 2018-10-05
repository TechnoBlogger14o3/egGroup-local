import { connect } from 'react-redux';
import React, { Component } from 'react';
import { View, Text, TouchableOpacity,Alert,Image } from 'react-native';
import { Icon, Card } from "react-native-elements";
import logo from "../assets/images/signup/Loginlogo.png"


import { InputText, Button, Toolbar } from "../components";
import { navigateBack } from "../helpers";

import styles from '../styles';

class LoyaltyCardsList extends Component {

  constructor(props) {
      super(props);
      this.state = {
          email: ""
      };
  }

  onChange = (key, value) => {
      this.setState({
          [key]: value
      });
  }

  onPress = () => {

  }

  state = {
    modalVisible: false,
  };

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
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
                    <Text style={styles.appTitle}>Loyalty Cards</Text>
                </View>
          </Toolbar>
          
         
          <Card  >
<View style={{ flexDirection: 'row',justifyContent: 'space-between'}}>
<View>

<Image source={logo}/>

</View>
 
<View >
   
<Text style={{color:"rgb(15, 113, 184)"}}>Fuel card Number </Text>
<Text>1234 5678 9012 3455{"\n"}</Text>

<Text style={{color:"rgb(15, 113, 184)"}}>Card Expiry</Text>
<Text>05/20/2022</Text>
</View> 
<View><Icon style={{ position: 'absolute'}} name="cancel"  size={14} 
 onPress={() => {
    this.setModalVisible(true);
  }}
  /></View>
</View>
</Card>

<Card  >
<View style={{ flexDirection: 'row',justifyContent: 'space-between'}}>
<View>

<Image source={logo}/>

</View>
 
<View >
   
<Text style={{color:"rgb(15, 113, 184)"}}>Fuel card Number </Text>
<Text>1234 5678 9012 3455{"\n"}</Text>

<Text style={{color:"rgb(15, 113, 184)"}}>Card Expiry</Text>
<Text>05/20/2022</Text>
</View> 
<View><Icon style={{ position: 'absolute'}} name="cancel"  size={14} 
 onPress={() => {
    this.setModalVisible(true);
  }}
  /></View>
</View>
</Card>

<Card  >
<View style={{ flexDirection: 'row',justifyContent: 'space-between'}}>
<View>

<Image source={logo}/>

</View>
 
<View >
   
<Text style={{color:"rgb(15, 113, 184)"}}>Fuel card Number </Text>
<Text>1234 5678 9012 3455{"\n"}</Text>

<Text style={{color:"rgb(15, 113, 184)"}}>Card Expiry</Text>
<Text>05/20/2022</Text>
</View> 
<View><Icon style={{ position: 'absolute'}} name="cancel"  size={14} 
 onPress={() => {
    this.setModalVisible(true);
  }}
  /></View>
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

export default connect(mapStateToProps, mapDispatchToProps)(LoyaltyCardsList);