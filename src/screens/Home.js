/**
* @author Vineet Mishra <vineet.m@photoninfotech.net>
* @version 1.0.0
* @summary Home Screen, after you successfully Logged in
*/

// import - npm modules
import { connect } from 'react-redux';
import React, { Component } from 'react';
import { View, Text, TouchableOpacity, SafeAreaView, StyleSheet, FlatList, Image, ScrollView, ImageBackground } from 'react-native';
import { Icon } from "react-native-elements";
import Swiper from "react-native-swiper";
import LinearGradient from 'react-native-linear-gradient';

// import custom classes
import { InputText, Button, Toolbar } from "../components";
import { navigateBack, navigateTo } from "../helpers";

// import - Styles
import Styles from '../styles/screenStyles';


/**
* Represents Home Sreen.
* @class Home
* @extends Component
*/

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


    /**
    * @function render
    * React render method for rendering the native elements
    */
    	
    render() {
        return (

            <ScrollView>
                <SafeAreaView style={Styles.homeContainer}>

                    {/* // BEGIN : Below  View is for the header Component in Home screen  */}
                    <View style={Styles.homeHeader}>
                        <View style={Styles.homeHeaderHomeLogo}>
                            <Image style={Styles.homeImageHomeLogo} source={require('../assets/images/home-logo.png')} />
                        </View>
                        <View style={Styles.homeHeaderText}>
                            <Text style={Styles.homeHeaderTextFont}>HI John!</Text>
                        </View>
                        <View style={Styles.homeHeaderBellicon}>
                            <Image style={Styles.homeImageBellicon} source={require('../assets/images/Bell-icon.png')} />
                        </View>
                    </View>
                    {/* // END : Above  View is for the header Component in Home screen      */}


                    <View style={ Styles.brandView }>

                        {/* // BEGIN : Below view is for showing the List of Brands having vouchers in courosel  */}
                        <LinearGradient colors={["#487f4a", "#29635d"]} style={Styles.linearGradient}>
                            <ScrollView horizontal={true}>
                                <View style={Styles.starBucks}>
                                    <Image style={Styles.imageStarBucks} source={require("../assets/images/StarBucks.png")} />
                                </View>
                                <View style={Styles.burgerKing}>
                                    <Image style={Styles.imageBurgerKing} source={require("../assets/images/BurgerKing.png")} />
                                </View>
                                <View style={Styles.kfc}>
                                    <Image style={Styles.imageKFC} source={require("../assets/images/KFC.png")} />
                                </View>
                                <View style={Styles.subway}>
                                    <Image source={require("../assets/images/Subway.png")} />
                                </View>
                                <View style={Styles.starBucks}>
                                    <Image style={Styles.imageStarBucks} source={require("../assets/images/StarBucks.png")} />
                                </View>
                                <View style={Styles.burgerKing}>
                                    <Image style={Styles.imageBurgerKing} source={require("../assets/images/BurgerKing.png")} />
                                </View>
                                <View style={Styles.kfc}>
                                    <Image style={Styles.imageKFC} source={require("../assets/images/KFC.png")} />
                                </View>
                                <View style={Styles.subway}>
                                    <Image source={require("../assets/images/Subway.png")} />
                                </View>
                            </ScrollView>
                        </LinearGradient>
                        {/* // END : Above view is for showing the List of Brands having vouchers in courosel */}
                    </View>



                    <View style={Styles.voucherViewImage}>
                        <Text style={Styles.voucherText}> Vouchers </Text>
                        <View style={Styles.voucherImage}>

                            {/* // BEGIN : Below view is for showing the Vouchers images in column direction  */}
                            <View style={Styles.voucherImageColumnBurger}>
                                <View style={Styles.voucherImageTurkey}>
                                    <ImageBackground style={Styles.voucherBurgerBackground} source={require("../assets/images/Burger.png")} >
                                        <View style={Styles.voucherViewBurger}>
                                            <Text style={Styles.vocherImageKText}> Turkey Artisan </Text>
                                            <Text style={Styles.voucherImageEuro}> Buy this and get &euro;2 off </Text>
                                        </View>
                                    </ImageBackground>
                                </View>
                                <View style={Styles.voucherImageKfc} >
                                    <ImageBackground style={Styles.voucherKfcBackground} source={require("../assets/images/KFC-Chessa.png")} >
                                        <View style={Styles.voucherViewKfc}>
                                            <Text style={Styles.vocherImageKText}> KFC Chizza </Text>
                                            <Text style={Styles.voucherImageEuro}> Buy this and get &euro;2 off </Text>
                                        </View>
                                    </ImageBackground>
                                </View>
                            </View>

                            {/* END : Above view is for showing the Vouchers images in column direction */}

                            {/* // BEGIN : Below view is for showing the Vouchers images in column direction  */}
                            <View style={Styles.voucherImageColumnFamily}>
                                <View style={Styles.voucherImageFamily}>
                                    <ImageBackground style={Styles.voucherFamilyBackground} source={require("../assets/images/FamilyBundle.png")} >
                                        <View style={Styles.voucherViewFamily}>
                                            <Text style={Styles.vocherImageFamilyText}> Family Bundle </Text>
                                            <Text style={Styles.voucherImageEuro}> Buy this and get &euro;2 off </Text>
                                        </View>
                                    </ImageBackground>
                                </View>
                                <View style={Styles.voucherImageColumnStarBucks}>
                                    <ImageBackground style={Styles.voucherStarBucksBackground} source={require("../assets/images/StarBucks-coffee.png")} >
                                        <View style={Styles.voucherViewStarBucks}>
                                            <Text style={Styles.vocherImageKText}> Coffee </Text>
                                            <Text style={Styles.voucherImageEuro}> Buy this and get &euro;1 off </Text>
                                        </View>
                                    </ImageBackground>
                                </View>
                            </View>
                            {/* END : Above view is for showing the Vouchers images in column direction */}
                        </View>

                        {/* // BEGIN : Below view is for showing the Vouchers images in row direction  */}
                        <View style={Styles.voucherImageRowSweet }>
                            <View style={Styles.voucherImageColorSweet }>
                                <ImageBackground style={Styles.voucherSweetBackground} source={require("../assets/images/SweetChillyCrunch.png")} >
                                    <View style={Styles.voucherViewSweet}>
                                        <Text style={Styles.vocherImageKText}> Sweet Chilly Crunch </Text>
                                        <Text style={Styles.voucherImageEuro}> Buy this and get &euro;1 off </Text>
                                    </View>
                                </ImageBackground>
                            </View>
                        </View>
                        {/* END : Above view is for showing the Vouchers images in row direction */}

                        {/* // BEGIN : On tap of the View all link, user will be navigated to vouchers list screen. */}
                        <View style={Styles.voucherTextEnd}>
                            <TouchableOpacity style={Styles.loginbutton} onPress={() => navigateTo("vouchers")}>
                                <View style={Styles.voucherViewText}>
                                    <Text style={Styles.voucherText}>View All (20)</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                        {/* // END : On tap of the View all link, user will be navigated to vouchers list screen. */}
                    </View>

                    <View style={Styles.prefered}>
                        <Text style={Styles.preferedText}>Prefered Stations</Text>
                        <View>

                            {/* BEGIN : Below view is for the station name, address, open or close status and distance of the station in the station card. */}

                            <FlatList
                                data={this.state.stationdata}
                                keyExtractor={(item, index) => index.toString()} ref={ref => {
                                    this.flatListRef = ref;
                                }} ItemSeparatorComponent={() => <View style={Styles.itemSeperator} />}
                                renderItem={({ item, index }) => <View style={Styles.renderItem}>
                                    <View style={Styles.preferedView}>
                                        <View style={Styles.preferedTextName}>
                                            <Text style={Styles.preferedTextItemName}>
                                                {item.name}
                                            </Text>
                                            <Text style={Styles.preferedTextItemAddress}>
                                                {item.address}
                                            </Text>
                                            <Text style={Styles.preferedTextOpen}>
                                                Open
                                                        </Text>
                                            <Text style={Styles.preferedTextItemHoures}>
                                                {item.Houres}
                                            </Text>
                                        </View>
                                        {/* END : Above view is for the station name, address, open or close status and distance of the station in the station card. */}

                                        {/* BEGIN : On tap of the card, user will be navigated to the station detail screen. */}
                                        <TouchableOpacity style={Styles.loginbutton} onPress={() => navigateTo("storeDetails")}>
                                            <View style={Styles.touchView}>
                                                <Text style={Styles.touchText}>
                                                    {" "}
                                                    {item.Distance}{" "}
                                                </Text>
                                                <Image style={Styles.touchImage} source={require("../assets/images/Arrow.png")} />
                                            </View>
                                        </TouchableOpacity>
                                        {/* END : On tap of the card, user will be navigated to the station detail screen. */}
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
