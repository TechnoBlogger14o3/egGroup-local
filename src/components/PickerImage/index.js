import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image, PermissionsAndroid } from 'react-native';
import { Icon } from "react-native-elements";
import ImagePicker from 'react-native-image-picker';
import CameraRollPicker from 'react-native-camera-roll-picker';
import Permissions from 'react-native-permissions'

import styles from "../../styles";

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

    render() {
        return (
            <View>
                <CameraRollPicker
                  callback={this.getSelectedImages} />
                 <Image source={this.state.avatarSource} style={styles.profilePicImage} />
            </View>
        );
    }
}

export default PickerImage;
