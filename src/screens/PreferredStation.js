import { connect } from 'react-redux';
import React,{Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,DrawerLayoutAndroid,
    FlatList,Platform,TouchableNativeFeedback
  } from 'react-native';
import { Icon } from "react-native-elements";
import { Toolbar } from "../components";
import Sidebar from "../components/Sidebar/Sidebar";
import { navigateBack } from "../helpers";
import { navigateTo } from "../helpers";
import styles from './../styles'

class PreferredStation extends Component{
    constructor(props){
        super(props);
        this.state={
          data:[
              {id:'1',stationName:'esso', address:'Basement, Building No. 29, Seshadri Road, Anand Rao Circle, Gandhi Nagar, Bengaluru, Karnataka 560009', storeOpensAt:'07:00 AM',storeClosesAt:'11:00 PM', distanceOfTheStore:'1 Km',storeStatus:'Open', rightIconName:require('./../assets/images/settings/ArrowRight.png'), Scence:'preferredStation'},
              {id:'2',stationName:'kfc',address:'Hospital, KBR Mall 88 NH 44 Opposite to VIMS, Marathahalli, Bengaluru, Karnataka 560037', storeOpensAt:'07:00 AM',storeClosesAt:'11:00 PM', distanceOfTheStore:'2 Km',storeStatus:'Closed', rightIconName:require('./../assets/images/settings/ArrowRight.png'), Scence:'preferredStation'},
              {id:'3',stationName:'subway',address:'Basement, Building No. 29, Seshadri Road, Anand Rao Circle, Gandhi Nagar, Bengaluru, Karnataka 560009',  storeOpensAt:'07:00 AM',storeClosesAt:'11:00 PM', distanceOfTheStore:'18 Km',storeStatus:'Open',rightIconName:require('./../assets/images/settings/ArrowRight.png'), Scence:'preferredStation'},
             
          ]
        }
      }
    render(){
        const navigationView = (<Sidebar/>);
        return (
         
             <View style={styles.preferredStationContainer}>
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
                  <View style={styles.PreferredStationTitleView}>
                      <Text style={styles.preferredStationText}>PREFERRED STATIONS</Text>
                  </View>
                  <View style={styles.stationList}>
                        <FlatList
                            data={ this.state.data }
                            renderItem={({item}) =>
                             <TouchableNativeFeedback onPress={()=>alert('link to station finder')}> 
                            {/* navigateTo(item.Scence) */}
                                <View style={styles.ListContainer}>
                                    <View style={styles.preferredStationView}>
                                        <Text style={styles.stationNameText}>{item.stationName}</Text>
                                        <Text style={styles.addressText}>{item.address}</Text>
                                        <View style={styles.statusAndDistanceView}>
                                            <View style={styles.storeStatusView}>
                                               <Text style={styles.stausText}>{item.storeStatus}</Text>
                                            </View>
                                            <View style={styles.storeDistance}>
                                              <Text style={styles.distanceText}>{item.distanceOfTheStore}</Text>
                                            </View>
                                        </View>
                                        
                                        <Text style={styles.hourText}>Today's hours: {item.storeOpensAt} - {item.storeClosesAt}</Text>
                                    </View>
                                    <View style={styles.rightIconView}>
                                         <Image source={item.rightIconName} style={styles.settingIcons}  onPress={navigateBack}></Image>
                                    </View>
                                </View>
                            </TouchableNativeFeedback>
                            }
                            keyExtractor={(item) => item.id}
                        />
                  </View>
                  
             </View>
        );
    }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(PreferredStation);