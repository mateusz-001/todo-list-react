import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Wrapper } from './Root.styles';
import MainTemplate from 'components/templates/MainTemplate';

const Root = () => {
  return (
    <Router>
      <Wrapper>
        <MainTemplate></MainTemplate>
      </Wrapper>
    </Router>
  );
};

export default Root;
