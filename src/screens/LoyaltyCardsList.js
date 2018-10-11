import { connect } from 'react-redux';
import React, { Component } from 'react';
import { View, Text, TouchableOpacity,Alert,Image,TouchableHighlight,ImageBackground } from 'react-native';
import { Icon, Card } from "react-native-elements";
import logo from "../assets/images/signup/Loginlogo.png"
import feulcard from "../assets/images/go_fuel_card.png"
import { InputText, Button, Toolbar } from "../components";
import { navigateBack,navigateTo } from "../helpers";

import styles from '../styles';

class LoyaltyCardsList extends Component {

  constructor(props) {
    super(props);
    this.state = {
        email: "",
        activeRowKey: null
    };
}

onChange = (key, value) => {
    this.setState({
        [key]: value
    });
}



state = {
  modalVisible: false,
};

setModalVisible(visible) {
  this.setState({modalVisible: visible});
}

closeModal = () => {
  this.setState({modalVisible: false})
}

render() {
  const swipesettings = {
    autoclose: true,
    onClose: (secId, rowId, direction) => {
      if(this.state.activeRowkey != null){
        this.setState({ activeRowkey: null });
      }
    },

    onOpen: (secId, rowId, direction) =>{
      this.setState({activeRowkey:this.props.item.key});
    },
    right: [
      {
        onpress: () => {
          Alert.alert (
            'Alert',
            'Please conform if you want to delete the card',
            [
              {text: "No",onpress: () => console.log('Cancel Pressed'), style: 'cancel'},
              {text:'Yes',onPress: () => {
                flatListData.splice(this.props.index, 1);
              }},
            ],
            {cancelable:true}
          );
        },

        text: 'Delete', type: 'delete'
      }
    ],
    rowId: this.props.index,
    sectionId: 1
  };
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
                  <Text style={styles.appTitleone}>Loyalty Cards</Text>

              </View>
              <View><Text onPress={() => navigateTo("AddLoyaltyCard")} style={{color:"rgb(15,113,184)",fontSize:30,width:35,}} >+</Text></View>
        </Toolbar>
        
       
        <Card   
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {alert("Modal has been closed.")}}>
<View onPress={() => {
              this.setModalVisible(!this.state.modalVisible)
            }} style={{ flexDirection: 'row',justifyContent: 'space-between'}}>
<View>
 <Image style={{width:160,height:80,borderRadius:5,}}source={feulcard}/>
</View>

<View >
 
<Text style={{color:"rgb(15, 113, 184)"}}>Fuel card Number </Text>
<Text>1234 5678 9012 3455{"\n"}</Text>

<Text style={{color:"rgb(15, 113, 184)"}}>Card Expiry</Text>
<Text>05/20/2022</Text>
</View> 
<View>
  <Icon style={{}} name="cancel"  size={16} reverseColor={'red'} 
onPress={this.closeModal} />
</View>
</View>
</Card>

<Card  >
<View style={{ flexDirection: 'row',justifyContent: 'space-between'}}>
<View>

 <Image style={{width:160,height:80,borderRadius:5}}source={feulcard}/>

</View>

<View >
 
<Text style={{color:"rgb(15, 113, 184)"}}>Fuel card Number </Text>
<Text>1234 5678 9012 3455{"\n"}</Text>

<Text style={{color:"rgb(15, 113, 184)"}}>Card Expiry</Text>
<Text>05/20/2022</Text>
</View> 
<View>
<Icon style={{}} name="cancel"  size={16} reverseColor={'red'} 
onPress={() => {
  this.props.parentFlatList.refreshFlatList(deletingRow);
}}
/></View>
</View>
</Card>

<Card  >
<View style={{ flexDirection: 'row',justifyContent: 'space-between'}}>
<View>

 <Image style={{width:160,height:80,borderRadius:5}}source={feulcard}/>

</View>

<View >
 
<Text style={{color:"rgb(15, 113, 184)"}}>Fuel card Number </Text>
<Text>1234 5678 9012 3455{"\n"}</Text>

<Text style={{color:"rgb(15, 113, 184)"}}>Card Expiry</Text>
<Text>05/20/2022</Text>
</View> 
<View>
  
<Icon style={{}} name="cancel"  size={16} reverseColor={'red'} 
onPress={() => {
  this.props.parentFlatList.refreshFlatList(deletingRow);
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