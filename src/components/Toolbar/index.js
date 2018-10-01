import React, {Component} from "react";
import {Text, View} from "react-native";

import styles from "../../styles";

const defaultProps = {
    style: {}
}

class Toolbar extends Component<{}> {

    render() {
        return (
          <View style={[styles.toolbarContainer, this.props.style]}>
              {this.props.children}
          </View>
        );
    }
}

Toolbar.defaultProps = defaultProps;

export default Toolbar;
