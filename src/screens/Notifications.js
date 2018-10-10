import { connect } from 'react-redux';
import React,{Component} from 'react';
import {
    Text,
    View, Switch,StyleSheet,Image, Platform
  } from 'react-native';
import { Icon } from "react-native-elements";

import { Toolbar,ToggleSwitch } from "../components";
import { navigateBack } from "../helpers";
import { navigateTo } from "../helpers";
import styles from './../styles';

class Notifications extends Component {
    constructor(props){
        super(props);
        this.state = {
           switchValue: true,
        };
    }

    toggleSwitch = (value) => {
        this.setState({ switchValue: value })
    }

    getTypedIcon = () => {
        return Platform.OS === "ios" ? "chevron-left" : "arrow-left";
    };

    getSizeIcon = () => {
        return Platform.OS === "ios" ? 38 : 24;
    };

    getColorIcon = () => {
        return Platform.OS === "ios" ? "rgb(15, 113, 184)" : "rgb(0, 0, 0)";
    };

      render() {
        return (
            <View style={styles.notificationContainer}>
                <Toolbar style={[styles.noBorderToolbar,{borderBottomWidth:1,borderBottomColor:'rgb(204, 204, 204)'}]}>
                    <Icon
                        name={this.getTypedIcon()}
                        size={this.getSizeIcon()}
                        color={this.getColorIcon()}
                        type="material-community"
                        onPress={navigateBack}
                        iconStyle={styles.leftIconContainer} />
                    <View style={styles.toolbarUtils}>
                        <Text style={styles.appTitle}>{this.props.title}</Text>
                    </View>
                </Toolbar>
                <View style={styles.newsletterView}>
                    <View style={styles.newsLetterTitleView}>
                        <Text style={styles.newsLetterTitleText} >Notification subscriptions</Text>
                    </View>
                    <View style={styles.notificationRightIconView}>
                        <ToggleSwitch
                            toggleSwitch = {this.toggleSwitch}
                            switchValue = {this.state.switchValue} />
                    </View>
                </View>
                <View>
                    <Text style={styles.newsLetterContentText}>
                        React Native combines smoothly with components written in Objective-C, Java, or Swift. It  is simple to drop down to native code if you need to optimize a few aspects of your application.
                    </Text>
                </View>

            </View>

        );
    }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Notifications);
