/**
* @author Vineet Mishra <vineet.m@photoninfotech.net>
* @version 1.0.0
* @summary Creating News Letter Screens
*/

// import - npm modules

import { connect } from 'react-redux';
import React,{Component} from 'react';
import {
    Text,
    View,
    Platform
  } from 'react-native';
import { Icon } from "react-native-elements";

// import custom Classes
import { Toolbar,ToggleSwitch } from "../components";
import { navigateBack } from "../helpers";
import { navigateTo } from "../helpers";

// import Styles
import screenstyles from "../styles/screenStyles";

/**
* Represents News Letters.
* @class NewsLetters
* @extends Component
*/

class NewsLetters extends Component{

    constructor(props){
        super(props);
        this.state = {
            switchValue: true,
         }
      }

     toggleSwitch = (value) => {
         this.setState({ switchValue: value })
     }

     /**
     * @function render
     * React render method for rendering the native elements
     */
     	
    render(){
        return (
           <View style={screenstyles.newsLetterContainer}>
                <Toolbar
                    style={screenstyles.noBorderToolbar}
                    onClickLeftIcon={navigateBack}
                    iconName="back-arrow"
                    title={this.props.title} />
                <View style={screenstyles.newsletterView}>
                    <View style={screenstyles.newsLetterTitleView}>
                        <Text style={screenstyles.newsLetterTitleText} >Newsletter subscriptions</Text>
                    </View>
                    <View style={screenstyles.notificationRightIconView}>
                        <ToggleSwitch
                            toggleSwitch = {this.toggleSwitch}
                            switchValue = {this.state.switchValue}/>
                    </View>
                </View>
                <View>
                    <Text style={screenstyles.newsLetterContentText}>
                    React Native combines smoothly with components written in Objective-C, Java, or Swift. It is simple to drop down to native code if you need to optimize a few aspects of your application.
                    </Text>
                </View>
           </View>
        );
    }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(NewsLetters);
