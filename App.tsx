import './gesture-handler';

import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';

import DrawerNavigation from './src/components/navigation/DrawerNavigation';
import { store } from './src/redux/store';

function App(): React.JSX.Element {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <DrawerNavigation />
      </NavigationContainer>
    </Provider>
  );
}

export default App;
