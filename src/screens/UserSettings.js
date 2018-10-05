import { connect } from 'react-redux';
import React,{Component} from 'react';
import {
    Text,
    View,
    Image,DrawerLayoutAndroid,
    FlatList,Platform,TouchableNativeFeedback
  } from 'react-native';
import { Icon } from "react-native-elements";
import { Toolbar } from "../components";
import Sidebar from "../components/Sidebar/Sidebar";
import { navigateBack, navigateTo } from "../helpers";

import styles from './../styles';

class Settings extends Component {
    constructor(props){
      super(props);
      this.state={
        data:[
            {settingTitle:'Set preferred station',leftIconName:require('./../assets/images/settings/Setpreferredstation.png'),rightIconName:require('./../assets/images/settings/ArrowRight.png'),Scence:'preferredStation'},
            {settingTitle:'Edit Profile',leftIconName:require('./../assets/images/settings/Editprofile.png'),rightIconName:require('./../assets/images/settings/ArrowRight.png'),Scence:'editProfile'},
            {settingTitle:'Support',leftIconName:require('./../assets/images/settings/Support.png'),rightIconName:require('./../assets/images/settings/ArrowRight.png'),Scence:'support'},
            {settingTitle:'Terms & Conditions',leftIconName:require('./../assets/images/settings/T&C.png'),rightIconName:require('./../assets/images/settings/ArrowRight.png'),Scence:'termsAndConditions'},
            {settingTitle: 'Privacy Policy',leftIconName:require('./../assets/images/settings/Privacypolicy.png'),rightIconName:require('./../assets/images/settings/ArrowRight.png'),Scence:'privacyPolicy'},
            {settingTitle:'Notification Preferences',leftIconName:require('./../assets/images/settings/Notification.png'),rightIconName:require('./../assets/images/settings/ArrowRight.png'),Scence:'notifications'},
            {settingTitle:'Newsletter subscriptions',leftIconName:require('./../assets/images/settings/NewsletterSignup.png'),rightIconName:require('./../assets/images/settings/ArrowRight.png'),Scence:'newsLetters'}
        ]
      }
    }

    openDrawer = () => {
        this.drawer.openDrawer();
    }

    getTypedIcon = name => {
        return Platform.OS === "ios" ? `ios-${name}` : `${name}`;
    };

    render() {
        const navigationView = (<Sidebar/>);
      return (
        <DrawerLayoutAndroid
           id="drawer"
           drawerWidth={300}
           ref={node => this.drawer = node}
           drawerPosition={DrawerLayoutAndroid.positions.Left}
           renderNavigationView={() => navigationView}>
           <View style={styles.settingContainer}>
                   <Toolbar style={styles.noBorderToolbar} openDrawer={this.openDrawer}>
                         <Icon
                            name={this.getTypedIcon('arrow-left')}
                            size={24}
                            type="material-community"
                            onPress={navigateBack}
                            iconStyle={styles.leftIconContainer}
                        />
                        <View style={styles.toolbarUtils}>
                            <Text style={styles.appTitle}>Settings</Text>
                        </View>
                    </Toolbar>

                <FlatList
                    data={ this.state.data }
                    renderItem={({item}) =>
                    <TouchableNativeFeedback onPress={()=>navigateTo(item.Scence)}>
                        <View style={styles.settingListContainer}>
                            <View style={styles.leftIconView}>
                               <Image source={item.leftIconName} style={styles.settingIcons}  onPress={navigateBack}></Image>
                            </View>
                            <View style={styles.settingTitleView}>
                                <Text style={styles.item} >{item.settingTitle}</Text>
                            </View>
                                <View style={styles.rightIconView}>
                                <Image source={item.rightIconName} style={styles.settingIcons}  onPress={navigateBack}></Image>
                                </View>
                        </View>
                    </TouchableNativeFeedback>
                    }
                    keyExtractor={(item) => item.settingTitle}
                            />
           </View>

          </DrawerLayoutAndroid>

      );
    }
  }

  const mapStateToProps = state => ({});

  const mapDispatchToProps = dispatch => ({});

  export default connect(mapStateToProps, mapDispatchToProps)(Settings);
