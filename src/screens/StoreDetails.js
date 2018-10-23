/**
* @author Arun Kukkudapu <kukkudapu.arun@photoninfotech.net>
* @version 1.0.0
* @summary Its a details screen show the details of selected store
*/
import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, View, Dimensions, TouchableOpacity, FlatList, Alert, Image, Platform,Linking } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';

import { Toolbar } from "../components";
import { navigateBack, navigateTo } from "../helpers";

import styles from './../styles';

const { width, height } = Dimensions.get('window');

const aspectRatio = width / height
const LATITUDE_DELTA = 0.0922
const LONGITUDE_DELTA = LATITUDE_DELTA * aspectRatio

/**
* Represents Component.
* @class StoreLocator
* @extends Component
*/
class StoreDetails extends Component {
      constructor(props) {
            super(props);
            this.state = {
                  lat: 12.9428,
                  lng: 77.6966,
                  markercoords: {
                        latitude: 12.951902,
                        longitude: 77.698961
                  },
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
      /**
       * distanceButtonTapped function is invoked when user press on distance button and this will open external maps app with respect to there platform
       */
      distanceButtonTapped = () => {
            const scheme = Platform.select({ ios: 'maps:0,0?q=', android: 'geo:0,0?q=' });
            const latLng = `${this.state.markercoords.latitude},${this.state.markercoords.longitude}`;
            const label = 'Custom Label';
            const url = Platform.select({
              ios: `${scheme}${label}@${latLng}`,
              android: `${scheme}${latLng}(${label}`});
            Linking.openURL(url);
            var dataList = [...this.state.stationdata]
            Alert.alert('Distance Button Tapped');
            console.log('data after:: ', this.state.stationdata);
      }

      /**
            * @function render
            * React render method for rendering the native elements
      */

      render() {
            return (
                  <View style={styles.mapContainer}>
                       <Toolbar
                           style={styles.noBorderToolbar}
                           onClickLeftIcon={navigateBack}
                           iconName="back-arrow"
                           title="Station Details" />
                        <View style={{flex:3 }}>
                              <MapView style={{ width: Dimensions.get('window').width, height: Dimensions.get('window').height/2, left: 0, right: 0, top: 0, bottom: 0, position: 'absolute' }}
                                    provider={PROVIDER_GOOGLE}
                                    showsUserLocation={true}
                                    showsMyLocationButton={true}
                                    region={{
                                          latitude: this.state.lat,
                                          longitude: this.state.lng,
                                          latitudeDelta: 0.0900,
                                          longitudeDelta: 0.0500,
                                    }}>
                                    {/**
                                          Marker is to show a location with a marker.
                                    */}
                                    <MapView.Marker
                                          coordinate={{ latitude: this.state.markercoords.latitude, longitude: this.state.markercoords.longitude }} title={this.state.address}
                                          description={this.state.address}
                                    >
                                     <Image style={{width: 20, height: 30,alignSelf:'center'}} source={require('../assets/images/rectangle.png')} />
                                    </MapView.Marker>
                              </MapView>
                              <View style={{position:"absolute", bottom: -25, right: 16, zIndex: 1}}>
                                  <TouchableOpacity onPress={this.distanceButtonTapped}>
                                        <Image style={{width: 50, height: 50}} source={require('../assets/images/ic_directions.png')} />
                                  </TouchableOpacity>
                              </View>
                        </View>
                        <View style={{ width: Dimensions.get('window').width, height: Dimensions.get('window').height/2}}>
                         {/**
                               This List is dispalyed when user select any of the store from list
                        */}
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




                                                            <View style={{ flex: 1, backgroundColor: 'rgb(255, 255, 255)', flexDirection: 'row', justifyContent: 'center' }}>
                                                                  <Text style={{ color: 'black', fontSize: 15, alignSelf: 'center' }}> {item.Distance}</Text>
                                                            </View>




                                                </View>
                                                <View style={{ backgroundColor: 'gray', height: 1, marginTop: 5, marginLeft: 0, marginRight: 0, marginBottom: 10 }} />
                                                <Text style={{ color: 'black', fontSize: 15, marginTop: 10, marginLeft: 16, marginRight: 16 }}> Available Stores </Text>

                                                <View style={{ flexDirection: 'row', height: 40, borderRadius: 5, marginLeft: 16, marginRight: 16, marginTop: 10, justifyContent: 'center', borderColor: 'gray', borderWidth: 1, backgroundColor: 'rgb(255, 255, 255)' }}>
                                                      <View style={{ flex: 1, borderTopLeftRadius: 5, borderBottomLeftRadius: 5, justifyContent: 'center', alignItems: 'center' }}>
                                                      <Image source={require('../assets/images/Logo_1.png')}     />
                                                      </View>
                                                      <View style={{ backgroundColor: 'gray', width: 1, height: 30, marginTop: 5 }} />
                                                      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                                                      <Image source={require('../assets/images/Logo_2.png')}     />
                                                      </View>
                                                      <View style={{ backgroundColor: 'gray', width: 1, height: 30, marginTop: 5 }} />
                                                      <View style={{ flex: 1, borderTopRightRadius: 5, borderBottomRightRadius: 5, justifyContent: 'center', alignItems: 'center' }}>
                                                      <Image source={require('../assets/images/Logo_3.png')}     />
                                                      </View>
                                                </View>

                                                <View style={{ backgroundColor: 'gray', height: 1, marginTop: 10, marginLeft: 0, marginRight: 0, marginBottom: 10 }} />

                                                <View style={{ flexDirection: 'row', height: 30, marginLeft: 16, marginRight: 16 }}>

                                                      <View style={{flex:1,height: 30,justifyContent:'center' }}>
                                                            <Text style={{ color: 'black', alignSelf:'flex-start',fontSize: 15 }}> Opening Hours </Text>
                                                      </View>

                                                      <View style={{flex:1,  height: 30,justifyContent:'center'}}>
                                                            <Image style={{ width: 20,alignSelf: 'flex-end', height: 20 }} />
                                                      </View>
                                                </View>
                                                 <View style={{ flexDirection: 'row', padding:16 }}>
                                                 <View style={{flex:1,justifyContent:'center' }}>
                                                            <Text style={{ color: 'black', alignSelf:'flex-start',fontSize: 15,marginTop:5,marginBottom:5 }}>Mon, Oct 08</Text>
                                                            <Text style={{ color: 'black', alignSelf:'flex-start',fontSize: 15,marginTop:5,marginBottom:5 }}>Mon, Oct 09  </Text>
                                                            <Text style={{ color: 'black', alignSelf:'flex-start',fontSize: 15,marginTop:5,marginBottom:5 }}>Mon, Oct 10  </Text>
                                                            <Text style={{ color: 'black', alignSelf:'flex-start',fontSize: 15,marginTop:5,marginBottom:5 }}>Mon, Oct 08</Text>
                                                            <Text style={{ color: 'black', alignSelf:'flex-start',fontSize: 15,marginTop:5,marginBottom:5 }}>Mon, Oct 09  </Text>
                                                            <Text style={{ color: 'black', alignSelf:'flex-start',fontSize: 15,marginTop:5,marginBottom:5 }}>Mon, Oct 10  </Text>
                                                      </View>

                                                      <View style={{flex:1,justifyContent:'center' }}>
                                                            <Text style={{ color: 'black', alignSelf:'flex-end',fontSize: 15,marginTop:5,marginBottom:5 }}> 7:00 AM to 11:00 PM </Text>
                                                            <Text style={{ color: 'black', alignSelf:'flex-end',fontSize: 15,marginTop:5,marginBottom:5 }}> 7:00 AM to 11:00 PM </Text>
                                                            <Text style={{ color: 'black', alignSelf:'flex-end',fontSize: 15,marginTop:5,marginBottom:5 }}> 7:00 AM to 11:00 PM </Text>
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

export default StoreDetails;
