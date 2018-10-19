import { connect } from 'react-redux';
import React,{Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,DrawerLayoutAndroid,
    FlatList,Platform,TouchableOpacity
  } from 'react-native';
import { Icon } from "react-native-elements";
import { Toolbar } from "../components";
import Sidebar from "../components/Sidebar/Sidebar";
import { navigateBack } from "../helpers";
import { navigateTo } from "../helpers";

import screenstyles from "../styles/screenStyles";

class PreferredStation extends Component{
    constructor(props){
        super(props);
        this.state={
          data:[
              {id:'1',stationName:'Esso', address:'Basement, Building No. 29, Seshadri Road, ', storeOpensAt:'07:00 AM',storeClosesAt:'11:00 PM', distanceOfTheStore:'1 Km',storeStatus:'Open', rightIconName:require('./../assets/images/settings/ArrowRight.png'), Scence:'storeDetails'},
              {id:'2',stationName:'Kfc',address:'Hospital, KBR Mall 88 NH 44 Opposite to VIMS,', storeOpensAt:'07:00 AM',storeClosesAt:'11:00 PM', distanceOfTheStore:'2 Km',storeStatus:'Closed', rightIconName:require('./../assets/images/settings/ArrowRight.png'), Scence:'storeDetails'},
              {id:'3',stationName:'Subway',address:'Basement, Building No. 29, Seshadri Road, ',  storeOpensAt:'07:00 AM',storeClosesAt:'11:00 PM', distanceOfTheStore:'18 Km',storeStatus:'Open',rightIconName:require('./../assets/images/settings/ArrowRight.png'), Scence:'storeDetails'},
          ]
        }
      }

    render(){
        const navigationView = (<Sidebar/>);
        return (

             <View style={screenstyles.preferredStationContainer}>
                  <Toolbar
                      style={screenstyles.noBorderToolbar}
                      onClickLeftIcon={navigateBack}
                      iconName="back-arrow"
                      title={this.props.title} />
                  <View style={screenstyles.PreferredStationTitleView}>
                      <Text style={screenstyles.preferredStationText}>PREFERRED STATIONS</Text>
                  </View>
                  <View style={screenstyles.stationList}>
                        <FlatList
                            data={ this.state.data }
                            renderItem={({item}) =>
                             <TouchableOpacity onPress={()=>navigateTo(item.Scence)}>
                            {/* navigateTo(item.Scence) */}
                                <View style={screenstyles.ListContainer}>
                                    <View style={screenstyles.preferredStationView}>
                                        <Text style={screenstyles.stationNameText}>{item.stationName}</Text>
                                        <Text style={screenstyles.addressText}>{item.address}</Text>
                                        <View style={screenstyles.statusAndDistanceView}>
                                            <View style={screenstyles.storeStatusView}>
                                               <Text style={screenstyles.stausText}>{item.storeStatus}</Text>
                                            </View>
                                            <View style={screenstyles.storeDistance}>
                                              <Text style={screenstyles.distanceText}>{item.distanceOfTheStore}</Text>
                                            </View>
                                        </View>

                                        <Text style={screenstyles.hourText}>Todays hours: {item.storeOpensAt} - {item.storeClosesAt}</Text>
                                    </View>
                                    <View style={[screenstyles.rightIconView,{ alignSelf:'center',marginTop:10}]}>
                                         <Image source={item.rightIconName} style={screenstyles.settingIcons}  onPress={navigateBack}></Image>
                                    </View>
                                </View>
                            </TouchableOpacity>
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
