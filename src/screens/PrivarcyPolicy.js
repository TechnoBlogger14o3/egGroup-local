import { connect } from 'react-redux';
import React,{Component} from 'react';
import {
    Text,
    View,
  } from 'react-native';
import { Icon } from "react-native-elements";
import { Toolbar } from "../components";
import { navigateBack } from "../helpers";
import { navigateTo } from "../helpers";
import styles from './../styles'
class PrivacyPolicy extends Component{
    constructor(props){
        super(props);
        this.state={
          data:[ ]
        }
      }
    render(){
        return (
         
             <View style={styles.PrivacytContainer}>
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
               
             </View>
        );
    }
}



const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(PrivacyPolicy);