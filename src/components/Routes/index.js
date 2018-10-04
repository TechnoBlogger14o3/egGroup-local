import React, { Component } from "react";
import { Router, Scene } from "react-native-router-flux";

import Login from "../../screens/Login";
import ForgotPassword from "../../screens/ForgotPassword";
import Register from "../../screens/Register";
import SocialLogin from "../../screens/SocialLogin";

export default class Routes extends Component {
	render() {
		return (
			<Router>
				<Scene>
					<Scene key="auth" hideNavBar={true} initial={true}>
					    
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
