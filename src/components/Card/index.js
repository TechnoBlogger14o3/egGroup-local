import React, { Component } from 'react';
import { View, Text, TouchableOpacity,StyleSheet,Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import componentstyles from "../../styles/componentStyles";

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
            voucherCode,
            voucherValidity,
            store,
            currencyIcon,
          } = this.props;
        return (

          <TouchableOpacity activeOpacity={0.5} onPress={this.props.onPress}>
              <View style={componentstyles.cardcontainer}>
                  <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={['#339933', '#006666', '#003366']} style={[componentstyles.cardView,this.props.styles]}>
                      <View style={[componentstyles.cardCoupenView,this.props.styles]}>
                          <View style={componentstyles.imageView}>
                                <View style={componentstyles.imageborderView}>
                                        <Image
                                                source={image ? { uri: image } : require("./../../assets/images/noimage.jpg")}
                                                style={componentstyles.image}
                                                resizeMode="contain"
                                            />
                                    </View>
                          </View>
                          <View style={componentstyles.contentContainer}>
                              <View style={componentstyles.containtStore}>
                                <Text style={componentstyles.storeTextStyle}>{store? store:'Undefined'}</Text>
                              </View>
                              <View style={componentstyles.containtText}>
                                <Text style={componentstyles.cashoffTextStyle}>{currencyIcon ? currencyIcon :''}{cashOff? cashOff:'0'} OFF in your in your next purchase</Text>
                              </View>

                          </View>
                          <View style={componentstyles.dottedView}></View>
                          <View style={componentstyles.coupenCodeView}>
                                <View style={componentstyles.CoupenCodeTextView}>
                                    <Text style={componentstyles.coupenCodeTextStyle}>Coupon Code</Text>
                                </View>
                                <View style={componentstyles.CoupenCodeText}>
                                    <Text style={componentstyles.codeTextStyle}>{voucherCode? voucherCode:'Code Not Found'}</Text>
                                </View>
                          </View>
                      </View>
                      <View style={[componentstyles.cardValidityView]}>
                            <View style={componentstyles.validityContentView}>
                              <Text style={componentstyles.validityText}>Validity till {voucherValidity? voucherValidity:'DD MMM YYYY'}</Text>
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
