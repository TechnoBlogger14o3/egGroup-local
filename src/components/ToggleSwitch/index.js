import React, { Component } from 'react';
import { Switch } from 'react-native';

class ToggleSwitch extends Component {
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
