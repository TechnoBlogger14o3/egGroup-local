import React, { Component } from 'react';
import { View, Text, TouchableOpacity,Image } from 'react-native';
import { Icon } from "react-native-elements";
import ImagePicker from 'react-native-image-picker';
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

    myfunc = () => {
      const options = {
          takePhotoButtonTitle:' Take a picture',
          chooseFromLibraryButtonTitle:'Upload from gallery',
      };

      Permissions.checkMultiple(['camera', 'photo']).then(response => {
          ImagePicker.showImagePicker(options, (response) => {

              console.log('Response = ', response);

              if (response.didCancel) {

                console.log('User cancelled image picker');

              } else if (response.error) {

                console.log('ImagePicker Error: ', response.error);

              } else if (response.customButton) {

                console.log('User tapped custom button: ', response.customButton);

              } else {

                const source = { uri: response.uri };
                console.log(source);

              }
            });
      });


    }

    render() {
        return (
            <View>
                 <Image source={this.state.avatarSource} style={styles.profilePicImage} />
                 <TouchableOpacity style={{marginLeft:50}} onPress={this.myfunc}>
                     <Text style={{color: "rgb(15, 113, 184)",}}>Edit Pic</Text>
                 </TouchableOpacity>
            </View>
        );
    }
}

export default PickerImage;
