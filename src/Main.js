import { connect } from 'react-redux';
import React, { Component } from 'react';
import { StatusBar, View } from 'react-native';

import Routes from './components/Routes/index';

import styles from './styles';

class Main extends Component {
  render() {
    return (
      <View style={styles.appContainer}>
        <StatusBar
          backgroundColor="#ffffff"
          barStyle="dark-content"
        />
        <Routes />
      </View>
    );
  }
}

const mapStateToProps = () => ({});
const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Main);
