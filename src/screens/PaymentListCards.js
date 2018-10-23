/**
* @author Vineet Mishra <vineet.m@photoninfotech.net>
* @version 1.0.0
* @summary Creating List of Saved Cards for Payment
*/

// import - npm modules

import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image, Alert, ScrollView, Platform, SectionList, StyleSheet, Dimensions } from 'react-native';

// import custom Classes
import { InputText, Button, Toolbar } from "../components";
import { navigateBack, navigateTo } from "../helpers";
const deviceWidth = Dimensions.get('window').width


/**
* Represents List of saved cards.
* @class PaymentListCards
* @extends Component
*/

class PaymentListCards extends Component {

      constructor(props) {
            super(props)
            this.state = {
                  "data": [
                        {
                              "sectionTitle": "Go Fuel Card",
                              "sectionFooter": "+ Use a New Card",
                              "sectionFooter1": "0",

                              data: [
                                    {
                                          "CardNumber": ".... .... .... 4533",
                                          "CVV": "09/2020",
                                          "CardImage": require("../assets/images/Icnonclick.png")
                                    },
                                    {
                                          "CardNumber": ".... .... .... 5511",
                                          "CVV": "10/2013",
                                          "CardImage": require("../assets/images/Icnonclick.png")
                                    }
                              ]
                        },
                        {
                              "sectionTitle": "Credit / Debit Card",
                              "sectionFooter": "+ Use a New Card",
                              "sectionFooter1": "1",
                              data: [
                                    {
                                          "CardNumber": ".... .... .... 4533",
                                          "CVV": "09/2020",
                                          "Name":"Rita Fletcher",
                                          "CardImage": require("../assets/images/Icnonclick.png"),
                                          "CardImage1": require("../assets/images/MasterCard.png")

                                    },
                                    {
                                          "CardNumber": ".... .... .... 5511",
                                          "CVV": "10/2023",
                                          "Name":"Rita Fletcher",
                                          "CardImage": require("../assets/images/Icnonclick.png"),
                                          "CardImage1": require("../assets/images/VisaCard.png")

                                    },
                                    {
                                          "CardNumber": ".... .... .... 5511",
                                          "CVV": "10/2023",
                                          "Name":"John Doe",
                                          "CardImage": require("../assets/images/Icnonclick.png"),
                                          "CardImage1": require("../assets/images/AmexCard.png")

                                    }

                              ]
                        },
                  ]
            }
      }
      addGoFuelCards(){
            navigateTo('addCreditCardForPayment');
      }
      addDebitORCreditCards(){
        navigateTo('paymentBillingScreen');
      }
      continueButtonTapped = () => {

      }
      _separatorItem = ({ item, index }) => {
            return (
                  <View
                        style={{
                              backgroundColor: 'rgb(239, 239, 239)',
                              height: 1,
                        }}
                  />
            )
      }


      /**
      * @function render
      * React render method for rendering the native elements
      */

      render() {
            return (
                  <View style={{ flex: 1,backgroundColor:'white' }}>
                        <Toolbar
                              style={styles.noBorderToolbar}
                              onClickLeftIcon={navigateBack}
                              iconName="back-arrow"
                              title="Select Payment" />
                        <View style={{ flex: 1, paddingLeft: 16, paddingRight: 16,paddingBottom:10 }}>

                              <SectionList
                                    ItemSeparatorComponent={this._separatorItem}
                                    keyExtractor={(item, index) => index.toString()}
                                    renderItem={({ item, index, section }) => {
                                          console.log("sections",section);
                                          console.log("itemsections",item.section);

                                          if (section.sectionTitle == "Go Fuel Card" ){
                                              return(
                                                <View style={{ marginLeft: 0, marginRight: 0, flex: 1, backgroundColor: 'rgb(249, 249, 249)', justifyContent: 'center', height: 80 }}>
                                                <View style={{ flex: 1, flexDirection: 'row' }}>
                                                      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'transferent' }}>
                                                            <Image source={item.CardImage} style={{ width: 25, height: 25 }} />
                                                      </View>

                                                      <View style={{ flex: 2.5, justifyContent: 'center' }}>
                                                            <Text style={{ marginBottom: 5, marginTop: 5, marginLeft: 5, fontSize: 15,color:'rgb(15, 113, 184)' }}>{item.CardNumber}</Text>
                                                      </View>

                                                      <View style={{ flex: 1.5, justifyContent: 'space-evenly', alignItems: 'center', backgroundColor: 'transferent' }}>
                                                            <Text style={{ marginBottom: 5, marginTop: 5, marginLeft: 5, fontSize: 17 }}>Exp.</Text>
                                                            <Text style={{ marginBottom: 5, marginTop: 5, marginLeft: 5, fontSize: 17, color:'rgb(15, 113, 184)' }}>{item.CVV}</Text>
                                                      </View>

                                                </View>
                                          </View>
                                              );
                                          }else{
                                              return(
                                                <View style={{ marginLeft: 0, marginRight: 0, flex: 1, backgroundColor: 'rgb(249, 249, 249)', justifyContent: 'center', height: 80 }}>
                                                <View style={{ flex: 1, flexDirection: 'row' }}>
                                                      <View style={{ flex: 0.8, justifyContent: 'center', alignItems: 'center', backgroundColor: 'transferent' }}>
                                                            <Image source={item.CardImage} style={{ width: 25, height: 25 }} />
                                                      </View>

                                                      <View style={{ flex: 3, justifyContent: 'center' }}>
                                                           <View style={{ flex:1,flexDirection:'row' }}>
                                                           <Image source={item.CardImage1} style={{ width: 25, height: 25,marginBottom: 10, marginTop: 10 }} />
                                                           <Text style={{marginBottom: 10, marginTop: 10, marginLeft: 10, fontSize: 17,color:'rgb(142, 142, 147)' }}>{item.Name}</Text>
                                                           </View>
                                                           <View style={{ flex:1}}>
                                                            <Text style={{ marginBottom: 10, marginTop: 10, marginLeft: 5, fontSize: 17,color:'rgb(15, 113, 184)' }}>{item.CardNumber}</Text>
                                                            </View>
                                                      </View>

                                                      <View style={{ flex: 1, justifyContent: 'space-evenly', alignItems: 'center', backgroundColor: 'transferent' }}>
                                                            <Text style={{ marginBottom: 5, marginTop: 5, marginLeft: 5, fontSize: 17 }}>Exp.</Text>
                                                            <Text style={{ marginBottom: 5, marginTop: 5, marginLeft: 5, fontSize: 17, color:'rgb(15, 113, 184)' }}>{item.CVV}</Text>
                                                      </View>

                                                </View>
                                          </View>
                                              );
                                          }
                                    }

                                    }
                                    renderSectionHeader={({ section: { sectionTitle } }) => {
                                          if (sectionTitle == "Credit / Debit Card") {
                                                return (
                                                      <View style={{ height: 80, marginLeft: 0, marginRight: 0, flex: 1, backgroundColor: 'white', paddingLeft: 10, justifyContent: 'center' }}>
                                                            <View style={{ flex: 1 }} />
                                                            <View style={{ flex: 1, flexDirection: 'row' }}>
                                                                  <Image source={require('../assets/images/IC_CreditCard.png')} style={{ width: 25, height: 25 }} />
                                                                  <Text style={{ fontWeight: 'bold', fontSize: 17, color: 'rgb(142, 142, 147)', alignSelf: 'baseline', marginLeft: 10 }}>{sectionTitle}</Text>
                                                            </View>
                                                      </View>
                                                )
                                          } else {
                                                return (
                                                      <View style={{ height: 60, marginLeft: 0, marginRight: 0, flex: 1, backgroundColor: 'white', paddingLeft: 10, justifyContent: 'center' }}>

                                                            <View style={{ flex: 1 }} />
                                                            <View style={{ flex: 1, flexDirection: 'row' }}>
                                                                  <Image source={require('../assets/images/GofuelCard.png')} style={{ width: 25, height: 25 }} />
                                                                  <Text style={{ fontWeight: 'bold', fontSize: 17, color: 'rgb(142, 142, 147)', alignSelf: 'baseline', marginLeft: 10 }}>{sectionTitle}</Text>
                                                            </View>
                                                      </View>
                                                )
                                          }


                                    }}
                                    renderSectionFooter={({ section: { sectionFooter,sectionFooter1 } }) => {
                                          if (sectionFooter1 == "0") {
                                                return (
                                                      <TouchableOpacity onPress={this.addGoFuelCards}>
                                                      <View style={{ height: 80, marginLeft: 0, marginRight: 0, flex: 1, backgroundColor: 'rgb(249, 249, 249)'}}>
                                                            <View style={{ width: deviceWidth, height: 1, backgroundColor: 'rgb(239, 239, 239)' }} />
                                                            <View style={{flex:1, justifyContent:'center' }}>
                                                            <Text style={{ fontSize: 17, color: 'rgb(15, 113, 184)',alignSelf:'center' }}>{sectionFooter}</Text>
                                                            </View>
                                                      </View>
                                                      </TouchableOpacity>
                                                )
                                          }else{
                                                return (
                                                      <TouchableOpacity onPress={this.addDebitORCreditCards}>
                                                      <View style={{ height: 80, marginLeft: 0, marginRight: 0, flex: 1, backgroundColor: 'rgb(249, 249, 249)'}}>
                                                            <View style={{ width: deviceWidth, height: 1, backgroundColor: 'rgb(239, 239, 239)' }} />
                                                            <View style={{flex:1, justifyContent:'center' }}>
                                                            <Text style={{ fontSize: 17, color: 'rgb(15, 113, 184)',alignSelf:'center' }}>{sectionFooter}</Text>
                                                            </View>
                                                      </View>
                                                      </TouchableOpacity>
                                                )
                                          }

                                    }}

                                    // renderSectionFooter={({ section: { sectionFooter } }) => {
                                    //       console.log("sections",sections[0]);
                                    //       if (sectionFooter !== "") {
                                    //             return (
                                    //                   <View style={{ height: 80, marginLeft: 0, marginRight: 0, flex: 1, backgroundColor: 'rgb(249, 249, 249)'}}>
                                    //                         <View style={{ width: deviceWidth, height: 1, backgroundColor: 'rgb(239, 239, 239)' }} />
                                    //                         <View style={{flex:1, justifyContent:'center' }}>
                                    //                         <Text style={{ fontSize: 17, color: 'rgb(15, 113, 184)',alignSelf:'center' }}>{sectionFooter}</Text>
                                    //                         </View>
                                    //                   </View>
                                    //             )
                                    //       }

                                    // }}
                                    sections={this.state.data}
                              />
                        </View>
                        <View style={{marginLeft:16,marginRight:16,marginBottom:10,marginTop:0, height:50,alignItems:'center',justifyContent:'center',backgroundColor:'rgb(15, 113, 184)',borderRadius:5}}>
                        <TouchableOpacity  onPress={() => this.continueButtonTapped()}>
                                                            <Text style={{fontSize:20,color:'white',fontWeight: 'bold'}}>Select</Text>
                                                      </TouchableOpacity>
                         </View>
                  </View>

            );
      }
}
const styles = StyleSheet.create({
      container: {
            flex: 1,
            justifyContent: 'center',
            backgroundColor: 'white',
      },
});
export default PaymentListCards;
