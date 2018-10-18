/**
* @author Arun Kukkudapu <kukkudapu.arun@photoninfotech.net>
* @version 1.0.0
* @summary This is a component for conversion of km to miles
*/

import React from 'react';
import {View,Text,StyleSheet,TouchableOpacity} from 'react-native';

/**
* Represents Component.
* @class Converter
* @extends Component
*/
export default class Converter extends React.Component{
    constructor(props){
        super(props);
        this.state={
            km:true,
            miles:false,
            bgColorkm:'rgb(15,113,184)',
            textcolorkm:'white',
            textcolorMiles:'black'
        }
    }
    /*
        converttokm function is invoked when user pressed on km button. whenever user wants to see distance in km,
        and this function will invoke selectedDistype which is passes as props while calling converter component.
    */

    converttokm = ()=>{
        this.setState({
            bgColorkm:'rgb(15,113,184)',
            bgColorMiles:'white',
            textcolorkm:'white',
            textcolorMiles:'black'
        })
        this.props.selectedDistype("km");
    }
    /*
        convertomiles function is invoked when user pressed on km button. whenever user wants to see distance in km,
        and this function will invoke selectedDistype which is passes as props while calling converter component.
    */
    converttomiles = ()=>{
        this.setState({
            bgColorkm:'white',
            bgColorMiles:'rgb(15,113,184)',
            textcolorMiles:'white',
            textcolorkm:'black'
        })
        this.props.selectedDistype("miles");
    }

    /**
    * @function render
    * React render method for rendering the native elements
    */
    render(){
        return(
            <View style={styles.kmtomileconverter}>
            <TouchableOpacity onPress={this.converttokm} style={[styles.km,{backgroundColor:this.state.bgColorkm,color:'red'}]}>
            <View>
                <Text style={{color:this.state.textcolorkm}}>KM</Text>
            </View>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.miles,{backgroundColor:this.state.bgColorMiles,color:this.state.color}]} onPress={this.converttomiles}>
            <View>
                 <Text style={{color:this.state.textcolorMiles}}>MILES</Text>
           </View>
           </TouchableOpacity>
           </View>


        )
    }
}

const styles = StyleSheet.create({
    km:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    },
    miles:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    },
    kmtomileconverter:{
        flex:1,
        flexDirection:'row',
        borderColor:'rgb(15,113,184)',
        borderRadius:5,
        borderWidth:3
    },


});
