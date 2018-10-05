import { connect } from 'react-redux';
import React,{Component} from 'react';
import {
    Text,
    View,StyleSheet,Switch
  } from 'react-native';
import { Icon } from "react-native-elements";
import { Toolbar } from "../components";
import { navigateBack } from "../helpers";
import { navigateTo } from "../helpers";
import styles from './../styles'
class NewsLetters extends Component{
    constructor(props){
        super(props);
            this.state = {
                switch1Value: false,
                switch2Value: false,
             
        }
      }
      
 toggleSwitch1 = (value) => {
    this.setState({switch1Value: value})
    console.log('Switch 1 is: ' + value)
 }
 toggleSwitch2 = (value) => {
    this.setState({switch2Value: value})
    console.log('Switch 2 is: ' + value)
 }
    render(){
        return (
         
             <View style={styles.newsLetterContainer}>
                <Toolbar style={styles.noBorderToolbar} openDrawer={this.openDrawer}>
                    <Icon
                        name="arrow-left"
                        size={24}
                        type="material-community"
                        onPress={navigateBack}
                        iconStyle={styles.leftIconContainer}
                    /> 
                    <View style={styles.toolbarUtils}>
                        <Text style={styles.appTitle}>{this.props.title}</Text>
                    </View>
                </Toolbar>
                <View style={styles.newsletterView}>
                    <View style={styles.newsLetterTitleView}>
                        <Text style={styles.newsLetterTitleText} >Newsletter subscriptions</Text>
                    </View>
                        <View style={styles.notificationRightIconView}>
                           <Switch
                            onValueChange = {this.toggleSwitch1}
                            value = {this.state.switch1Value}/>
                        </View>
                </View>
                <View>
                    <Text style={styles.newsLetterContentText}>
                    React Native combines smoothly with components written in Objective-C, Java, or Swift. It's simple to drop down to native code if you need to optimize a few aspects of your application.
                    </Text>
                </View>
             </View>
        );
    }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(NewsLetters);