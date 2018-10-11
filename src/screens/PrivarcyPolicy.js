import { connect } from 'react-redux';
import React,{Component} from 'react';
import {
    Text,
    View,
    FlatList,Platform
  } from 'react-native';
import { Icon } from "react-native-elements";
import { Toolbar } from "../components";
import { navigateBack } from "../helpers";
import { navigateTo } from "../helpers";
import styles from './../styles'

class PrivacyPolicy extends Component{
    constructor(props){
        super(props);
        this.state={
            data:[
                {header:'Policy One',content:'The React documentation assumes some familiarity with programming in the JavaScript language. You don’t have to be an expert, but it’s harder to learn both React and JavaScript at the same time.We recommend going through this JavaScript overview to check your knowledge level. It will take you between 30 minutes and an hour but you will feel more confident learning React.'},
                {header:'Policy Two',content:'If you prefer to learn by doing, check out our practical tutorial. In this tutorial, we build a tic-tac-toe game in React. You might be tempted to skip it because you’re not building games — but give it a chance. The techniques you’ll learn in the tutorial are fundamental to building any React apps, and mastering it will give you a much deeper understanding'}
            ]
        }
    }

    render(){
        return (
             <View style={styles.PrivacytContainer}>
                <Toolbar
                    style={[styles.noBorderToolbar,{borderBottomWidth:1,borderBottomColor:'rgb(204, 204, 204)'}]}
                    onClickLeftIcon={navigateBack}
                    iconName="back-arrow"
                    title={this.props.title} />
                <FlatList
                    data={ this.state.data }
                    renderItem={({item}) =>
                        <View style={styles.TermsAndConditionsTextView}>
                            <Text style={styles.headerText} >{item.header}</Text>
                            <Text style={styles.contentText} >{item.content}</Text>
                        </View>
                    }
                    keyExtractor={(item) => item.header}
                />
             </View>
        );
    }
}




const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(PrivacyPolicy);
