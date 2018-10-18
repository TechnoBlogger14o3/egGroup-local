import { connect } from 'react-redux';
import React, { Component } from 'react';
import { View, Text,
    FlatList,Image,ImageBackground,
    RefreshControl , Modal,ScrollView
 } from 'react-native';
import { Icon } from "react-native-elements";
import LinearGradient from 'react-native-linear-gradient';
import { InputText, Button, Toolbar,CardItem } from "../components";
import { navigateBack,navigateTo } from "../helpers";

import screenstyles from "../styles/screenStyles";

class CoupensList extends Component {

    constructor(props){
        super(props);
        this.state={
            products:[
              {store:'KFC',image:'bk3.jpg',cashOff:'2',coupenCode:'7DJHZ SHGY E',coupenValidity:'JAN 12 2019',currencyIcon:'\u20AC',barCode:''},
              {store:'Subway',image:'subway.jpg',cashOff:'2',coupenCode:'SUBWAY SHGY E',coupenValidity:'DEC 12 2019',currencyIcon:'\u20AC',barCode:''},
              {store:'Burger King',image:'bk.jpg',cashOff:'10',coupenCode:'GDOEWS SHGY T',coupenValidity:'NOV 15 2018',currencyIcon:'\u20AC',barCode:''},
              {store:'Star bucks',image:'star2.jpg',cashOff:'5',coupenCode:'7DJHZ SHGY E',coupenValidity:'JUL 12 2019',currencyIcon:'\u20AC',barCode:''},
              {store: 'KFC',image:'kfc3.jpg',cashOff:'3',coupenCode:'7DUOE SHGY Y',coupenValidity:'JAN 15 2018',currencyIcon:'\u20AC',barCode:''},
              {store:'GREGGS',image:'greggs.jpg',cashOff:'2',coupenCode:'GDOEWS SHGY E',coupenValidity:'NOV 12 2018',currencyIcon:'\u20AC',barCode:''},
              {store:'Subway',image:'subway2.jpg',cashOff:'20',coupenCode:'SUBWAY SHGY E',coupenValidity:'AUG 15 2028',currencyIcon:'\u20AC',barCode:''},
              {store:'Burger King',image:'bk3.jpg',cashOff:'6',coupenCode:'7DJHZ SHGY 4',coupenValidity:'AUG 12 2018',currencyIcon:'\u20AC',barCode:''},
              {store:'KFC',image:'kfc.jpg',cashOff:'15',coupenCode:'7DJHZ SHGY E',coupenValidity:'NOV 12 2025',currencyIcon:'\u20AC',barCode:''},
              {store:'GREGGS',image:'greggs2.jpg',cashOff:'10',coupenCode:'GDOEWS SHGY E',coupenValidity:'JAN 12 2018',currencyIcon:'\u20AC',barCode:''},
              {store:'Star Bucks',image:'star.jpg',cashOff:'50',coupenCode:'7DJHZ SHGY T',coupenValidity:'NOV 15 2018',currencyIcon:'\u20AC',barCode:''},
          ],
          modalVisible: false,
        }
      }

    state={
        modalVisible: false,
    }

    toggleModal(visible) {
        this.setState({ modalVisible: visible });
    }

      _getProducts = (page = 1, limit = 5) => {
        //this.props.actions.getProducts(page, limit);
      };

      /*  flat list supporting methods */

    _getMore = () => {
        this._getProducts(++this.props.page, this.props.limit);
    };

    _renderItem = ({ index, item }) => {
      console.log(item);
        return (
            <CardItem
                  {...this.props}
                  cashOff={item.cashOff}
                  coupenCode={item.coupenCode}
                  coupenValidity={item.coupenValidity}
                  store={item.store}
                  currencyIcon={item.currencyIcon}
                  image={item.image}
                  onPress={()=>this.toggleModal(true)}
            />
        );
     };

      _keyExtractor = (item, index) => {
        return index+"";
      };

      _onRefresh = () => {
        //this.setState({ isRefreshing: true });
        this._getProducts();
      };

      _renderRefreshControl() {
        return (
          <RefreshControl
            onRefresh={this._onRefresh}
            refreshing={this.props.isRefreshing}
            tintColor={"#00ff80"}
            title={"Refreshing..."}
            titleColor={"#00ff80"}
          />
        );
      }




  render() {
      return (
        <View style={[screenstyles.appContainer, screenstyles.whiteBackground]}>
            <Toolbar
                  style={[screenstyles.noBorderToolbar,{borderBottomWidth:1,borderBottomColor:'rgb(204, 204, 204)'}]}
                  onClickLeftIcon={navigateBack}
                  iconName="back-arrow"
                  title="Coupons" />
            <View style={[this.state.modalVisible ? { backgroundColor: 'rgba(0,0,0,1)' } : '']}>
                <Modal
                  animationType={"fade"}
                  transparent={true}
                  visible={this.state.modalVisible}
                  onRequestClose={() => { }}>
                      <View style={{flex: 1, backgroundColor: "rgba(0, 0, 0, 0.6)"}}>
                        <ScrollView>
                            <View style={screenstyles.CouponmodalView} >
                                <View>
                                    <ImageBackground
                                        style={screenstyles.CouponImageStyle}
                                        source={require('./../assets/images/mask.png')}>
                                        <View style={screenstyles.CouponIconStyle}>
                                            <Icon
                                                onPress={() => { this.toggleModal(!this.state.modalVisible) }}
                                                reverseColor='red'
                                                color='white'
                                                name="cancel"
                                                size={24}
                                            />
                                        </View>
                                    </ImageBackground>
                                </View>
                                    <Text style={screenstyles.CouponOffText}>€2 OFF</Text>
                                    <Text style={screenstyles.CouponCodeText}>Coupon Code</Text>
                                    <LinearGradient style={screenstyles.CoupnSubwayText} start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={['#339933', '#006666', '#003366']}>
                                    <Text style={screenstyles.CouponSubwayTextColor}>SUBWAY OFF</Text>
                                    </LinearGradient>

                                <Image
                                    style={screenstyles.CouponBarcodeImage}
                                    source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTa8mHRczu1flp3Evh0M9wM4tppSxHWYeBzfANDH-nbDlSxdgK6Rg' }} />
                                <View style={screenstyles.CouponSpace}>
                                    <Text style={screenstyles.CouponTermsText}>Terms & Conditions to redeem the </Text>
                                    <Text style={screenstyles.CouponTermsText}>coupon</Text>
                                </View>
                                <View style={screenstyles.CouponSpaceText}>
                                    <Text style={screenstyles.CouponTextColor}>€2 OFF in your next purchase.  Lorem Ipsum is</Text>
                                    <Text style={screenstyles.CouponTextColor}>simply dummy text of the printing and</Text>
                                    <Text style={screenstyles.CouponTextColor}>typesetting industry. Lorem Ipsum has been the</Text>
                                    <Text style={screenstyles.CouponTextColor}>industry standard.</Text>
                                </View>
                                <View style={screenstyles.CouponValidityText}>
                                    <Text style={screenstyles.CouponValidTextDesign}>Valid till 02 Nov 2018</Text>
                                </View>
                            </View>
                        </ScrollView>
                      </View>
                    </Modal>
             </View>

           <FlatList
            data={this.state.products}
            renderItem={this._renderItem}
            keyExtractor={this._keyExtractor}
            onEndReachedThreshold={0.5}
            onEndReached={this._getMore}
            refreshControl={this._renderRefreshControl()}
          />


         </View>
      );
    }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(CoupensList);
