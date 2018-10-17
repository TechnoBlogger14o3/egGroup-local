import { connect } from 'react-redux';
import React, { Component } from 'react';
import { View, Text, TouchableOpacity,Alert,Image,Modal,TouchableHighlight,ImageBackground} from 'react-native';
import { Icon, Card } from "react-native-elements";
import logo from "../assets/images/signup/Loginlogo.png";
import banner from "../assets/images/img_banner_esso.png";
import LinearGradient from 'react-native-linear-gradient';
import { InputText, Button, Toolbar } from "../components";
import { navigateBack } from "../helpers";
import screenstyles from "../styles/screenStyles";


class PromotionsDetails extends Component {
state = {
    modalVisible: false,
  };

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

state = {
  modalVisible: false,
};

setModalVisible(visible) {
  this.setState({modalVisible: visible});
}

render() {
  return (
    <View style={{padding:20,textAlign:"center"}}>
    <Modal
      animationType="slide"
      transparent={false}
      visible={this.state.modalVisible}
      onRequestClose={() => {
        Alert.alert('Modal has been closed.');
      }}>
      <View style={{ justifyContent:"center"}}>
        <View>
    
  <View>
                            <ImageBackground style={{
                                height: 150,
                                resizeMode: 'contain',

                            }} source={banner}>
       <TouchableHighlight
                  onPress={() => {
                 this.setModalVisible(!this.state.modalVisible);
                     }}>
                  {/* <Text style={{textAlign:"right",}}>X</Text> */}
                 <View style={{width:800, alignItems:"stretch",}}>
                      <Icon   name="cancel"  size={16} />
                </View>
       </TouchableHighlight>
                            </ImageBackground>
  </View>

        <Text style={{fontSize:30,textAlign:"center", paddingTop:20,color:"rgb(51,51,51)",}}>20% OFF</Text>
        <Text style={{ textAlign:"center",color:"rgb(15,113,184)",paddingTop:20}}>Promo Code</Text>
  
                        <LinearGradient style={{justifyContent: 'center', alignSelf: 'center', width: 150, padding: 10, marginTop: 10}} colors={['#339933', '#006666', '#003366']}>
                            <Text style={{ color: 'white', textAlign: 'center' }}>GET20</Text>
                            </LinearGradient>

                      <View style={{paddingTop:20,}}>
                            <ImageBackground style={{
                                height: 60,
                                marginRight:40,
                                marginLeft:40,
                                textAlign:"center"

                            }} source={{
                                uri:
                              'https://thewindowsclub-thewindowsclubco.netdna-ssl.com/wp-content/uploads/2011/11/Barcode.jpg'}}>
                             </ImageBackground>
                      </View>
            <View>
                    <Text style={{color:"rgb(15,113,184)",padding:20}}>Terms & Conditions to redeem the offer </Text>
                    <Text style={{padding:20,paddingBottom:20,paddingTop:2,}}>Fill fuel above €20 in Esso fuel station and get{"\n"}20% OFF in KFC chicken</Text>
            </View>
  
                    <Text style={{ textAlign:"center", paddingTop:90,}}>
                        
<Text>------------------------------------{"\n"}
Valid till 02 NOV 2018{"\n"}
------------------------------------</Text>
                        
                        </Text>
        </View>
      </View>
    </Modal>

    <TouchableHighlight
      onPress={() => {
        this.setModalVisible(true);
      }}>
      <Text>PromotionsView</Text>
    </TouchableHighlight>
  </View>
  );
}
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(PromotionsDetails);