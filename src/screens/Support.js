import { connect } from 'react-redux';
import React,{Component} from 'react';
import {Platform,Linking,
    Text,Image,TouchableOpacity,
    View,
  } from 'react-native';
import { Toolbar } from "../components";
import { navigateBack } from "../helpers";

import styles from './../styles'

class Support extends Component{
    constructor(props){
        super(props);
        this.state = {
          data:[]
        }
    }

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
                    <Image source={require('./../assets/images/settings/email_Icon.png')} style={[styles.settingIcons,{height:18,width:18}]}></Image>
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
                    <Image source={require('./../assets/images/settings/call_Icon.png')} style={[styles.settingIcons,{height:18,width:18}]}></Image>
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
