import React, { Component } from 'react';
import {Text,View,TouchableOpacity} from 'react-native'; 
import { Icon } from "react-native-elements";
import styles from "../styles";

class ExpandCollapseView extends Component {
    
    constructor(props){
        super(props);

        this.state = {      
            title       : props.title,
            desc        : props.desc,
            expanded    : false
        };
    }

    toggle(){
        this.setState({
            expanded : !this.state.expanded 
        });
    }

    render(){
        return ( 
            <View>
                <View>
                    <TouchableOpacity onPress={this.toggle.bind(this)}>
                        <View style={styles.settingListContainer}>
                            <View style={styles.settingTitleView}>
                                <Text style={styles.faqListItemTitleTextStyle} >{this.state.title}</Text>
                            </View>
                            <View style={styles.rightIconView}>
                            <Icon
                                name= { this.state.expanded ? "minus" : "plus"}
                                type="material-community"
                                color='#000000'
                                iconStyle={{marginRight: 7}} />
                            </View>
                        </View>
                    </TouchableOpacity>
                    </View>
                    <View>
                      { this.state.expanded &&
                                  <View style={[styles.faqDescContainer, styles.whiteBackground]}>
                                    <Text style={styles.faqListItemDescTextStyle}>{this.state.desc}</Text>
                                  </View> 
                                }
                </View>
            </View>
        );
    }
}

export default ExpandCollapseView;