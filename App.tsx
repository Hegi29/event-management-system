import './gesture-handler';

import React from 'react';

import { NavigationContainer, useNavigationContainerRef } from '@react-navigation/native';

import DrawerNavigation from './src/components/navigation/DrawerNavigation';

function App(): React.JSX.Element {
  const navigationRef = useNavigationContainerRef();

  return (
      <NavigationContainer ref={navigationRef}>
        <DrawerNavigation navigationRef={navigationRef}/>
      </NavigationContainer>
  );
}

export default App;
