/**
* @author Vineet Mishra <vineet.m@photoninfotech.net>
* @version 1.0.0
*/

// import - npm modules
import React, { Component } from "react";
import { Router, Scene } from "react-native-router-flux";
import { Icon } from "react-native-elements";

// import - custom class
import Login from "../../screens/Login";
import ForgotPassword from "../../screens/ForgotPassword";
import Register from "../../screens/Register";
import StoreLocator from "../../screens/StoreLocator";
import StoreDetails from "../../screens/StoreDetails";
import AddLoyaltyCard from "../../screens/AddLoyalityCard";
import LoyaltyCardsList from "../../screens/LoyaltyCardsList";
import AddLoyaltyCardManually from "../../screens/AddLoyaltyCardManually";
import ScanLoyaltyCard from "../../screens/ScanLoyaltyCard";
import Settings from "../../screens/UserSettings";
import PreferredStation from "../../screens/PreferredStation";
import Support from "../../screens/Support";
import EditProfile from "../../screens/EditProfile";
import PrivarcyPolicy from "../../screens/PrivarcyPolicy";
import Notifications from "../../screens/Notifications";
import NewsLetters from "../../screens/NewsLetters";
import TermsAndConditions from "../../screens/TermsAndConditions";
import Home from "../../screens/Home";
import PushNotification from "../../screens/PushNotification";
import VoucherList from "../../screens/VoucherList";
import PromotionsDetails from "../../screens/PromotionsDetails";
import PromotionsList from "../../screens/PromotionsList";
import PaymentListCards from "../../screens/PaymentListCards";
import AddCreditCardForPayment from "../../screens/AddCreditCardForPayment";
import PaymentBillingScreen from "../../screens/PaymentBillingScreen";
import StartFuelling from "../../screens/StartFuelling";
import FuelFilling from "../../screens/FuelFilling";
import PaymentSuccessfull from "../../screens/PaymentSuccessfull";
import Faq from "../../screens/Faq";

/**
* Represents Routes.
* @class Routes
* @extends Component
*/
export default class Routes extends Component {

	renderSettingsIcon = () => (<Icon
				name="settings"
				size={28}
				type="material-community"/>);

	renderHomeIcon = () => (<Icon
				name="home-outline"
				size={28}
				type="material-community"/>);

	renderFindIcon = () => (<Icon
			name="map-marker"
			size={28}
			type="material-community"/>);


	renderLoyalityIcon = () => (<Icon
			name="account-card-details"
			size={28}
			type="material-community"/>);

	renderPromotionIcon = () => (<Icon
		name="account-card-details"
		size={28}
		type="material-community"/>);

	renderPayIcon = () => (<Icon
		name="wallet"
		size={28}
		type="material-community"/>);

    /**
    * @function render
    * React render method for rendering the native elements
    */

	render() {
		return (
			<Router>
					<Scene>
							<Scene key="auth" hideNavBar={true} initial={this.props.isLoggedin}>
									<Scene key="login" component={Login} title="Login" />
									<Scene key="register" component={Register} title="Register" />
									<Scene key="forgotPassword" component={ForgotPassword} title="ForgotPassword" />
									<Scene key="storeLocator" title="Stations" component={StoreLocator} />
									<Scene key="storeDetails" component={StoreDetails} title="StoreDetails"/>
							</Scene>
							<Scene key="app" hideNavBar={true} initial={this.props.isLoggedin}>
									<Scene tabs key="home" hideNavBar={true} swipeEnabled={true} tabBarPosition="bottom" tabBarStyle={{height: 56, paddingVertical: 4}}>
											<Scene key="home" icon={this.renderHomeIcon} hideNavBar={true}  component={Home} title="Home" labelStyle={{paddingTop: 8}} />
											<Scene key="settings" icon={this.renderSettingsIcon} hideNavBar={true} title="Settings" component={Settings} labelStyle={{paddingTop: 8}} />
											<Scene key="storeLocator" icon={this.renderFindIcon} hideNavBar={true} title="Stations" component={StoreLocator} labelStyle={{paddingTop: 8}} />
											<Scene key="loyalityList" icon={this.renderLoyalityIcon} hideNavBar={true} title="Loyalty Cards" component={LoyaltyCardsList} labelStyle={{paddingTop: 8}} />
											<Scene key="startFuelling" icon={this.renderPayIcon}  hideNavBar={true}  component={StartFuelling} title="Pay"/>
									</Scene>
									<Scene key="addLoyalityCardManually" component={AddLoyaltyCardManually} title="Add Card Manually"/>
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
									<Scene key="pushNotification" component={PushNotification} title="Push Notification" />
									<Scene key="promotionsdetails" component={PromotionsDetails} title="PromotionsDetails" />
									<Scene key="faqs" component={Faq} title="Frequently asked questions"/>
									<Scene key="paymentListCards" component={PaymentListCards} title="Select Payment"/>
									<Scene key="fuelFilling" component={FuelFilling} title="Select Payment"/>
									<Scene key="paymentSuccessfull" component={PaymentSuccessfull} title="Payment Successfull"/>
									<Scene key="paymentBillingScreen" component={PaymentBillingScreen} title="Add Card"/>
									<Scene key="addCreditCardForPayment" component={AddCreditCardForPayment} title="Add Card"/>
									<Scene key="vouchers"  component={VoucherList} title="Vouchers"/>
							</Scene>
					</Scene>
			</Router>
		);
	}
}
