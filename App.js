import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import React, {Component} from 'react';
import SplashScreen from 'react-native-splash-screen';

import Main from './src/Main';
import store from './src/config/store';

const persist = store();
// test
class App extends Component {

   componentDidMount() {

    setTimeout(function(){
      SplashScreen.hide()
    }, 2000);
  }

  render(){
    return(
      <Provider store={persist.store}>
        <PersistGate loading={null} persistor={persist.persistor}>
          <Main />
        </PersistGate>
      </Provider>
    )
  }
}

export default App;
