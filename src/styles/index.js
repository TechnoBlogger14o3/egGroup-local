import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    appContainer: {
        flex: 1
    },

    whiteBackground: {
        backgroundColor: "#ffffff"
    },

    appTitle: {
        fontSize: 18,
        color: "#000000"
    },

    noBorderToolbar: {
        elevation: 0
    },

    textInputContainer: {
        paddingHorizontal: 16,
        marginTop: 32
    },

    buttonContainer: {
        paddingHorizontal: 16,
        marginVertical: 8
    },

    linkButtonContainer: {
        paddingHorizontal: 8
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

    buttonStyle: {
        padding: 14,
        borderRadius: 4,
        flexDirection: "row",
        justifyContent: "center"
    },

    buttonTitle: {
        color: "#ffffff",
        fontSize: 16
    },

    fontSize16: {
        fontSize: 16
    },

    colorBlack: {
        color: "rgb(51, 51, 51)"
    },

    loginFooterTextContainer: {
        flexDirection: "row",
        justifyContent: "center",
        paddingTop: 8,
        paddingBottom: 16
    },

    loginButtonCont: {
        position: "absolute",
        bottom: 0,
        width: "100%"
    },

    loginHelperCont: {
        paddingHorizontal: 16,
        paddingVertical: 32,
        flexDirection: "row",
        justifyContent: "space-between"
    },

    loginLogoContainer: {
        justifyContent: "center",
        flexDirection: "row"
    },

    loginFormCont: {
        justifyContent:"space-evenly",
        flex: 1
    },

    passwordEyeIconCont: {
        position: "absolute",
        bottom: 6,
        right: 16,
        zIndex: 1
    },

    toolbarContainer: {
        height: 56,
        backgroundColor: "#ffffff",
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        elevation: 6
    },

    toolbarUtils: {
        justifyContent: "space-between",
        flexDirection: "row",
        flex: 1,
        alignItems: "center",
        paddingRight: 8
    },

    leftIconContainer: {
        justifyContent: "space-around",
        padding: 16
    },

    paragraphOne: {
        paddingHorizontal: 16,
        paddingTop: 16,
        fontSize: 16,
        color: "#000000",
        lineHeight: 22
    },

    dateOverlay: {
        width: "100%",
        height: 70,
        position: "absolute",
        top: 0,
        zIndex: 1
    },

    checkboxContainer: {
        flexDirection: "row",
        paddingHorizontal: 16,
        paddingVertical: 8
    },

    checkboxText: {
        fontSize: 16,
        color: "#000000"
    }
});

export default styles;
