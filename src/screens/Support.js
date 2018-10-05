import { connect } from 'react-redux';
import React,{Component} from 'react';
import {
    StyleSheet,
    Text,Image,NativeModules,
    View,TouchableNativeFeedback
  } from 'react-native';
import { Icon } from "react-native-elements";
import { Toolbar } from "../components";
import { navigateBack } from "../helpers";
import { navigateTo } from "../helpers";
import styles from './../styles'
class Support extends Component{
    constructor(props){
        super(props);
        this.state={
          data:[
          ]
        }
      }
    render(){
        return (
         
             <View style={styles.supportContainer}>
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
                <View style={styles.supportView}>
                    <Text style={styles.SupportTitleText}>EMAIL US ON</Text>
                </View>
                <View style={styles.emailSupportDetailView}>
                    <View style={styles.supportleftIconView}>
                       <Image source={require('./../assets/images/settings/Support.png')} style={styles.settingIcons}></Image>
                    </View>
                    <View style={styles.contactView}>
                            <Text style={styles.preferredStationDetails}>enquiries@eurogarages.com</Text>
                    </View>
                  
                </View>
                <View style={styles.supportView}>
                    <Text style={styles.SupportTitleText}>CALL US ON</Text>
                </View>
                <View style={styles.emailSupportDetailView}>
                    <View style={styles.supportleftIconView}>
                       <Image source={require('./../assets/images/settings/Support.png')} style={styles.settingIcons}></Image>
                    </View>
                    <View style={styles.contactView}>
                       <Text style={styles.preferredStationDetails}>01254 582111</Text>
                    </View>
                </View>
             </View>
        );
    }
}



const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Support);