import { connect } from "react-redux";
import React, { Component } from "react";
import { compose } from "redux";
import { Field, reduxForm } from "redux-form";
import validator from "validator";
import { Icon } from "react-native-elements";
import { View, ScrollView, Text, Image, StyleSheet,TouchableOpacity,Alert, Platform} from "react-native";

import { InputText, Button, DatePicker, Toolbar, Phone } from "../components";
import { navigateTo, redirectTo, navigateBack } from "../helpers";

import styles from "../styles";

class EditProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: "",
      lastname: "",
      datepicker: "",
      phone: ""
    };
  }

  onSubmit = () => {
    alert("Login Successful");
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
            redirectTo("auth");
          }
        }
      ],
      { cancelable: false }
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
        <Text style={styles.errorText}>{touched ? error : ""}</Text>
      </View>
    );
  };

  renderDatePicker = field => {
    const {
      meta: { touched, error },
      placeholder,
      label,
      input: { onChange, ...restInput }
    } = field;
    return (
      <View>
        <DatePicker
          label={label}
          onChangeText={onChange}
          value={this.state.dateOfBirth}
          placeholder={placeholder}
          onChangeDate={onChange}
          {...restInput}
        />
        <Text style={styles.errorText}>{touched ? error : ""}</Text>
      </View>
    );
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
        <Text style={styles.errorText}>{touched ? error : ""}</Text>
      </View>
    );
  };

  render() {
    const { handleSubmit } = this.props;
    return (
      <View style={[styles.appContainer, styles.whiteBackground]}>
        <Toolbar
            style={[styles.noBorderToolbar,{backgroundColor: "#f5f5f5"}]}
            onClickLeftIcon={navigateBack}
            iconName="back-arrow"
            title="Edit Profile"
            rightButtonName="Logout"
            onRightButtonPress={this.logoutFunction} />
        <ScrollView>
          <View style={styles.profilePic}>
            <Image
              source={require("./../assets/images/settings/profile.jpg")}
              style={styles.profilePicImage}
            />
          </View>

          <View style={styles.profileContainer}>
            <Field
              name="firstname"
              label="First name *"
              placeholder="John"
              component={this.renderTextInput}
            />
            <Field
              name="lastname"
              label="Last name *"
              placeholder="Doe"
              component={this.renderTextInput}
            />
            <Field
              name="datePicker"
              label="Date of birth *"
              placeholder="05/20/1980"
              component={this.renderDatePicker}
            />
            <Field
              name="phone"
              label="Phone *"
              placeholder="0488 63 39 38"
              keyboardType="number-pad"
              component={this.renderPhone}
              maxLength={10}
            />
            <View style={styles.submitButton}>
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

const validate = values => {
  const errors = {};
  if (!values.firstname) {
    errors.firstname = "Required";
  } else if (values.firstname.length < 4) {
    errors.firstname = "Length should be grather than 4";
  } else if (values.firstname.length > 30) {
    errors.firstname = "Length should be less than 30";
  } else if (!/^[a-zA-Z ]+$/.test(values.firstname.trim())) {
    errors.name = "Please enter a valid name";
  }

  if (!values.lastname) {
    errors.lastname = "Required";
  } else if (values.lastname.length < 4) {
    errors.lastname = "Length should be grather than 4";
  } else if (values.lastname.length > 30) {
    errors.lastname = "Length should be less than 30";
  } else if (!/^[a-zA-Z ]+$/.test(values.lastname.trim())) {
    errors.name = "Please enter a valid name";
  }

  if (!values.datePicker) {
    errors.datePicker = "Required";
  }

  if (!values.phone) {
    errors.phone = "Required";
  }
  if (!values.phone) {
    errors.phone = "Required";
  } else if (!validator.isNumeric(values.phone.trim())) {
    errors.phone = "Please enter a valid phone";
  } else if (values.phone.length > 10) {
    errors.lastName = "Mobile number should be 10 digits";
  }
  return errors;
};

var istyles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 64
  },
  cameraButtonContainer: {
    position: "absolute",
    bottom: 20,
    left: 20,
    right: 20
  },
  cameraButton: {
    backgroundColor: "#5B29C1",
    borderRadius: 4,
    paddingHorizontal: 20,
    paddingVertical: 15
  }
});
const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

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
