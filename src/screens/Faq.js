import React, { Component } from "react";
import { View, ScrollView, Text, Image, StyleSheet, TouchableOpacity, Alert, Platform, FlatList } from "react-native";
import { InputText, Button, DatePicker, Toolbar, ExpandCollapseView } from "../components";
import { navigateBack, navigateTo, redirectTo } from "../helpers";
import screenstyles from "../styles";

class Faq extends Component {

  state = {
    showContent: false,
  data:[
    {faqTitle:'1. How does the app work?',faqDesc:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'},
    {faqTitle:'2. Where can i use this app?',faqDesc:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'},
    {faqTitle:'3. Why my card details will be safe?',faqDesc:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'},
    {faqTitle:'4. What happens if i lose my phone?',faqDesc:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'},
    {faqTitle:'5. What cards can i pay with?',faqDesc:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'}
]
  };

  showContentFunc = () => {
    this.setState({
      showContent: !this.state.showContent
    });
  };

      render() {
        return (
          <View style={[screenstyles.appContainer, screenstyles.whiteBackground]}>
            <Toolbar
                style={screenstyles.noBorderToolbar}
                onClickLeftIcon={navigateBack}
                iconName="back-arrow"
                title="Frequently asked questions"
                rightButtonName="" />
            <ScrollView>
                <FlatList
                    data={ this.state.data }
                    renderItem={({item}) =>
                      <ExpandCollapseView
                        title={item.faqTitle}
                        desc = {item.faqDesc} />
                    }
                    keyExtractor={(item) => item.faqTitle}
                  />
            </ScrollView>
          </View>
        );
      }
}

export default Faq;
