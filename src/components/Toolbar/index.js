import React, {Component} from "react";
import {Text, View,TouchableNativeFeedback,Image, Platform } from "react-native";
import { Icon } from "react-native-elements";

import { LinkButton } from "../index";

import styles from "../../styles";

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
            default:
                return "chevron-left"
        }
    };

    getSizeIcon = () => {
        return Platform.OS === "ios" ? 38 : 24;
    };

    getColorIcon = () => {
        return Platform.OS === "ios" ? "rgb(15, 113, 184)" : "rgb(0, 0, 0)";
    };

    render() {
        return (
          <View style={[styles.toolbarContainer, this.props.style]}>
              {this.props.iconName.length > 0 &&
                  <View style={styles.toolbarIconCont}>
                      <Icon
                          name={this.getTypedIcon(this.props.iconName)}
                          size={this.getSizeIcon()}
                          color={this.getColorIcon()}
                          type="material-community"
                          onPress={this.props.onClickLeftIcon}
                          iconStyle={styles.leftIconContainer} />
                  </View>
              }
              <View style={styles.toolbarUtils}>
                  <Text style={styles.appTitle}>{this.props.title}</Text>
              </View>
              {this.props.rightIconName.length > 0 &&
                  <View style={styles.toolbarRightIconCont}>
                      <Icon
                          name={this.getTypedIcon(this.props.rightIconName)}
                          size={this.getSizeIcon()}
                          color={this.getColorIcon()}
                          type="material-community"
                          onPress={this.props.onClickRightIcon}
                          iconStyle={styles.leftIconContainer} />
                  </View>
              }
              {this.props.rightButtonName.length > 0 &&
                  <View style={styles.toolbarRightButtonCont}>
                      <LinkButton
                          onPress={this.props.onRightButtonPress}
                          title={this.props.rightButtonName}
                          color="rgb(15, 113, 184)" />
                  </View>
              }
          </View>
        );
    }
}

Toolbar.defaultProps = defaultProps;

export default Toolbar;
