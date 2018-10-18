import { connect } from "react-redux";
import React, { Component } from "react";
import { compose } from "redux";
import { Field, reduxForm } from "redux-form";
import validator from "validator";
import { Icon } from "react-native-elements";
import ImagePicker from 'react-native-image-picker';
import { View, ScrollView, Text, Image, StyleSheet, TouchableOpacity, Alert, Platform, PixelRatio, PermissionsAndroid,DatePickerIOS } from "react-native";

import { InputText, Button, DatePicker, Toolbar, DatePickerAndroid, DatePickerIos } from "../components";
import Phone from "./../components/Phone";
import { navigateBack, navigateTo, redirectTo } from "../helpers";
import {logoutUser} from "../actions/authActions";

import screenstyles from "../styles/screenStyles";


class EditProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: "",
      lastname: "",
      datepicker: "",
      phone: "",
      chosenDate: new Date(),
      showDatePickerIOS: false,
      ImageSource: null
    };
    this.setDate = this.setDate.bind(this);
  }
  onSubmit = () => {
    alert("Changes to your profile has been successfully updated");
  };

  logoutFunction = () => {
    Alert.alert(
      "Logout!",
      "Are you sure you want to logout?",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        {
          text: "Yes",
          onPress: () => {
            this.props.handleLogoutUser();
          }
        }
      ],
      { cancelable: false }
    );
  };

  backFunction = () => {
     Alert.alert(
         "Please confirm!",
         "If you want to navigate from this screen",
         [
             {
                 text: "Confirm",
                 onPress: () => {
                     navigateBack("settings");
                 }
             },
             {
                 text: "Cancel",
                 onPress: () => console.log("Cancel Pressed"),
                 style: "cancel"
             }

         ],
         {cancelable: false}
     );
 };

  renderTextInput = field => {
    const {
      meta: { touched, error },
      placeholder,
      keyboardType,
      label,
      input: { onChange, ...restInput }
    } = field;
    return (
      <View>
        <InputText
          onChangeText={onChange}
          keyboardType={keyboardType}
          label={label}
          placeholder={placeholder}
          {...restInput}
        />
        <Text style={screenstyles.errorText}>{touched ? error : ""}</Text>
      </View>
    );
  };

  setDate(newDate) {
    console.log("newdate",newDate);
    this.setState({chosenDate: newDate})
  }

  renderDatePicker = field => {
    const {
      meta: { touched, error },
      placeholder,
      label,
      input: { onChange, ...restInput }
    } = field;

    if (Platform.OS !== "ios") {
        return (
          <View>
            <DatePickerAndroid
              label={label}
              onChangeText={onChange}
              value={this.state.dateOfBirth}
              placeholder={placeholder}
              onChangeDate={onChange}
              {...restInput}
            />
            <Text style={screenstyles.errorText}>{touched ? error : ""}</Text>
          </View>
        );
    } else {
      return (
        <View>
          <DatePickerIos
            label={label}
            onChangeText={onChange}
            value={this.state.dateOfBirth}
            placeholder={placeholder}
            onChangeDate={onChange}
            {...restInput}
          />
          <Text style={screenstyles.errorText}>{touched ? error : ""}</Text>
        </View>
      );
    }
  };

  renderPhone = field => {
    const {
      meta: { touched, error },
      placeholder,
      maxLength,
      keyboardType,
      label,
      input: { onChange, ...restInput }
    } = field;
    return (
      <View>
        <Phone
          label={label}
          onChangeText={onChange}
          keyboardType={keyboardType}
          placeholder={placeholder}
          maxLength={maxLength}
          {...restInput}
        />
        <Text style={screenstyles.errorText}>{touched ? error : ""}</Text>
      </View>
    );
  };

  selectPhotoTapped() {
    const options = {
      quality: 1.0,
      maxWidth: 500,
      maxHeight: 500,
      storageOptions: {
        skipBackup: true
      }
    };

    ImagePicker.showImagePicker(options, (response) => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('ImagePicker Cancelled')
      }
      else if (response.error) {
        console.log('ImagePicker error')
      }
      else if (response.customButton) {
        console.log('ImagePicker custom buttton')
      }
      else {
        let source = { uri: response.uri };
        // You can also display the image using data:
        // let source = { uri: 'data:image/jpeg;base64,' + response.data };
        this.setState({
          ImageSource: source
        });
      }
    });
  }

  render() {
    const { handleSubmit } = this.props;
    return (
      <View style={[screenstyles.appContainer, screenstyles.whiteBackground]}>
        <Toolbar
              style={[screenstyles.noBorderToolbar, {backgroundColor: "#f5f5f5"}]}
              onClickLeftIcon={this.backFunction}
              iconName="back-arrow"
              title="Edit Profile"
              rightButtonName="Logout"
              onRightButtonPress={this.logoutFunction} />
        <ScrollView>
          <View style={screenstyles.profilePic}>
          <TouchableOpacity onPress={this.selectPhotoTapped.bind(this)}>
            <Image source={ this.state.ImageSource === null ? require("./../assets/images/settings/profile.jpg") : this.state.ImageSource}
                 style={screenstyles.profilePicImage}/>
          </TouchableOpacity>
          { this.state.ImageSource === null ?
          <Text style={screenstyles.editText}>Add pic</Text> :
          <Text style={screenstyles.editText}>Edit pic</Text>
          }
          </View>

          <View style={screenstyles.profileContainer}>
            <Field
              name="firstname"
              label="First name *"
              placeholder="Enter first name"
              component={this.renderTextInput}
            />
            <Field
              name="lastname"
              label="Last name *"
              placeholder="Enter last name"
              component={this.renderTextInput}
            />
            <Field
              name="email"
              label="Email *"
              placeholder="Enter email address"
              component={this.renderTextInput}
              keyboardType="email-address"
            />
            <Field
              name="datePicker"
              label="Date of birth *"
              placeholder="Enter date of birth"
              component={this.renderDatePicker}
            />
            <Field
              name="phone"
              label="Phone *"
              placeholder="Enter mobile number"
              keyboardType="number-pad"
              component={this.renderPhone}
              maxLength={10}
            />
            <View style={screenstyles.submitButton}>
              <Button
                title="Submit"
                backgroundColor="rgb(15,113,184)"
                onPress={handleSubmit(this.onSubmit)}
              />
            </View>
          </View>
        </ScrollView>

      </View>
    );
  }
}

const validate = (values) => {
    const errors = {};
    if (!values.firstname) {
        errors.firstname = "Please enter a valid firstname";
    } else if (values.firstname.length < 4) {
        errors.firstname = "Length should be grather than 4";
    } else if (values.firstname.length > 30) {
        errors.firstname = "Length should be less than 30";
    } else if (!/^[a-zA-Z ]+$/.test(values.firstname.trim())) {
        errors.name = "Please enter a valid name";
    }

    if (!values.lastname) {
        errors.lastname = "Please enter a valid lastname";
    } else if (values.lastname.length < 4) {
        errors.lastname = "Length should be grather than 4";
    } else if (values.lastname.length > 30) {
        errors.lastname = "Length should be less than 30";
    } else if (!/^[a-zA-Z ]+$/.test(values.lastname.trim())) {
        errors.name = "Please enter a valid name";
    }

    if (!values.email) {
        errors.email = "Please enter a valid email";
    } else if (!validator.isEmail(values.email.trim())) {
        errors.email = "Please enter a valid email";
    }

    if (!values.datePicker) {
        errors.datePicker = "Please enter a valid date";
    }

    if (!values.phone) {
        errors.phone = "Please enter a valid number";
    } else if (!validator.isNumeric(values.phone.trim())) {
        errors.phone = "Please enter a valid phone";
    } else if (values.phone.length > 10) {
        errors.lastName = "Mobile number should be 10 digits";
    }
    return errors;
};

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
    handleLogoutUser: () => dispatch(logoutUser())
});

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  reduxForm({
    form: "EditProfile",
    validate
  })
)(EditProfile);
