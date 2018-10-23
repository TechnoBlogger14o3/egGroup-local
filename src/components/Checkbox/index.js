/**
* @author Vineet Mishra <vineet.m@photoninfotech.net>
* @version 1.0.0
*/

// import - npm modules
import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Icon } from "react-native-elements";

// import - Styles
import componentstyles from "../../styles/componentStyles";

const defaultProps = {
    label: "Subscribe the Newsletter",
    checked: false
}

/**
* Represents Checkbox.
* @class Checkbox
* @extends Component
*/
class Checkbox extends Component {
   
    /**
    * @function render
    * React render method for rendering the native elements
    */

    render() {
        return (
            <View style={[componentstyles.checkboxContainer, this.props.style]}>
                <TouchableOpacity onPress={this.props.onPress}>
                    <Icon
                        name={this.props.checked ? "checkbox-marked" : "checkbox-blank-outline"}
                        type="material-community"
                        color="rgb(141, 198, 63)"
                    />
                </TouchableOpacity>
                {this.props.labelComponent}
            </View>
        );
    }
}

Checkbox.defaultProps = defaultProps;

export default Checkbox;
