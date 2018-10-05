import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, View, Dimensions, TouchableOpacity, FlatList, Alert, Image, Platform } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import { SearchBar, Icon } from 'react-native-elements'

import StoreList from './StoreList';

import { Toolbar } from "../components";
import { navigateBack, navigateTo } from "../helpers";

import styles from './../styles';

const { width, height } = Dimensions.get('window');

const aspectRatio = width / height
const LATITUDE_DELTA = 0.0922
const LONGITUDE_DELTA = LATITUDE_DELTA * aspectRatio

class StoreLocator extends Component {
      constructor(props) {
            super(props);
            this.state = {
                  lat: 12.9317,
                  lng: 77.6914,
                  data: [],
                  stationdata: [
                        {
                              "name": "ESSO",
                              "address": "Marnixstraat 250, 1016 TL Amsterdam",
                              "Houres": "Today's Hours: 11 AM TO 4 PM",
                              "Distance": "0.16 km",

                        }
                  ],
                  iconName: 'search',
                  textInputValue: ''
            }
      }

      componentDidMount() {

            navigator.geolocation.getCurrentPosition((position) => {

                  this.setState({
                        lat: position.coords.latitude,
                        lng: position.coords.longitude,
                  });

            });
      }
      distanceButtonTapped = (item, index) => {
            var dataList = [...this.state.stationdata]
            Alert.alert('Distance Button Tapped');
            console.log('data after:: ', this.state.stationdata);
      }

      getTypedIcon = name => {
          return Platform.OS === "ios" ? `ios-${name}` : `${name}`;
        };


      render() {
            return (
                  <View style={styles.container}>
                      <Toolbar style={styles.noBorderToolbar} openDrawer={this.openDrawer}>
                            <Icon
                               name={this.getTypedIcon('arrow-left')}
                               size={24}
                               type="material-community"
                               onPress={navigateBack}
                               iconStyle={styles.leftIconContainer}
                           />
                           <View style={styles.toolbarUtils}>
                               <Text style={styles.appTitle}>Store Details</Text>
                           </View>
                       </Toolbar>
                        <View style={{ flex: 3 }}>

                              <MapView style={{ left: 0, right: 0, top: 0, bottom: 0, position: 'absolute' }}
                                    provider={PROVIDER_GOOGLE}
                                    showsUserLocation={true}
                                    showsMyLocationButton={true}
                                    region={{
                                          latitude: this.state.lat,
                                          longitude: this.state.lng,
                                          latitudeDelta: 0.0900,
                                          longitudeDelta: 0.0500,
                                    }}
                              >
                                    <MapView.Marker

                                          coordinate={{ latitude: this.state.lat, longitude: this.state.lng }} title={this.state.address}
                                          description={this.state.address}
                                    />
                              </MapView>

                        </View>
                        <View style={{ flex: 2 }}>
                              <FlatList
                                    data={this.state.stationdata}
                                    keyExtractor={(item, index) => index.toString()}
                                    ref={(ref) => { this.flatListRef = ref; }}
                                    ItemSeparatorComponent={() => <View style={{ marginLeft: 0, marginRight: 0, height: 0.5, backgroundColor: 'gray' }} />}
                                    renderItem={({ item, index }) =>

                                          <View style={{ flex: 1, backgroundColor: 'rgb(255, 255, 255)' }}>

                                                <View style={{ flex: 1, flexDirection: 'row', paddingTop: 10, paddingBottom: 10, paddingLeft: 16, paddingRight: 16, backgroundColor: 'rgb(255, 255, 255)' }}>

                                                      <View style={{ flex: 2.8, justifyContent: 'center', backgroundColor: 'rgb(255, 255, 255)' }}>
                                                            <Text style={{ marginLeft: 5, marginBottom: 5, fontSize: 17 }}>{item.name}</Text>
                                                            <Text style={{ marginLeft: 5, marginBottom: 10, color: 'rgb(123, 122, 118)' }}>{item.address}</Text>
                                                            <Text style={{ marginLeft: 5, marginBottom: 10, color: 'rgb(15, 113, 184)', fontSize: 15 }}>Open</Text>
                                                            <Text style={{ marginLeft: 5, marginBottom: 10, fontSize: 17 }}>{item.Houres}</Text>
                                                      </View>

                                                      <TouchableOpacity style={styles.loginbutton} onPress={() => this.distanceButtonTapped(item, index)}>

                                                            <View style={{ flex: 1, backgroundColor: 'rgb(255, 255, 255)', flexDirection: 'row', justifyContent: 'center' }}>
                                                                  <Text style={{ color: 'black', fontSize: 15, alignSelf: 'center' }}> {item.Distance} </Text>
                                                                  
                                                            </View>

                                                      </TouchableOpacity>


                                                </View>
                                                <View style={{ backgroundColor: 'gray', height: 1, marginTop: 5, marginLeft: 0, marginRight: 0, marginBottom: 10 }} />
                                                <Text style={{ color: 'black', fontSize: 15, marginTop: 10, marginLeft: 16, marginRight: 16 }}> Available Stores </Text>

                                                <View style={{ flexDirection: 'row', height: 40, borderRadius: 5, marginLeft: 16, marginRight: 16, marginTop: 10, justifyContent: 'center', borderColor: 'gray', borderWidth: 1, backgroundColor: 'rgb(255, 255, 255)' }}>
                                                      <View style={{ flex: 1, borderTopLeftRadius: 5, borderBottomLeftRadius: 5, justifyContent: 'center', alignItems: 'center' }}>
                                                      </View>
                                                      <View style={{ backgroundColor: 'gray', width: 1, height: 30, marginTop: 5 }} />
                                                      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                                                      </View>
                                                      <View style={{ backgroundColor: 'gray', width: 1, height: 30, marginTop: 5 }} />
                                                      <View style={{ flex: 1, borderTopRightRadius: 5, borderBottomRightRadius: 5, justifyContent: 'center', alignItems: 'center' }}>
                                                      </View>
                                                </View>

                                                <View style={{ backgroundColor: 'gray', height: 1, marginTop: 10, marginLeft: 0, marginRight: 0, marginBottom: 10 }} />

                                                <View style={{ flexDirection: 'row', height: 30, marginLeft: 16, marginRight: 16 ,marginBottom:20}}>

                                                      <View style={{flex:1,height: 30,justifyContent:'center' }}>
                                                            <Text style={{ color: 'black', alignSelf:'flex-start',fontSize: 15 }}> Opening Hours </Text>
                                                      </View>

                                                      <View style={{flex:1,  height: 30,justifyContent:'center' }}>
                                                            <Image style={{ width: 20,alignSelf: 'flex-end', height: 20 }} />
                                                      </View>
                                                </View>

                                                 <View style={{ flexDirection: 'row', height: 30, padding:16 }}>
                                                 <View style={{flex:1,height: 30,justifyContent:'center' }}>
                                                            <Text style={{ color: 'black', alignSelf:'flex-start',fontSize: 15,marginTop:5,marginBottom:5 }}>Mon, Oct 08</Text>
                                                            <Text style={{ color: 'black', alignSelf:'flex-start',fontSize: 15,marginTop:5,marginBottom:5 }}>Mon, Oct 09  </Text>
                                                            <Text style={{ color: 'black', alignSelf:'flex-start',fontSize: 15,marginTop:5,marginBottom:5 }}>Mon, Oct 10  </Text>
                                                      </View>

                                                      <View style={{flex:1,height: 30,justifyContent:'center' }}>
                                                            <Text style={{ color: 'black', alignSelf:'flex-end',fontSize: 15,marginTop:5,marginBottom:5 }}> 7:00 AM to 11:00 PM </Text>
                                                            <Text style={{ color: 'black', alignSelf:'flex-end',fontSize: 15,marginTop:5,marginBottom:5 }}> 7:00 AM to 11:00 PM </Text>
                                                            <Text style={{ color: 'black', alignSelf:'flex-end',fontSize: 15,marginTop:5,marginBottom:5 }}> 7:00 AM to 11:00 PM </Text>
                                                      </View>
                                                 </View>


                                          </View>
                                    }
                              />
                        </View>

                  </View>


            );
      }
}

export default StoreLocator;
