import React, {Component} from "react";
import {Text, View,TouchableNativeFeedback,Image} from "react-native";

import styles from "../../styles";

const defaultProps = {
    style: {}
}

class Toolbar extends Component<{}> {

    render() {
        return (
          <View style={[styles.toolbarContainer, this.props.style]}>
              {/* <TouchableNativeFeedback onPress={this.props.openDrawer}>
              <View style={styles.menubar}>
                  <Image
                    source={require('./../../assets/images/menu.png')} style={styles.menuIcon}
                  />
              </View>
              </TouchableNativeFeedback> */}
              {this.props.children}
          </View>
        );
    }
}

Toolbar.defaultProps = defaultProps;

export default Toolbar;
