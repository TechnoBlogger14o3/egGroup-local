import React, { Component } from 'react';
import { View, Text, TouchableOpacity,StyleSheet,Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styles from './../../styles';
const defaultProps = {
    title: "Card",
    onPress: () => {},
    color: "#333333"
}

class CardItem extends Component {

    render() {
        let {
            image,
            cashOff,
            coupenCode,
            coupenValidity,
            store,
            currencyIcon,
          } = this.props;
        return (

          <TouchableOpacity activeOpacity={0.5} onPress={this.props.onPress}>
              <View style={styles.cardcontainer}>
                  <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={['#339933', '#006666', '#003366']} style={[styles.cardView,this.props.styles]}>
                      <View style={[styles.cardCoupenView,this.props.styles]}>
                          <View style={styles.imageView}>
                                <View style={styles.imageborderView}>
                                        <Image
                                                source={image ? { uri: image } : require("./../../assets/images/noimage.jpg")}
                                                style={styles.image}
                                                resizeMode="contain"
                                            />
                                    </View>
                          </View>
                          <View style={styles.contentContainer}>
                              <View style={styles.containtStore}>
                                <Text style={styles.storeTextStyle}>{store? store:'Undefined'}</Text>
                              </View>
                              <View style={styles.containtText}>
                                <Text style={styles.cashoffTextStyle}>{currencyIcon ? currencyIcon :''}{cashOff? cashOff:'0'} OFF in your in your next purchase</Text>
                              </View>

                          </View>
                          <View style={styles.dottedView}></View>
                          <View style={styles.coupenCodeView}>
                                <View style={styles.CoupenCodeTextView}>
                                    <Text style={styles.coupenCodeTextStyle}>Coupon Code</Text>
                                </View>
                                <View style={styles.CoupenCodeText}>
                                    <Text style={styles.codeTextStyle}>{coupenCode? coupenCode:'Code Not Found'}</Text>
                                </View>
                          </View>
                      </View>
                      <View style={[styles.cardValidityView]}>
                            <View style={styles.validityContentView}>
                              <Text style={styles.validityText}>Validity till {coupenValidity? coupenValidity:'DD MMM YYYY'}</Text>
                            </View>
                      </View>
                   </LinearGradient>
               </View>
          </TouchableOpacity>
        );
    }
}

CardItem.defaultProps = defaultProps;

export default CardItem;
