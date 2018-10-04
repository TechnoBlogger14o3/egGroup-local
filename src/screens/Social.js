import React,{Component,PropTypes} from 'react';
import {Text,View,TouchableOpacity,StyleSheet,Image} from 'react-native';
import {GoogleSignin, GoogleSigninButton,statusCodes} from 'react-native-google-signin';

class Social extends Component{
    constructor(props){
        super(props)
        this.state={
            userinfo:'',
            error:'',
            user:''
        }
    }

    componentDidMount() {
      
      this.configureGoogleSignIn();
      }
      configureGoogleSignIn() {
        GoogleSignin.configure({
          webClientId: "597686954748-luo5e7ipa2fqiupmgv2dmpmoh4rat840.apps.googleusercontent.com",
          offlineAccess: false,
        });
      }

    googleLogIn = () => {
     GoogleSignin.hasPlayServices()
            .then(() => {
              GoogleSignin.signIn()
                .then((user) => {
                  console.log('user==>> : ',user);
                  this.setState({user: user});
                
                  if(user.photo === null){
                    console.log('login without picture');
                    dispatch( loginWithSocial({
                      username: user.email,
                      token: user.id,
                      provider: 'google'
                    }));
                  }else {
                    console.log('login with picture')
                    dispatch(loginWithSocial({
                      username: user.email,
                      token: user.id,
                      provider: 'google',
                      imageUrl: user.photo
                    }));
                  }
                })
                .catch((err) => {
                  console.log('WRONG SIGNIN', err);
                })
                .done();
            });
       
      };
    

    render(){
        return(
            <View style={styles.container}>
               <TouchableOpacity style={styles.googleLoginButtonStyle} onPress={this.googleLogIn}>
                    <View style={styles.googleLoginViewStyle}>
                        <View style={styles.googleIconViewStyle}>
                            {/* <Image resizeMode="contain" style={{ height: 26, width: 26 }} source={Images.googleicon} /> */}
                        </View>
                        <View style={styles.googleTextViewStyle}>
                            <Text style={styles.googleLoginbuttonTexStyle}>Google</Text>
                        </View>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }

  
}

const styles = StyleSheet.create({
    container: {
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    },
  });

export default Social;