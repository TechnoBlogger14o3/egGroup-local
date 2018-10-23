import { StyleSheet, Platform,Dimensions } from 'react-native';

let deviceWidth = Dimensions.get('window').width

const styles = StyleSheet.create({

    buttonContainer: {
        paddingHorizontal: 16,
        marginVertical: 8
    },
    buttonStyle: {
        padding: 14,
        borderRadius: Platform.OS === "ios" ? 12 : 4,
        flexDirection: "row",
        justifyContent: "center"
    },
    buttonTitle: {
        color: "#ffffff",
        fontSize: 16
    },
    //Card component

    cardContainer: {
        flex: 1,
    },
    cardcontainerForRedeemed:{
        flex: 1,

    },

    cardView: {
        elevation:4,
        height: 100,
        flexDirection:'column',
        margin: 10,
        borderRadius: 5,
    },

    cardViewForRedeemed: {
        elevation:4,
        height: 100,
        flexDirection:'column',
        margin: 10,
        borderRadius: 5,
        opacity:0.5
    },
    cardCoupenView:{
        flex:1,
        justifyContent:'flex-start',
        flexDirection:'row',
        height: 70,
        borderTopEndRadius: 5,
        borderTopStartRadius: 5,
    },
    cardValidityView:{
        height: 25,
        justifyContent:'flex-end',
        backgroundColor:'#FFF',
        borderBottomEndRadius: 5,
        borderBottomStartRadius: 5,

    },
    validityContentView:{
        marginLeft:10,
        paddingBottom:3,

    },
    validityText:{
        fontSize:12,
    },

    imageView:{
        flex:1.5,
        justifyContent:'center',
        alignItems:'center',
        borderTopStartRadius: 5,
    },
    image: {
        width: 50,
        height: 50,
        borderRadius:50,
    },
    imageborderView:{
        width: 52,
        height: 52,
        borderRadius:45,
        borderWidth:1,
        borderColor:'#FFF',
    },
    contentContainer:{
        flex:3,
        flexDirection:'column',
        justifyContent:'center',
        //paddingLeft:5,
    },
    storeTextStyle:{
        fontSize:14,
        color:'#FFF',
        fontWeight:'bold'
    },

    containtStore:{
        justifyContent:'flex-start',
    },
    containtText:{
        justifyContent:'center',
    },
    cashoffTextStyle:{
        fontSize:12,
        color:'#FFF',
    },
    dottedView:{
        alignSelf:'center',
        height:50,
        borderColor:'#fff',
        borderRightWidth:1,

    },
    coupenCodeView:{
        flex:2.2,
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
        alignSelf:'center',
        borderTopEndRadius: 5,
        height:50,

    },

    CoupenCodeTextView:{
        justifyContent:'center',
        paddingBottom:2
    },
    coupenCodeTextStyle:{
        fontSize:13,
        color:'rgb(255, 255, 255)',
    },
    CoupenCodeText:{
        justifyContent:'flex-end',
        borderWidth:1,
        borderColor:'#32CD32',
        paddingLeft:5,
        paddingRight:5,
    },
    codeTextStyle:{
        fontSize:12,
        color:'#FFF',
        paddingTop:2,
        paddingBottom:2,
    },
        ///////////
    checkboxContainer: {
        flexDirection: "row",
        paddingHorizontal: 16,
        paddingVertical: 8
    },
    textInputContainer: {
        paddingHorizontal: 16,
        marginTop: 32
    },
    textInputLabel: {
        color: "rgb(15, 113, 184)",
        fontSize: 16
    },
    textInputBox: {
        paddingHorizontal: 0,
        borderBottomWidth: 1,
        borderBottomColor: "rgb(204, 204, 204)",
        paddingBottom: 5,
        paddingTop: 12,
        fontSize: 18
    },
    dateOverlay: {
        width: "100%",
        height: 70,
        position: "absolute",
        top: 0,
        zIndex: 1
    },
    passwordEyeIconCont: {
        position: "absolute",
        bottom: 6,
        right: 16,
        zIndex: 1
    },
    listPickerContainer: {
        flex: 3,
    },
    listPickerStyle: {
        width: Platform.OS === 'ios' ? deviceWidth : 150,
        flex: 2,
        color: "rgb(15, 113, 184)"
    },
    profilePicImage:{

        height:120,
         width:120,
         borderRadius: 500/2,
         overflow: 'hidden'
    },
    //sidebar
    sidebarContainer: {
        flex: 1,
    },
    sidebarIcon: {
        width: 40,
        height: 40,
        backgroundColor: "#cccccc",
        marginHorizontal: 8,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 50
    },
    sidebarIconImage: {
        width: 25,
        height: 25
    },
    listViewCont: {
        justifyContent: "center",
        paddingHorizontal: 16
    },
    menifestContainer: {
        flexDirection: "row",
        // backgroundColor: "#e4e4e4",
        alignItems: "center",
        padding: 8
    },
    toolbarContainer: {
        height: 56,
        backgroundColor: "rgb(51, 51, 51)",
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        elevation: 6
    },
    toolbarIconCont: {
        position: Platform.OS === "ios" ? "absolute" : "relative",
        left: Platform.OS === "ios" ? 0 : 0,
        zIndex: 1
    },
    leftIconContainer: {
        justifyContent: "space-around",
        padding: 16
    },
    toolbarUtils: {
        justifyContent: "space-between",
        flexDirection: "row",
        flex: 1,
        alignItems: "center",
        paddingRight: 8,
        justifyContent: Platform.OS === "ios" ? "center" : "flex-start"
    },
    appTitle: {
        fontSize: 18,
        color: "#ffffff",
        textAlign: Platform.OS === "ios" ? "center" : "left",

    },
    toolbarRightIconCont: {
        position: Platform.OS === "ios" ? "absolute" : "relative",
        right: 0,
        zIndex: 1
    },
    toolbarRightButtonCont: {
        paddingRight: 16,
        position: Platform.OS === "ios" ? "absolute" : "relative",
        right: 0,
        zIndex: 1
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
    faqListItemTitleTextStyle:{
        color: "#000000",
        fontSize: 16,
    },
    rightIconView:{
        flex:1,
        justifyContent:'flex-end',
        alignItems:'flex-end',
        paddingTop:5,
        paddingBottom:5
    },
    faqDescContainer:{
        padding: 16
    },
    whiteBackground: {
        backgroundColor: "#ffffff"
    },
    faqListItemDescTextStyle:{
        color: "#000000",
        fontSize: 13,
    },

});

export default styles;
