import React, { Component } from 'react';
import {Platform, StyleSheet, Text, View, FlatList, Button, Image, AppRegistry, Modal} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

export class Promotion extends Component {
  render() {
    return (
      <View>
        <FlatList
          data={[
            {promo: 'GET 20', validitytext: "Valid till 02 Nov 2018"},
            {promo: 'PROMO10', validitytext: "Valid till 02 Nov 2018"},
            {promo: 'GET 20', validitytext: "Valid till 02 Nov 2018"},
            {promo: 'PROMO10', validitytext: "Valid till 02 Nov 2018"},
            {promo: 'GET 20', validitytext: "Valid till 02 Nov 2018"},
            {promo: 'PROMO10', validitytext: "Valid till 02 Nov 2018"},
            {promo: 'GET 20', validitytext: "Valid till 02 Nov 2018"},
            {promo: 'PROMO10', validitytext: "Valid till 02 Nov 2018"},
          ]}
          renderItem={({item}) => 
          <View style={styles.mainContainer}>

        <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={['#339933', '#006666', '#003366']} style={styles.gradientContainer}>
        <Text style={{ flex: 1, fontSize: 18, alignSelf: 'center', color: 'white', paddingLeft: 10 }}>20% {"\n"}OFF</Text> 
        <View  style={styles.descriptionContainer}>
          <Text style={{ color: 'white', marginTop: 8 }}>Fill fuel above €20 in Esso petrol {"\n"}bunk and get 20% OFF in KFC {"\n"}chicken.</Text>
        <View style={styles.promoContainer}>
          <Text style={ styles.promoCodeText }>Promo Code</Text>
          <LinearGradient style={styles.promoBorder} start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={['#339933', '#006666', '#003366']}>
            <Text style={styles.promoText}>{item.promo}</Text>
          </LinearGradient>
        </View>
        </View>
        </LinearGradient>

          <Text style={styles.validityStyle}>{item.validitytext}</Text> 
          </View>
        }
        />
        <Button onPress={() => this.props.navigation.navigate('Test')} title="Test"/>
      </View>   
    )
  }
}




const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'column',
    backgroundColor: '#ffffff',
    overflow: 'hidden',
    borderRadius: 5,
    borderColor: '#d8d8d8',
    borderWidth: 1,
    height: 150,
    marginTop: 15,
    marginLeft: 16, 
    marginRight: 16,
    marginBottom: 16
   },
   validityStyle: {
    color: '#333333',
    fontSize: 12,
    textAlign: 'left',
    padding: 8,
    },
  gradientContainer: {
    flex: 1,
    backgroundColor: '#d8dbd8',
    flexDirection: 'row'
    },
    descriptionContainer: {
      flexDirection: 'column',
      flex:5
      },
      promoContainer: {
        flexDirection: 'row',
        marginTop: 10
        },
  bigblue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 20,
    borderColor: 'black',
    borderWidth: 1
},
linearGradient: {
  paddingLeft: 15,
  paddingRight: 15,
  borderRadius: 5,
  height: 50
},
promoCodeText: {
  color: '#fff',
  fontSize: 14,
  marginTop: 10
},
promoBorder: {
  justifyContent: 'center',
  alignSelf: 'center',
  width: 140,
  padding: 5,
  marginTop: 5,
  marginLeft: 10
},
promoText: {
  color: 'white',
  textAlign: 'center'
},
});

export default Promotion;