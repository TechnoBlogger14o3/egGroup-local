import { connect } from 'react-redux';
import React, { Component } from 'react';
import { View, Text, TouchableOpacity, SafeAreaView, FlatList, Image, ScrollView, ImageBackground } from 'react-native';
import { Icon } from "react-native-elements";

import { InputText, Button, Toolbar } from "../components";
import { navigateBack, navigateTo } from "../helpers";
import LinearGradient from 'react-native-linear-gradient';

import styles from '../styles';
import Swiper from "react-native-swiper";

class Home extends Component {

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
                }

            ],
            iconName: 'search',
            textInputValue: ''
        }
    }


    render() {
        return (

            <ScrollView>
                <SafeAreaView style={{ flex: 1, backgroundColor: "#333333" }}>
                    <View style={{ flex: 3, flexDirection: 'row', margin: 30 }}>
                        <View style={{ flex: 1, alignItems: 'flex-start',marginTop:5 }}>
                            <Image style={{ width: 28, height: 25, alignItems: "center", }} source={require('../assets/images/home-logo.png')} />
                        </View>
                        <View style={{ flex: 1, alignItems: 'center', justifyContent: "center" }}>
                            <Text style={{ color: '#ffffff', fontSize: 20, fontWeight: 'bold' }}>HI John!</Text>
                        </View>
                        <View style={{ flex: 1, alignItems: 'flex-end', marginTop:5  }}>
                            <Image style={{ width: 21, height: 23, alignItems: "center" }} source={require('../assets/images/Bell-icon.png')} />
                        </View>
                    </View>


                    <View style={{ flex: 1,}}>
                        <LinearGradient colors={["#487f4a", "#29635d"]} style={{ flexDirection: "row", alignItems: "center", height: 150 }}>
                            <ScrollView horizontal={true}>
                                <View style={{ backgroundColor: "#ffffff", justifyContent: "center", alignItems: "center",  borderRadius:50, height: 100, width: 100, marginLeft: 10 }}>
                                    <Image style={{ height: 100, width: 100 }} source={require("../assets/images/StarBucks.png")} />
                                </View>
                                <View style={{ backgroundColor: "#ffffff", justifyContent: "center", alignItems: "center", borderRadius: 50, height: 100, width: 100, marginLeft: 10 }}>
                                    <Image style={{ height: 100, width: 100 }} source={require("../assets/images/BurgerKing.png")} />
                                </View>
                                <View style={{ backgroundColor: "#ffffff", justifyContent: "center", alignItems: "center", borderRadius: 50, height: 100, width: 100, marginLeft: 10 }}>
                                    <Image style={{ height: 100, width: 100 }} source={require("../assets/images/KFC.png")} />
                                </View>
                                <View style={{ backgroundColor: "#ffffff", justifyContent: "center", alignItems: "center", borderRadius: 50, height: 100, width: 100, marginLeft: 10 }}>
                                    <Image source={require("../assets/images/Subway.png")} />
                                </View>
                                <View style={{ backgroundColor: "#ffffff", justifyContent: "center", alignItems: "center", borderRadius: 50, height: 100, width: 100, marginLeft: 10 }}>
                                    <Image style={{ height: 100, width: 100 }} source={require("../assets/images/StarBucks.png")} />
                                </View>
                                <View style={{ backgroundColor: "#ffffff", justifyContent: "center", alignItems: "center", borderRadius: 50, height: 100, width: 100, marginLeft: 10 }}>
                                    <Image style={{ height: 100, width: 100 }} source={require("../assets/images/BurgerKing.png")} />
                                </View>
                                <View style={{ backgroundColor: "#ffffff", justifyContent: "center", alignItems: "center", borderRadius: 50, height: 100, width: 100, marginLeft: 10 }}>
                                    <Image style={{ height: 100, width: 100 }} source={require("../assets/images/KFC.png")} />
                                </View>
                                <View style={{ backgroundColor: "#ffffff", justifyContent: "center", alignItems: "center", borderRadius: 50, height: 100, width: 100, marginLeft: 10 }}>
                                    <Image source={require("../assets/images/Subway.png")} />
                                </View>
                            </ScrollView>
                        </LinearGradient>
         </View>



                    <View style={{ flex: 3, }}>
                        <Text
                            style={{
                                color: "#ffffff",
                                fontWeight: "bold",
                                fontSize: 20,
                                paddingLeft: 16,
                                marginTop: 20,
                                marginBottom: 20

                            }}
                        >
                            Vouchers
                    </Text>
                        <View style={{ flex: 2, flexDirection: 'row', }}>
                            <View style={{ flex: 1, flexDirection: 'column', paddingLeft: 16 }}>
                                <View style={{ borderWidth: 3, borderColor: '#333333', }}>
                                    <ImageBackground style={{ height: 150, width: 175, borderRadius: 9, }} source={require("../assets/images/Burger.png")} >
                                        <View style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', marginTop: 110 }}>
                                            <Text style={{ color: '#ffffff', fontWeight: 'bold' }}> Turkey Artisan </Text>
                                            <Text style={{ color: '#ffffff', }}> Buy this and get &euro;2 off </Text>
                                        </View>
                                    </ImageBackground>
                                </View>
                                <View style={{ marginTop: 3, borderWidth: 3, borderColor: '#333333' }} >
                                    <ImageBackground style={{ height: 250, width: 175, borderRadius: 9, }} source={require("../assets/images/KFC-Chessa.png")} >
                                    <View style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', marginTop: 210 }}>
                                            <Text style={{ color: '#ffffff', fontWeight: 'bold' }}> KFC Chizza </Text>
                                            <Text style={{ color: '#ffffff', }}> Buy this and get &euro;2 off </Text>
                                        </View>
                                        </ImageBackground>
                                </View>
                            </View>
                            <View style={{ flex: 1, flexDirection: 'column', paddingRight: 16 }}>
                                <View style={{ borderWidth: 3, borderColor: '#333333', }}>
                                    <ImageBackground style={{ height: 250, width: 175, borderRadius: 9, }} source={require("../assets/images/FamilyBundle.png")} >
                                    <View style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', marginTop: 210 }}>
                                            <Text style={{ color: '#ffffff', fontWeight: 'bold' }}> Family Bundle </Text>
                                            <Text style={{ color: '#ffffff', }}> Buy this and get &euro;2 off </Text>
                                        </View>
                                    </ImageBackground>
                                </View>
                                <View style={{ marginTop: 3, borderWidth: 3, borderColor: '#333333' }}>
                                    <ImageBackground style={{ height: 150, width: 175, borderRadius: 9, }} source={require("../assets/images/StarBucks-coffee.png")} >
                                    <View style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', marginTop: 110 }}>
                                            <Text style={{ color: '#ffffff', fontWeight: 'bold' }}> Coffee </Text>
                                            <Text style={{ color: '#ffffff', }}> Buy this and get &euro;1 off </Text>
                                        </View>
                                      </ImageBackground>
                                </View>
                            </View>
                        </View>


                        <View style={{ flex: 1, flexDirection: "row", marginTop: 15 }}>
                            <View style={{ paddingLeft: 16, paddingRight: 16, borderWidth: 3, borderColor: '#333333' }}>
                                <ImageBackground style={{ height: 170, width: 370, borderRadius: 9, }} source={require("../assets/images/SweetChillyCrunch.png")} >
                                <View style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', marginTop: 130 }}>
                                            <Text style={{ color: '#ffffff', fontWeight: 'bold' }}> Sweet Chilly Crunch </Text>
                                            <Text style={{ color: '#ffffff', }}> Buy this and get &euro;1 off </Text>
                                        </View>
                                </ImageBackground>
                            </View>

                        </View>
                        <View style={{ alignItems: 'flex-end' }}>
                        <TouchableOpacity style={styles.loginbutton} onPress={() => navigateTo("vouchers")}>
                                        <View style={{ flex: 1, flexDirection: "row", justifyContent: "center" }}>
                                        <Text
                                style={{
                                    color: "#ffffff",
                                    fontSize: 17,
                                    paddingRight: 20,
                                    marginBottom: 10,
                                }}
                            >
                                View All (20)
                               </Text>
                                          
                                        </View>
                                </TouchableOpacity>
                        </View>



                    </View>

                    <View style={{ flex: 1 }}>
                        <Text
                            style={{
                                color: "#ffffff",
                                fontWeight: "bold",
                                fontSize: 20,
                                paddingLeft: 16,
                                marginBottom: 10

                            }}
                        >
                            Prefered Stations
                    </Text>

                        <View>
                            <FlatList data={this.state.stationdata} keyExtractor={(item, index) => index.toString()} ref={ref => {
                                this.flatListRef = ref;
                            }} ItemSeparatorComponent={() => <View style={{ marginLeft: 0, marginRight: 0, height: 10 }} />} renderItem={({ item, index }) => <View style={{ flex: 1, paddingLeft: 16, paddingRight: 16, height: 100 }}>
                                <View style={{ flex: 1, flexDirection: "row", paddingTop: 10, borderRadius: 5, borderWidth: 3, borderColor: "#ffffff", paddingBottom: 20, paddingLeft: 16, paddingRight: 16, backgroundColor: "rgb(255, 255, 255)" }}>
                                    <View style={{ flex: 2.8, justifyContent: "center", backgroundColor: "rgb(255, 255, 255)" }}>
                                        <Text
                                            style={{
                                                marginLeft: 5,
                                                fontSize: 17,
                                                fontWeight: "bold"
                                            }}
                                        >
                                            {item.name}
                                        </Text>
                                        <Text
                                            style={{
                                                marginLeft: 5,
                                                color: "rgb(123, 122, 118)"
                                            }}>
                                            {item.address}
                                        </Text>
                                        <Text
                                            style={{
                                                marginLeft: 5,
                                                color: "rgb(15, 113, 184)",
                                                fontSize: 15
                                            }}>
                                            Open
                                        </Text>
                                        <Text
                                            style={{
                                                marginLeft: 5,
                                                fontSize: 17,
                                                fontWeight: "bold"
                                            }}>
                                            {item.Houres}
                                        </Text>
                                    </View>
                                    <TouchableOpacity style={styles.loginbutton} onPress={() => navigateTo("storeDetails")}>
                                        <View style={{ flex: 1, backgroundColor: "rgb(255, 255, 255)", flexDirection: "row", justifyContent: "center" }}>
                                            <Text
                                                style={{
                                                    color: "black",
                                                    fontSize: 15,
                                                    alignSelf: "center"
                                                }}>
                                                {" "}
                                                {item.Distance}{" "}
                                            </Text>
                                            <Image style={{ width: 15, height: 15, alignSelf: "center" }} source={require("../assets/images/Arrow.png")} />
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            </View>} />
                        </View>
                    </View>
                </SafeAreaView>
            </ScrollView>
        );
    }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
