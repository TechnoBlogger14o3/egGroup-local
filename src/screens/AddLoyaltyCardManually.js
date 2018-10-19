/**
* @author Kallayy Hiremath <kallayya@photoninfotech.net>
* @version 1.0.0
* @summary Creating CoupensList screen
*/

// Import npm modules
import {connect} from "react-redux";
import React, {Component} from "react";
import {View, Text, Alert} from "react-native";
import {compose} from "redux";
import {Field, reduxForm, getFormValues} from "redux-form";

// Re-usable components
import {InputText, Button, Toolbar, DatePickerAndroid} from "../components";
import {navigateBack, navigateTo} from "../helpers";

// import styles
import screenstyles from "../styles/screenStyles";

/**
* Represents Main class.
* @class AddLoyaltyCardManually
* @extends Component
*/
class AddLoyaltyCardManually extends Component {
    /** @constructor */
    constructor(props) {
        super(props);
        this.state = {
            errors: false
        };
    }

    /** @Component life cycle */
    componentWillReceiveProps(nextProps) {
        const that = this;
        if (nextProps.errors) {
            that.setState({errors: true});
        }
    }

    /** onEntered text here will get all key and values */
    onChange = (key, value) => {
        this.setState({
            [key]: value
        });
    }

    // onsubmit Alert and navigate to loyaltyCardsList
    onSubmit = () => {
        Alert.alert("Your Go Fuel card added sucessfully!");
        navigateTo("loyaltyCardsList");
    }

    // created render text input component for reusable
    renderTextInput = (field) => {
        const {meta: {touched, error}, placeholder, keyboardType, onIconPress, isPassword, label, secureTextEntry, maxLength, input: {onChange, ...restInput}} = field;
        return (
            <View>
                <InputText
                    onChangeText={onChange}
                    keyboardType={keyboardType}
                    isPassword={isPassword}
                    label={label}
                    maxLength={maxLength}
                    onIconPress={onIconPress}
                    secureTextEntry={secureTextEntry}
                    placeholder={placeholder}

                    {...restInput} />
                <Text style={screenstyles.errorText}>{touched ? error : ""}</Text>
            </View>
        );
    }

    // created render DatePicker component for reusable
    renderDatePicker = (field) => {
        const {meta: {touched, error}, placeholder, label, input: {onChange, ...restInput}} = field;
        return (
            <View>
                <DatePickerAndroid
                    label={label}
                    onChangeText={onChange}
                    placeholder={placeholder}
                    onChangeDate={onChange}
                    {...restInput} />
                <Text style={screenstyles.errorText}>{touched ? error : ""}</Text>
            </View>
        );
    }

    /**
     * @function render
     * React render method for rendering the native elements
     */
    render() {
        // destructored variable names
        const {handleSubmit, submitting, pristine} = this.props;
        return (
            <View style={[screenstyles.appContainer, screenstyles.whiteBackground]}>
                <Toolbar
                    style={screenstyles.noBorderToolbar}
                    onClickLeftIcon={navigateBack}
                    iconName="back-arrow"
                    title="Add Loyalty Card" />
                <Field
                    name="cardNumber"
                    label="Enter Go Fuel Card number"
                    placeholder="1234 5678 9012 3455"
                    keyboardType="number-pad"
                    maxLength={19}
                    component={this.renderTextInput}
                    normalize={normalizePhone}
                />
                <Field
                    name="datePicker"
                    label="Card Expiry"
                    placeholder="20/05/2022"
                    component={this.renderDatePicker}
                />
                <View style={screenstyles.LoyaltyDoneButton}>
                    <Button
                        title="Done"
                        disabled={this.state.errors || submitting || pristine}
                        backgroundColor="rgb(15, 113, 184)"
                        onPress={handleSubmit(this.onSubmit)} />
                </View>
            </View>
        );
    }
}

// Vlidation for AddLoyaltyCardManually
const validate = (values) => {
    const errors = {};

    if (!values.cardNumber) {
        errors.cardNumber = "Please enter a valid card number";
    } else if (values.cardNumber.length < 19) {
        errors.cardNumber = "Please enter a valid card number";
    }

    if (!values.datePicker) {
        errors.datePicker = "Please enter a valid expiry date";
    }
    return errors;
};

// For leaving space after each 4 digits in card numbers
const normalizePhone = (value, previousValue) => {
    if (!value) {
        return value;
    }
    const onlyNums = value.replace(/[^\d]/g, "");
    if (!previousValue || value.length > previousValue.length) {
        if (onlyNums.length === 4) {
            return `${onlyNums} `;
        }
        if (onlyNums.length === 6) {
            return `${onlyNums.slice(0, 4)} ${onlyNums.slice(4)} `;
        }
    }
    if (onlyNums.length <= 4) {
        return onlyNums;
    }
    if (onlyNums.length <= 8) {
        return `${onlyNums.slice(0, 4)} ${onlyNums.slice(4)}`;
    }
    return `${onlyNums.slice(0, 4)} ${onlyNums.slice(4, 8)} ${onlyNums.slice(8, 12)} ${onlyNums.slice(12, 16)}`;
};

/**
* Converting redux state to props for the Main component
* @function mapStateToProps
* @params {object} state
* @returns {object} props
*/
const mapStateToProps = state => ({
    formValues: getFormValues("loyaltyCardsList")(state)
});

/**
* Converting redux state to props for the Main component
* @function mapDispatchToProps
* @params {function} dispatch
* @returns {object} props
*/
const mapDispatchToProps = () => ({});


export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    reduxForm({form: "loyaltyCardsList", validate})
)(AddLoyaltyCardManually);
