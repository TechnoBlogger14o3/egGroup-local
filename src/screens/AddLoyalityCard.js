import { connect } from 'react-redux';
import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Dimensions } from 'react-native';
import { Icon } from "react-native-elements";

import { Toolbar } from "../components";
import { navigateBack, navigateTo } from "../helpers";

import screenstyles from "../styles/screenStyles";

class AddLoyaltyCard extends Component {
  
    constructor(props) {
        super(props);
        this.state = {
            email: ""
        };
    }

    onChange = (key, value) => {
        this.setState({
            [key]: value
        });
    }

    render() {
        return (
            <View style={[screenstyles.appContainer, screenstyles.whiteBackground]}>
                <Toolbar
                    style={screenstyles.noBorderToolbar}
                    onClickLeftIcon={navigateBack}
                    iconName="back-arrow"
                    title="Loyalty Cards" />
                <View style={screenstyles.mainView}>
                    <TouchableOpacity onPress={() => navigateTo("scanLoyaltyCard")}
                        style={{
                            borderRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 2,
                            width: Dimensions.get('window').width * 0.5,
                            height: Dimensions.get('window').width * 0.5,
                            alignItems: 'center',
                            justifyContent:'center',
                            backgroundColor: 'white',
                            borderWidth: 2,
                            borderColor: 'lightgrey',
                        }}>
                        <Text>
                            <Text style={screenstyles.loyalabilityplusDesign}> + </Text>
                            {"\n"}
                            <Text style={screenstyles.loyalabilityText}>     Add Your </Text>
                            {"\n"}
                            <Text style={screenstyles.loyalabilityText}>   Loyalty Card</Text>
                            {"\n"} {"\n"}
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const mapStateToProps = state => ({});
const mapDispatchToProps = dispatch => ({});
export default connect(mapStateToProps, mapDispatchToProps)(AddLoyaltyCard);
