import { connect } from 'react-redux';
import React, { Component } from 'react';
import { View, Text, TouchableOpacity,Alert } from 'react-native';
import { Icon,Card } from "react-native-elements";

import { InputText, Button, Toolbar } from "../components";
import { navigateBack ,navigateTo} from "../helpers";
import { CardIOView, CardIOUtilities,CardIOModule } from 'react-native-awesome-card-io';

import styles from '../styles';

class ScanLoyaltyCard extends Component {

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

//   componentWillMount() {
//     CardIOUtilities.preload();
//   }

  didScanCard = (card) => {
    // the scanned card
  }

  scanCard() {
    CardIOModule
      .scanCard()
      .then(card => {
        // the scanned card
      })
      .catch(() => {
        // the user cancelled
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
                    <Text style={{fontSize: 18,
        // fontWeight:"bold",
        color: "#000000",
        padding:60}}>Scan Loyalty card</Text>
                </View>
          </Toolbar>
          <View style={{flex:3}}>

          <Text style={styles.paragraphOne}>
               Hold the card inside the frame, it will be scanned automatically
              </Text>
        
          

                   
          </View>

          <View style={{flex:4}}>



         <TouchableOpacity onPress={this.scanCard.bind(this)}>
          <Text>Scan card!</Text>
        </TouchableOpacity>
            
          </View>
          <View style={{flex:3, justifyContent: "flex-end", paddingBottom: 8}}>
            
          <Button style={{borderRadius:50,}}
          
                  title="Enter Manually"
              

                  onPress = { () => alert('Your Go Fuel Card scanned successfully!') }
              
                  backgroundColor="rgb(15, 113, 184)" />
          </View>
      </View>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(ScanLoyaltyCard);