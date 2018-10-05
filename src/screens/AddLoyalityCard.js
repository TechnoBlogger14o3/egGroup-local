import { connect } from 'react-redux';
import React, { Component } from 'react';
import { View, Text, TouchableOpacity,Alert,TouchableHighlight,Dimensions } from 'react-native';
import { Icon } from "react-native-elements";

import { InputText, Button, Toolbar } from "../components";
import { navigateBack,navigateTo } from "../helpers";

import styles from '../styles';

class AddLoyaltyCard extends Component {

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
          <View style={{flex:7,padding:70}}>

 <TouchableHighlight onPress={() => navigateTo("scanLoyaltyCard")}
      style = {{
        borderRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 2,
        width: Dimensions.get('window').width * 0.5,
        height: Dimensions.get('window').width * 0.5,
        alignItems: 'center',
        backgroundColor:'white',
        margin:11,
        marginTop:10,
        marginBottom:10,
        borderWidth: 2,
        borderColor:'lightgrey',
      }}>  
      <Text >
             <Text style={{color:"rgb(15, 113, 184)",fontSize:100,flexDirection: 'column', justifyContent: 'space-between',
       alignItems: 'center'}}>+</Text>
          {"\n"}
          <Text style={{color:'black',fontSize:16,marginBottom:10}}> Add Your Loyalty Card</Text>
          </Text>
          </TouchableHighlight>
                   
          </View>
          <View style={{flex:3, justifyContent: "flex-end", paddingBottom: 8}}>
            
         
          </View>
      </View>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(AddLoyaltyCard);