/**
* @author Vineet Mishra <vineet.m@photoninfotech.net>
* @version 1.0.0
*/

// import - npm modules
import React, { Component } from 'react';
import { Switch } from 'react-native';

/**
* Represents ToggleSwitch.
* @class ToggleSwitch
* @extends Component
*/
class ToggleSwitch extends Component {
    
    /**
    * @function render
    * React render method for rendering the native elements
    */

    render() {
        return (
                <Switch
                    onValueChange={this.props.toggleSwitch}
                    value={this.props.switchValue}
                />

        );
    }
}

export default ToggleSwitch;
