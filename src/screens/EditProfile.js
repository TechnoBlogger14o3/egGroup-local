import {connect} from "react-redux";
import React, {Component} from "react";
import {compose} from "redux";
import {Field, reduxForm} from "redux-form";
import validator from "validator";
import {View, ScrollView, Text, Image, TouchableOpacity, Alert, Platform} from "react-native";
import ImagePicker from "react-native-image-picker";

import {InputText, Button, Toolbar, DatePickerAndroid, DatePickerIos} from "../components";
import Phone from "../components/Phone";
import {navigateBack, redirectTo} from "../helpers";
import styles from "../styles";

class EditProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstname: "",
            lastname: "",
            datepicker: "",
            phone: "",
            errors: false,
            chosenDate: new Date(),
            showDatePickerIOS: false,
            ImageSource: null
        };
        this.setDate = this.setDate.bind(this);
    }

  onSubmit = () => {
      alert("Changes to your profile has been successfully updated");
  };

  componentWillReceiveProps(nextProps) {
      const that = this;
      if (nextProps.errors) {
          that.setState({errors: true});
      }
  }

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
          {cancelable: false}
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

  renderTextInput = (field) => {
      const {
          meta: {touched, error},
          placeholder,
          keyboardType,
          label,
          input: {onChange, ...restInput}
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

  setDate(newDate) {
      console.log("newdate", newDate);
      this.setState({chosenDate: newDate});
  }

  renderDatePicker = (field) => {
      const {
          meta: {touched, error},
          placeholder,
          label,
          input: {onChange, ...restInput}
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
                  <Text style={styles.errorText}>{touched ? error : ""}</Text>
              </View>
          );
      }
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
              <Text style={styles.errorText}>{touched ? error : ""}</Text>
          </View>
      );

  };

  renderPhone = (field) => {
      const {
          meta: {touched, error},
          placeholder,
          maxLength,
          keyboardType,
          label,
          input: {onChange, ...restInput}
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
          console.log("Response = ", response);

          if (response.didCancel) {
              console.log("ImagePicker Cancelled");
          } else if (response.error) {
              console.log("ImagePicker error");
          } else if (response.customButton) {
              console.log("ImagePicker custom buttton");
          } else {
              const source = {uri: response.uri};
              // You can also display the image using data:
              // let source = { uri: 'data:image/jpeg;base64,' + response.data };
              this.setState({
                  ImageSource: source
              });
          }
      });
  }

  render() {
      const {handleSubmit, submitting, pristine} = this.props;

      return (
          <View style={[styles.appContainer, styles.whiteBackground]}>
              <Toolbar
                  style={[styles.noBorderToolbar, {backgroundColor: "#f5f5f5"}]}
                  onClickLeftIcon={this.backFunction}
                  //  onClickLeftIcon={navigateBack}
                  iconName="back-arrow"
                  title="Edit Profile"
                  rightButtonName="Logout"
                  onRightButtonPress={this.logoutFunction} />
              <ScrollView>
                  <View style={styles.profilePic}>
                      <TouchableOpacity onPress={this.selectPhotoTapped.bind(this)}>
                          <Image
                              source={this.state.ImageSource === null ? require("./../assets/images/settings/profile.jpg") : this.state.ImageSource}
                              style={styles.profilePicImage} />
                      </TouchableOpacity>
                      { this.state.ImageSource === null
                          ? <Text style={styles.editText}>Add pic</Text>
                          : <Text style={styles.editText}>Edit pic</Text>
                      }
                  </View>

                  <View style={styles.profileContainer}>
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
                      <View style={styles.submitButton}>
                          <Button
                              title="Submit"
                              disabled={this.state.errors || submitting || pristine}
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