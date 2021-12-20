import React from 'react';
import { BackgroundElement } from 'components/atoms/BackgroundElement';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
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
