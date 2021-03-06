import { StyleSheet, Platform,Dimensions } from 'react-native';

let deviceWidth = Dimensions.get('window').width

const styles = StyleSheet.create({

    appContainer: {
        flex: 1
    },

    whiteBackground: {
        backgroundColor: "#ffffff"
    },

    appTitle: {
        fontSize: 18,
        color: "#000000",
        textAlign: Platform.OS === "ios" ? "center" : "left",

    },

    noBorderToolbar: {
        elevation: 0,
        marginVertical: Platform.OS === "ios" ? 16 : 0
    },
    mainView: {
        flex: 1,
        padding: 70,
        alignItems: 'center',
        justifyContent:'center',
    },
    loyalabilityplusDesign: {
        color: "rgb(15, 113, 184)",
        fontSize: 100,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    loyalabilityText: {
        color: 'black',
        fontSize: 16,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
        paddingRight: 20,
        paddingLeft:20,
        marginTop:1,
    },
    errorText: {
        color:'red',
        paddingHorizontal :16
    },
    CouponmodalView: {
        backgroundColor: 'white',
        margin: 10,
        flex: 1,
        borderRadius: 5,
    },
    CouponImageStyle: {
        height: 150,
        resizeMode: 'contain',
		borderTopStartRadius: 5,
        borderTopEndRadius: 5,
        overflow: 'hidden'
    },
    CouponIconStyle: {
        flex: 1,
        flexDirection: 'row-reverse',
        alignSelf: 'flex-end',
        position: "absolute",
        right: 3,
        top: 3
    },
    CouponOffText: {
        fontSize: 35,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#000',
        marginTop: 15
    },
    CouponCodeText: {
        color: 'rgb(15,113,184)',
        textAlign: "center",
        fontSize: 14,
        marginTop: 20
    },
    CoupnSubwayText: {
        // backgroundColor: 'rgb(150,196,28)',
        justifyContent: 'center',
        alignSelf: 'center',
        width: 140,
        padding: 12,
        marginTop: 10
    },
    CouponSubwayTextColor: {
        color: 'white',
        textAlign: 'center'
    },
    CouponBarcodeImage: {
        width: 230,
        height: 50,
        justifyContent: 'center',
        alignSelf: 'center',
        marginTop: 15
    },
    CouponSpace: {
        marginLeft: 20,
        marginTop: 15
    },
    CouponTermsText: {
        color: 'rgb(15,113,184)',
        fontSize: 16
    },
    CouponTextColor: {
        color: '#000',
    },
    CouponValidityText: {
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        marginTop: 20,
        marginBottom:20
    },
    CouponValidTextDesign: {
        borderWidth: 2,
        padding: 5,
        textAlign: 'center',
        borderStyle: 'dotted',
        borderRadius: 1,
        width: 200,
        borderColor: 'rgb(151,151,151)'
    },

    profilePic: {
        flex: 3,
        flexDirection:'column',
        backgroundColor: "#f5f5f5",
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom:20,
        },
        editText:{
            color:'rgb(15,113,184)'
        },
        profilePicImage:{

         height:120,
          width:120,
          borderRadius: 500/2,
          overflow: 'hidden'
        },
        profileContainer: {
            flex: 6,
          },
          submitButton: {
            marginTop: 20,
          },
          paragraphOne: {
            paddingHorizontal: 16,
            paddingTop: 16,
            fontSize: 16,
            color: "#000000",
            lineHeight: 22
        },
        toolbarUtils: {
            justifyContent: "space-between",
            flexDirection: "row",
            flex: 1,
            alignItems: "center",
            paddingRight: 8,
            justifyContent: Platform.OS === "ios" ? "center" : "flex-start"
        },
        loginFormCont: {
            justifyContent:"space-evenly",
            flex: 1
        },
        loginLogoContainer: {
            justifyContent: "center",
            flexDirection: "row"
        },
        loginHelperCont: {
            paddingHorizontal: 16,
            paddingVertical: 32,
            flexDirection: "row",
            justifyContent: "space-between"
        },
        languagePickerTitle: {
            color: "rgb(15, 113, 184)",
            fontSize:15

        },
        loginFooterTextContainer: {
            flexDirection: "row",
            justifyContent: "center",
            paddingTop: 8,
            paddingBottom: 16
        },
        fontSize16: {
            fontSize: 16
        },

        colorBlack: {
            color: "rgb(51, 51, 51)"
        },
        //newsletter
      newsLetterContainer:{
        backgroundColor:'#FFF',
        flex:1,

    },
    newsletterView:{
        flexDirection: 'row',
        borderBottomColor:'rgb(200, 199, 204)',
        borderBottomWidth:1,
        marginLeft:10,
        marginRight:10,

    },
    newsLetterTitleView:{
        flex:9,
        justifyContent:'flex-start',
        textAlign:'center',
        paddingTop:5,
        paddingBottom:5
    },
    newsLetterTitleText:{
        color:'rgb(0, 0, 0)',
        fontSize:15,
    },
    notificationRightIconView:{
        flex:1,
        justifyContent:'flex-start',
        paddingTop:5,
        paddingBottom:5,
    },
    newsLetterContentText:{
        fontSize:12,
        color:'rgb(51, 51, 51)',
        padding:10
    },
    notificationContainer:{
        backgroundColor:'#FFF',
        flex:1,
    },
    preferredStationContainer: {
        backgroundColor:'#FFF',
         flex:1,
         paddingBottom:-5,
    },
    PreferredStationTitleView:{
        flex:0.5,
        borderBottomColor:'rgb(200, 199, 204)',
        borderBottomWidth:1,
        marginTop:10,

    },
    preferredStationText:{
        color:'rgb(142, 142, 147)',
        paddingLeft:10,
        fontSize:12,

    },
    stationList:{
        flex:9.5
    },
    ListContainer:{
        flex:1,
        flexDirection: 'row',
        borderBottomColor:'rgb(200, 199, 204)',
        borderBottomWidth:1,
        marginHorizontal:16,
        paddingBottom: 10,
        paddingTop: 2
    },
    preferredStationView:{
        flex:9,
        flexDirection:'column'
    },
    stationNameText:{
        color:'rgb(51, 51, 51)',
        fontSize:15,
        paddingTop:5,
    },
    addressText:{
       fontSize:10,
       color:'rgb(123, 122, 118)'
    },
    stausText:{
        color:'rgb(15, 113, 184)',
        fontSize:12,
    },
    hourText:{
        fontSize:13,
        color:'rgb(51, 51, 51)',
        paddingTop:5,
        paddingBottom:5
    },
    distanceText:{
        fontSize:12,
        color:'rgb(51, 51, 51)',
        textAlign:'right'
    },
    statusAndDistanceView:{
        flexDirection:'row',
        flex:1
    },
    storeStatusView:{
        flex:1,
        justifyContent:'flex-start'
    },
    storeDistance:{
        flex:1,
        justifyContent:'flex-end'
    },
    rightIconView:{
        flex:1,
        justifyContent:'flex-end',
        alignItems:'flex-end',
        //marginLeft:-10,
        //backgroundColor:'red',
        paddingTop:5,
        paddingBottom:5
    },
    settingIcons:{
        width:25,
        height:25,
    },
    // Privacy Policy
    PrivacytContainer:{
        backgroundColor:'#FFF',
        flex:1,
   },
   //Terms and condition

   TermsAndConditionsTextView:{
    marginLeft:15,
    marginRight:15,
 },
 headerText:{
     paddingBottom:10,
     paddingTop:10,
     color:'rgb(15, 113, 184)',
     fontSize:14,

 },
 mainContainer: {
    flexDirection: 'column',
    backgroundColor: '#ffffff',
    overflow: 'hidden',
    borderRadius: 5,
    borderColor: '#d8d8d8',
    borderWidth: 1,
    height: 150,
    marginTop: 15,
    marginLeft: 16,
    marginRight: 16,
    marginBottom: 16
   },
   validityStyle: {
    color: '#333333',
    fontSize: 12,
    textAlign: 'left',
    padding: 8,
    },
  gradientContainer: {
    flex: 1,
    backgroundColor: '#d8dbd8',
    flexDirection: 'row'
    },
    descriptionContainer: {
      flexDirection: 'column',
      flex:5
      },
      promoContainer: {
        flexDirection: 'row',
        marginTop: 10
    },
    promoCodeText: {
    color: '#fff',
    fontSize: 14,
    marginTop: 10
    },
    promoBorder: {
    justifyContent: 'center',
    alignSelf: 'center',
    width: 140,
    padding: 5,
    marginTop: 5,
    marginLeft: 10
    },
    promoText: {
    color: 'white',
    textAlign: 'center'
    },
    checkboxStyle: {
        paddingVertical: 16,
    },
    subscribeStyle: {
        flexDirection: "row",
        paddingHorizontal: 16
    },
    checkboxText: {
        fontSize: 16,
        color: "#000000"
    },
    checkboxAgree: {
        flexDirection: "row",
        overflow: "hidden",
        flex: 1,
        paddingLeft: 16,
        paddingRight: 32
    },
    checkboxPrivacy : {
        flexDirection: 'row',
        overflow: 'hidden',
        flex: 1,
        paddingLeft: 16,
        paddingRight: 32
    },
    leftIconContainer: {
        justifyContent: "space-around",
        padding: 16
    },
    paragraphthree: {
        paddingHorizontal: 16,
        paddingTop: 90,
        fontSize: 17,
        color: "#000000",
        lineHeight: 22,
        textAlign:"center"

    },
    mapContainer: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#F5FCFF',
  },
  inputView: {
    backgroundColor: 'rgba(0,0,0,0)',
    position: 'absolute',
    top: 15,
    left: 10,
    right: 10
    },
    supportContainer: {
        backgroundColor:'#FFF',
         flex:1,
    },
    supportView:{
        borderBottomColor:'rgb(200, 199, 204)',
        borderBottomWidth:1,
        paddingTop:5,
        marginTop:10
    },
    emailSupportDetailView:{
        flexDirection:'row',
        borderBottomWidth:1,
        borderBottomColor:'rgb(200, 199, 204)',
        paddingLeft:5
    },
    supportleftIconView:{
        justifyContent:'flex-start',
    },
    SupportTitleText:{
        color:'rgb(142, 142, 147)',
        paddingLeft:10
    },
    contactView:{
        flex:1,
        justifyContent:'flex-start',
        paddingTop:1,

    },
    preferredStationDetails:{
        color:'rgb(15, 113, 184)',
        textDecorationLine: 'underline',
        paddingLeft:5
    },
    settingContainer: {
        backgroundColor:'#FFF',
         flex:1
    },
    settingListContainer:{
       flex:1,
       flexDirection: 'row',
       borderBottomColor:'rgb(200, 199, 204)',
       borderBottomWidth:1,
       marginHorizontal:16,
       paddingVertical: 8
    },
    settingTitleView:{
      flex:8,
      justifyContent:'center',
      textAlign:'center',
      color:'rgb(0, 0, 0)'
    },
    leftIconView:{
        flex:1,
        justifyContent:'flex-start',
        alignItems:'center',
        paddingTop:5,
        paddingBottom:5
      },

      iosPickerHeaderView:{
          height: 230,
          backgroundColor: "white",
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0
       },
       
       iosPickerSubView:{
          left: 0,
          right: 0,
          height: 40,
          flexDirection: "row",
          backgroundColor: "rgb(225, 224, 224)",
          justifyContent: "center",
          padding: 10
       },
       iosPickerLanguageView:{
          flex: 3
       },
       iosPickerTextView:{
          alignSelf: "center",
          fontSize: 17
       },
       iosPickerButtonView:{
          flex: 1
       },
       iosPickerButtonTextView:{
          alignSelf: "flex-end",
          color: "rgb(0, 122, 255)",
          fontSize: 15
       },
       loginMainView:{
          flex: 8
       },
       emailFieldView:{
          marginTop: 0
       },
       loginButtonView:{
          justifyContent: "flex-end"
       },
       marginRight:{
          marginRight: 7
       }


});

export default styles;
