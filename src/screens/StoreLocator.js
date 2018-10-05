import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, View, Dimensions, TouchableOpacity,FlatList,Alert, Platform, Image } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import { SearchBar, Icon } from 'react-native-elements';

import StoreList from './StoreList';
import { Toolbar } from "../components";
import { navigateBack, navigateTo } from "../helpers";

import styles from './../styles'

const { width, height } = Dimensions.get('window');

const aspectRatio = width / height;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * aspectRatio;

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
                              "Distance": "0.16 km"
                        },
                        {
                              "name": "SHELL",
                              "address": "Ambachtsweg 50, Netherlands",
                              "Houres": "Today's Hours: 11 AM TO 4 PM",
                              "Distance": "2.00 km"
                        },
                        {
                              "name": "ESSO",
                              "address": "Marnixstraat 250, 1016 TL Amsterdam",
                              "Houres": "Today's Hours: 11 AM TO 4 PM",
                              "Distance": "0.16 km"
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
      searchStore = (text) => {
            let searchedStore = text;
            this.setState({ textInputValue: text });

            if (text.length > 0) {
                var sampleData = [{
                        name: "JP Morghan",
                        address: "multiplex marathahalli, marathahalli village, marathahalli, bengaluru, karnataka 560037, india",
                        stateName:"Karnataka",
                        city:"Bengalore",
                        zipCode:"683248",
                        coordinates: {
                              latitude: 12.9428,
                              longitude: 77.6966
                        },
                  },
                  {
                        name: "Innovative Multiplex",
                        address: "multiplex marathahalli, marathahalli village, marathahalli, bengaluru, karnataka 560037, india",
                        stateName:"Karnataka",
                        city:"Bengalore",
                        zipCode:"683248",
                        coordinates: {
                              latitude: 12.9516,
                              longitude: 77.6996
                        },
                  }];
                  var farray = sampleData.filter((item) => {
                        return item.zipCode.startsWith(searchedStore) || item.city.startsWith(searchedStore) || item.stateName.startsWith(searchedStore);
                  })
                  this.setState({ data: farray });
            }
            else {
                  this.setState({ data: [] });
            }
      }
      selectedStore = (coordinates, name) => {
            this.setState({ lat: coordinates.latitude, lng: coordinates.longitude, data: [], textInputValue: name })
      }

      getTypedIcon = name => {
          return Platform.OS === "ios" ? `ios-${name}` : `${name}`;
        };

      render() {
            return (
                  <View style={styles.mapContainer}>
                      <Toolbar style={styles.noBorderToolbar} openDrawer={this.openDrawer}>
                            <Icon
                               name={this.getTypedIcon('arrow-left')}
                               size={24}
                               type="material-community"
                               onPress={navigateBack}
                               iconStyle={styles.leftIconContainer}
                           />
                           <View style={styles.toolbarUtils}>
                               <Text style={styles.appTitle}>Settings</Text>
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
                                    }}>
                                    <MapView.Marker
                                          coordinate={{ latitude: this.state.lat, longitude: this.state.lng }} title={this.state.address}
                                          description={this.state.address}
                                    />
                              </MapView>

                              <View style={styles.inputView}>

                                    <SearchBar lightTheme placeholder='Search' inputStyle={{ backgroundColor: 'rgb(250,250,250)' }}
                                          containerStyle={{ backgroundColor: 'rgb(250,250,250)' }}
                                          icon={{ type: 'font-awesome', color: 'gray', name: this.state.iconName }}
                                          onFocus={() => this.setState({ iconName: 'arrow-left' })}
                                          onBlur={() => this.setState({ iconName: 'search' })}
                                          value={this.state.textInputValue}
                                          clearIcon={{ color: 'gray' }} onChangeText={this.searchStore} />

                                    <StoreList data={this.state.data} selectedStore={this.selectedStore} />
                              </View>

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

                                                            <View style={{ flexDirection: 'row', width: 180, height: 30, borderRadius: 5, justifyContent: 'center', borderColor: 'gray', borderWidth: 1, backgroundColor: 'rgb(255, 255, 255)' }}>
                                                                  <View style={{ width: 60, borderTopLeftRadius: 5, borderBottomLeftRadius: 5, justifyContent: 'center', alignItems: 'center' }}>
                                                                  </View>
                                                                  <View style={{ backgroundColor: 'gray', width: 1, height: 20, marginTop: 5 }} />
                                                                  <View style={{ width: 60, justifyContent: 'center', alignItems: 'center' }}>
                                                                  </View>
                                                                  <View style={{ backgroundColor: 'gray', width: 1, height: 20, marginTop: 5 }} />
                                                                  <View style={{ width: 60, borderTopRightRadius: 5, borderBottomRightRadius: 5, justifyContent: 'center', alignItems: 'center' }}>
                                                                  </View>
                                                            </View>

                                                      </View>
                                                      <TouchableOpacity style={styles.loginbutton} onPress={() => navigateTo("storeDetails")}>

                                                      <View style={{ flex: 1, backgroundColor: 'rgb(255, 255, 255)', flexDirection: 'row', justifyContent: 'center' }}>
                                                      <Text style={{ color: 'black', fontSize: 15, alignSelf: 'center' }}> {item.Distance} </Text>
                                                      <Image style={{width: 15, height: 15,alignSelf:'center'}} source={require('../assets/images/Arrow.png')} />
                                                      </View>
                                                      </TouchableOpacity>


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
