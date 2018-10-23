/**
* @author Vineet Mishra <vineet.m@photoninfotech.net>
* @version 1.0.0
* @summary Creating Support Screen
*/

// import - npm modules
import { connect } from 'react-redux';
import React,{Component} from 'react';
import {Platform,Linking,
    Text,Image,TouchableOpacity,
    View,
  } from 'react-native';

// import custom Classes
import { Toolbar } from "../components";
import { navigateBack } from "../helpers";

// import Styles
import styles from './../styles'


/**
* Represents Support Screen.
* @class Support
* @extends Component
*/
class Support extends Component{
    constructor(props){
        super(props);
        this.state = {
          data:[]
        }
    }

      // Function for Sending related querries to particular Email ID
      sendAnEmail=()=>{
        const url='mailto:?to=enquiries@eurogarages.com&subject=Feedback&body='
        Linking.canOpenURL(url).then(supported => {
            if (!supported) {
              console.log('Can\'t handle url: ' + url);
            } else {

              return Linking.openURL(url);
            }
          }).catch(err => console.error('An error occurred', err));
      }

      // Function for making a call for the related querries.
      makeACall=()=>{
        const url = 'tel:01254582111';
        Linking.canOpenURL(url)
            .then((supported) => {
                if (!supported) {
                    console.error('Can\'t handle url: ' + url);
                } else {
                    return Linking.openURL(url)
                        .then((data) => console.error("then", data))
                        .catch((err) => { throw err; });
                }
            })
            .catch((err) => console.error('An error occurred', err));
      }

    /**
    * @function render
    * React render method for rendering the native elements
    */
    render(){
        return (
             <View style={styles.supportContainer}>
                <Toolbar
                    style={styles.noBorderToolbar}
                    onClickLeftIcon={navigateBack}
                    iconName="back-arrow"
                    title="Support" />
                <View style={styles.supportView}>
                    <Text style={styles.SupportTitleText}>EMAIL US ON</Text>
                </View>
                <View style={styles.emailSupportDetailView}>
                    <View style={styles.supportleftIconView}>
                    <Image source={require('./../assets/images/settings/email_Icon.png')} style={[styles.settingIcons]}></Image>
                    </View>
                    <View style={styles.contactView}>
                        <TouchableOpacity onPress={this.sendAnEmail}>
                             <Text style={styles.preferredStationDetails}>enquiries@eurogarages.com</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.supportView}>
                    <Text style={styles.SupportTitleText}>CALL US ON</Text>
                </View>
                <View style={styles.emailSupportDetailView}>
                    <View style={styles.supportleftIconView}>
                    <Image source={require('./../assets/images/settings/call_Icon.png')} style={[styles.settingIcons]}></Image>
                    </View>
                    <View style={styles.contactView}>
                       <TouchableOpacity onPress={this.makeACall}>
                            <Text style={styles.preferredStationDetails}>01254 582111</Text>
                       </TouchableOpacity>
                    </View>
                </View>
             </View>
        );
    }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Support);
