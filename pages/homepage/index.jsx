import React, { useState, useEffect } from 'react';
import { StyledHomePage } from 'styles/StyledHomePage/StyledHomePage';
import { LoginScreen } from '../../containers/HomeSections/LoginScreen';
import { MainScreen } from '../../containers/HomeSections/MainScreen';
import { MessageScreen } from '../../containers/HomeSections/MessageScreen';
import { GiftScreen } from '../../containers/HomeSections/GiftScreen';

const HomePage = () => {
  const [component, setComponent] = useState('login');

  const renderComponent = () => {
    switch (component) {
      case 'login':
        return <LoginScreen setComponent={setComponent} />;
      case 'main':
        return <MainScreen setComponent={setComponent} />;
      case 'message':
        return <MessageScreen setComponent={setComponent} />;
      case 'gift':
        return <GiftScreen setComponent={setComponent} />;
    
      default:
        return <LoginScreen setComponent={setComponent} />;
    }
  }

  useEffect(() => {
    console.log('component:', component)
  }, [component])
  return (
    <StyledHomePage>
      {renderComponent()}
    </StyledHomePage>
  );
};

export default HomePage;
