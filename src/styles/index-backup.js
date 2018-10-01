import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
  },
  logo: {
    flex: 5,
    //  backgroundColor: "gray",
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    flex: 4,
    // fontFamily: 'Roboto-Regular',
   // backgroundColor: "orange",
    justifyContent:'space-around'
  },
  text: {
    color: 'rgb(15,113,184)',
    marginLeft: 5.3,
    //fontFamily: 'Roboto-Medium',
  },
  forgot: {
    color: 'rgb(15,113,184)',
    justifyContent: 'center',
    marginRight: 5.3,
  },
  afterinput: {
    flex: 1,
    //  backgroundColor: "pink",
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
  },
  button: {
    flex: 4,
    //  backgroundColor: "yellow",
    justifyContent: 'center',
  },
  buttons1: {
    width: 350,
    backgroundColor: '#1973b5',
    borderRadius: 10,
    marginVertical: 2, // for spacing b/n pass and button
    paddingVertical: 10, // button size,
    marginLeft: 5.3,
    marginTop: 10,
  },
  buttons2: {
    width: 350,
    backgroundColor: '#d74839',
    borderRadius: 10,
    marginVertical: 2, // for spacing b/n pass and button
    paddingVertical: 10, // button size,
    marginLeft: 5.3,
    marginTop: 10,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '500',
    color: 'white',
    textAlign: 'center',
  },
  buttonText1: {
    fontSize: 16,
    fontWeight: '500',
    color: 'white',
    textAlign: 'center',
  },
  account: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },

  // Forgot Password styles

  forgotpasswordcontainer: {
    flex: 1,
  },

  forgotpasswordview1: {
    flex: 2,
    // backgroundColor: "red",
  },
  forgotpasswordview1text: {
  //  fontFamily: 'Roboto-Regular',
    marginLeft: 5.7,

    marginTop: 6.7,
    color: 'black',
  },
  forgotpasswordview2: {
    flex: 5,
    //height:20
    //justifyContent:'space-around'
   //backgroundColor: "yellow",
  },
  forgotpasswordview2text: {
    color: 'rgb(15,113,184)',
    marginLeft: 5.3,
    //fontFamily: 'Roboto-Medium',
  },
  forgotpasswordview3: {
    flex: 6,
    // backgroundColor: "yellow",
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  forgotpasswordview3button: {
    width: 350,
    backgroundColor: '#1973b5',
    borderRadius: 10,
    marginVertical: 2, // for spacing b/n pass and button
    paddingVertical: 10, // button size,
    marginLeft: 5.3,
    marginRight: 5.3,
  },
  forgotpasswordview3buttonText: {
    fontSize: 16,
    fontWeight: '500',
    color: 'white',
    textAlign: 'center',
  },
});

export default styles;
