import React, {Component} from "react";
import {Text, View,TouchableNativeFeedback,Image, Platform } from "react-native";
import { Icon } from "react-native-elements";

import { LinkButton } from "../index";

import componentstyles from "../../styles/componentStyles";

const defaultProps = {
    style: {},
    iconName: "",
    rightIconName: "",
    rightButtonName: ""
}

class Toolbar extends Component<{}> {

    getTypedIcon = (iconName) => {
        switch (iconName) {
            case "back-arrow":
                return Platform.OS === "ios" ? "chevron-left" : "arrow-left";
            case "plus":
                return "plus";
            default:
                return "chevron-left"
        }
    };

    getSizeIcon = () => {
        return Platform.OS === "ios" ? 38 : 24;
    };

    getColorIcon = () => {
        return "#ffffff"
    };

    render() {
        return (
          <View style={[componentstyles.toolbarContainer, this.props.style]}>
              {this.props.iconName.length > 0 &&
                  <View style={componentstyles.toolbarIconCont}>
                      <Icon
                          name={this.getTypedIcon(this.props.iconName)}
                          size={this.getSizeIcon()}
                          color={this.getColorIcon()}
                          type="material-community"
                          onPress={this.props.onClickLeftIcon}
                          iconStyle={componentstyles.leftIconContainer} />
                  </View>
              }
              <View style={componentstyles.toolbarUtils}>
                  <Text style={componentstyles.appTitle}>{this.props.title}</Text>
              </View>
              {this.props.rightIconName.length > 0 &&
                  <View style={componentstyles.toolbarRightIconCont}>
                      <Icon
                          name={this.getTypedIcon(this.props.rightIconName)}
                          size={this.getSizeIcon()}
                          color={this.getColorIcon()}
                          type="material-community"
                          onPress={this.props.onClickRightIcon}
                          iconStyle={componentstyles.leftIconContainer} />
                  </View>
              }
              {this.props.rightButtonName.length > 0 &&
                  <View style={componentstyles.toolbarRightButtonCont}>
                      <LinkButton
                          onPress={this.props.onRightButtonPress}
                          title={this.props.rightButtonName}
                          color="rgb(255, 255, 255)" />
                  </View>
              }
          </View>
        );
    }
}

Toolbar.defaultProps = defaultProps;

export default Toolbar;
