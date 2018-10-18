import React, { Component } from 'react';
import {Text,View,TouchableOpacity, UIManager, LayoutAnimation} from 'react-native';
import { Icon } from "react-native-elements";
import componentstyles from "../../styles/componentStyles";

class ExpandCollapseView extends Component {

    constructor(props){
        super(props);
        this.state = {
            title       : props.title,
            desc        : props.desc,
            expanded    : false
        };
    }

    _animate = () => {
          UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);
          LayoutAnimation.easeInEaseOut();
    }

    toggle(){
        this.setState({
            expanded : !this.state.expanded
        }, () => {
          this._animate();
        });
    }

    render(){
        return (
            <View>
                <View>
                    <TouchableOpacity onPress={this.toggle.bind(this)}>
                        <View style={componentstyles.settingListContainer}>
                            <View style={componentstyles.settingTitleView}>
                                <Text style={componentstyles.faqListItemTitleTextStyle} >{this.state.title}</Text>
                            </View>
                            <View style={componentstyles.rightIconView}>
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
                          <View style={[componentstyles.faqDescContainer, componentstyles.whiteBackground]}>
                            <Text style={componentstyles.faqListItemDescTextStyle}>{this.state.desc}</Text>
                          </View>
                      }
                </View>
            </View>
        );
    }
}

export default ExpandCollapseView;
