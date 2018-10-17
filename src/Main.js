/**
* @author Vineet Mishra <vineet.m@photoninfotech.net>
* @version 1.0.0
* @summary Adding routes component and status bar
*/

// Import npm modules
import {connect} from "react-redux";
import React, {Component} from "react";
import {StatusBar, View} from "react-native";

// Import custom classes
import Routes from "./components/Routes/index";

// Import styles
import styles from "./styles";

/**
* Represents Main class.
* @class Main
* @extends Component
*/
class Main extends Component {
    /**
    * @function render
    * React render method for rendering the native elements
    */
    render() {
        return (
            <View style={styles.appContainer}>
                <StatusBar
                    backgroundColor="#ffffff"
                    barStyle="dark-content" />
                <Routes />
            </View>
        );
    }
}

/**
* Converting redux state to props for the Main component
* @function mapStateToProps
* @params {object} state
* @returns {object} props
*/
const mapStateToProps = () => ({});

/**
* Converting redux state to props for the Main component
* @function mapDispatchToProps
* @params {function} dispatch
* @returns {object} props
*/
const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Main);
