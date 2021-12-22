import React from 'react';
import { BackgroundElement } from 'components/atoms/BackgroundElement';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  height: 100%;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #121212;
`;

const Background = ({ children }) => {
  return (
    <Wrapper>
      <BackgroundElement />
      <BackgroundElement />
      <BackgroundElement />
      {children}
    </Wrapper>
  );
};

export default Background;
