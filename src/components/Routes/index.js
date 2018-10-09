import React, { Component } from "react";
import { Router, Scene } from "react-native-router-flux";
import { Icon } from "react-native-elements";

import Login from "../../screens/Login";
import ForgotPassword from "../../screens/ForgotPassword";
import Register from "../../screens/Register";
import StoreLocator from '../../screens/StoreLocator';
import StoreDetails from '../../screens/StoreDetails';
import AddLoyaltyCard from '../../screens/AddLoyalityCard';
import LoyaltyCardsList from '../../screens/LoyaltyCardsList';
import AddLoyaltyCardManually from '../../screens/AddLoyaltyCardManually';
import ScanLoyaltyCard from '../../screens/ScanLoyaltyCard';
import Settings from '../../screens/UserSettings';
import PreferredStation from "../../screens/PreferredStation";
import Support from "../../screens/Support";
import EditProfile from "../../screens/EditProfile";
import PrivarcyPolicy from "../../screens/PrivarcyPolicy";
import Notifications from "../../screens/Notifications";
import NewsLetters from "../../screens/NewsLetters";
import TermsAndConditions from "../../screens/TermsAndConditions";
import Home from '../../screens/Home';

export default class Routes extends Component {

	render() {
		return (
			<Router>
					<Scene>
							<Scene key="auth" hideNavBar={true} initial={true}>
									<Scene key="login" component={Login} title="Login" />
									<Scene key="register" component={Register} title="Register" />
									<Scene key="forgotPassword" component={ForgotPassword} title="ForgotPassword" />
							</Scene>
							<Scene key="app" hideNavBar={true} initial={false}>
									<Scene tabs key="home" hideNavBar={true} swipeEnabled={true} tabBarPosition="bottom">
											<Scene key="home" component={Home} title="Home" />
											<Scene key="settings" hideNavBar={true}
													icon={<Icon color='#f53d3d' type="material-community" name="arrow-left" size={25} />}
													component={Settings} />
											<Scene key="storeLocator" hideNavBar={true}  component={StoreLocator} />
									</Scene>
									<Scene key="storeDetails" component={StoreDetails} title="StoreDetails"/>
									<Scene key="addLoyaltyCard" component={AddLoyaltyCard} title="Loyalty Cards" />
									<Scene key="loyaltyCardsList" component={LoyaltyCardsList} title="Loyalty Cards" />
									<Scene key="addLoyaltyCardManually" component={AddLoyaltyCardManually} title="Add Loyalty Card" />
									<Scene key="scanLoyaltyCard" component={ScanLoyaltyCard} title="Scan Loyalty Card" />
									<Scene key="settings" component={Settings} title="Settings"/>
									<Scene key="preferredStation" component={PreferredStation} title="Preferred Station"/>
					    		<Scene key="editProfile" component={EditProfile} title="Edit Profile"/>
									<Scene key="support" component={Support} title="Support"/>
									<Scene key="privacyPolicy" component={PrivarcyPolicy} title="Privacy Policy"/>
									<Scene key="notifications" component={Notifications} title="Notification Preference" />
									<Scene key="newsLetters" component={NewsLetters} title="Newsletter subscriptions"/>
									<Scene key="termsAndConditions" component={TermsAndConditions} title="Terms & Conditions"/>
							</Scene>
					</Scene>
			</Router>
		);
	}
}
