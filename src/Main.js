/**
* @author Vineet Mishra <vineet.m@photoninfotech.net>
* @version 1.0.0
* @summary Adding routes component and status bar
*/

// Import npm modules
import {connect} from "react-redux";
import React, {Component} from "react";
import {StatusBar, View} from "react-native";
import { AccessToken, GraphRequest, GraphRequestManager, LoginManager  } from 'react-native-fbsdk';

// Import custom classes
import Routes from "./components/Routes/index";

// Import styles
import styles from "./styles";

/**
* Represents Main class.
* @class Main
* @extends Component
*/
class Main extends Component {

    componentDidMount() {
        AccessToken.getCurrentAccessToken().then(
          (data) => {
              const infoRequest = new GraphRequest(
                '/me',
                {
                  accessToken: data.accessToken || "",
                  parameters: {
                    fields: {
                      string: 'email,name,first_name,middle_name,last_name,picture,id'
                    }
                  }
                },
                this.responseInfoCallback
              );
             new GraphRequestManager().addRequest(infoRequest).start();
           
          })
        }

        infoRequestNew(accessToken){
          const infoRequest = new GraphRequest(
            '/me',
            {
              accessToken: accessToken,
              parameters: {
                fields: {
                  string: 'email,name,first_name,middle_name,last_name,picture,id'
                }
              }
            },
            this.responseInfoCallback
          );
          // Start the graph request.
          new GraphRequestManager().addRequest(infoRequest).start();
          
        }
    /**
    * @function render
    * React render method for rendering the native elements
    */
    render() {
        return (
            <View style={styles.appContainer}>
                <StatusBar
                    backgroundColor="rgb(51, 51, 51)"
                    barStyle="light-content" />
                <Routes isLoggedin={this.props.isLoggedin} />
            </View>
        );
    }
}

/**
* Converting redux state to props for the Main component
* @function mapStateToProps
* @params {object} state
* @returns {object} props
*/
const mapStateToProps = state => ({
    isLoggedin: state.auth.isLoggedin
});

/**
* Converting redux state to props for the Main component
* @function mapDispatchToProps
* @params {function} dispatch
* @returns {object} props
*/
const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Main);
