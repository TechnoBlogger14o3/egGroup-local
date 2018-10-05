import React, { Component } from "react";
import { Router, Scene } from "react-native-router-flux";

import Login from "../../screens/Login";
import ForgotPassword from "../../screens/ForgotPassword";
import Register from "../../screens/Register";
import SocialLogin from "../../screens/SocialLogin";
import Settings from '../../screens/UserSettings';
import PreferredStation from "../../screens/PreferredStation";
import Support from "../../screens/Support";
import EditProfile from "../../screens/EditProfile";
import PrivarcyPolicy from "../../screens/PrivarcyPolicy";
import Notifications from "../../screens/Notifications";
import NewsLetters from "../../screens/NewsLetters";
import TermsAndConditions from "../../screens/TermsAndConditions";

export default class Routes extends Component {
	render() {
		return (
			<Router>
				<Scene>
					<Scene key="auth" hideNavBar={true} initial={true}>
				      
					    <Scene key="settings" component={Settings} title="Settings"/>
						<Scene key="preferredStation" component={PreferredStation} title="Preferred Station"/>
					    <Scene key="editProfile" component={EditProfile} title="Edit Profile"/>
						<Scene key="support" component={Support} title="Support"/>
						<Scene key="privacyPolicy" component={PrivarcyPolicy} title="Privacy Policy"/>
						<Scene key="notifications" component={Notifications} title="Notification Preference" />
						<Scene key="newsLetters" component={NewsLetters} title="Newsletter subscriptions"/>
						<Scene key="termsAndConditions" component={TermsAndConditions} title="Terms & Conditions"/>
					    <Scene key="socialLogin" component={SocialLogin} title="Social Login"/>
						<Scene key="register" component={Register} title="Register" />
						<Scene key="login" component={Login} title="Login" />
						<Scene key="forgotPassword" component={ForgotPassword} title="ForgotPassword" />
					</Scene>
				</Scene>
			</Router>
		);
	}
}
