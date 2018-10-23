/**
* @author Vineet Mishra <vineet.m@photoninfotech.net>
* @version 1.0.0
*/

// import - npm modules
import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image, PermissionsAndroid } from 'react-native';
import { Icon } from "react-native-elements";
import ImagePicker from 'react-native-image-picker';
import CameraRollPicker from 'react-native-camera-roll-picker';
import Permissions from 'react-native-permissions'

// import - Styles
import componentstyles from "../../styles/componentStyles";

/**
* Represents PickerImage.
* @class PickerImage
* @extends Component
*/
class PickerImage extends Component {

    constructor(props){
        super(props);
        {
            this.state={
                avatarSource:null
            }
        }
    }

    getSelectedImages = (image) => {
        if(image[0]) {
            console.log(image[0].uri);
        }
    }

    /**
    * @function render
    * React render method for rendering the native elements
    */

    render() {
        return (
            <View>
                <CameraRollPicker
                  callback={this.getSelectedImages} />
                 <Image source={this.state.avatarSource} style={componentstyles.profilePicImage} />
            </View>
        );
    }
}

export default PickerImage;
