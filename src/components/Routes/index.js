import React, { Component } from "react";
import { Router, Scene } from "react-native-router-flux";

import Login from "../../screens/Login";
import ForgotPassword from "../../screens/ForgotPassword";
import Register from "../../screens/Register";
import StoreLocator from '../../screens/StoreLocator';
import AddLoyaltyCard from '../../screens/AddLoyalityCard';
import LoyaltyCardsList from '../../screens/LoyaltyCardsList';
import AddLoyaltyCardManually from '../../screens/AddLoyaltyCardManually';
import ScanLoyaltyCard from '../../screens/ScanLoyaltyCard';



export default class Routes extends Component {
	render() {
		return (
			<Router>
				<Scene>
					<Scene key="auth" hideNavBar={true} initial={true}>
						<Scene key="login" component={Login} title="Login" />
						<Scene key="register" component={Register} title="Register" />
						<Scene key="forgotPassword" component={ForgotPassword} title="ForgotPassword" />
						<Scene key="storeLocator" component={StoreLocator} title="StoreLocator" />
						<Scene key="addLoyaltyCard" component={AddLoyaltyCard} title="Loyalty Cards" />
						<Scene key="loyaltyCardsList" component={LoyaltyCardsList} title="Loyalty Cards" />
						<Scene key="addLoyaltyCardManually" component={AddLoyaltyCardManually} title="Add Loyalty Card" />
						<Scene key="scanLoyaltyCard" component={ScanLoyaltyCard} title="Scan Loyalty Card" />
					</Scene>
				</Scene>
			</Router>
		);
	}
}
