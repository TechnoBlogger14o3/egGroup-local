import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import React from 'react';

import Main from './src/Main';
import store from './src/config/store';

const persist = store();
// test
const App = () => (
  <Provider store={persist.store}>
    <PersistGate loading={null} persistor={persist.persistor}>
      <Main />
    </PersistGate>
  </Provider>
);

export default App;
