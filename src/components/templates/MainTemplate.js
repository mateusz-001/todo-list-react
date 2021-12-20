import React from 'react';
import { Card } from 'components/atoms/Card';
import Navigation from 'components/organisms/Navigation/Navigation';
import Background from 'components/molecules/Background/Background';

const MainTemplate = ({ children }) => {
  return (
    <Background>
      <Card>
        <Navigation />
        {children}
      </Card>
    </Background>
  );
};

export default MainTemplate;
