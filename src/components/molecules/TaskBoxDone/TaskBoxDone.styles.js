import styled from 'styled-components';

export const Wrapper = styled.div`
  flex-basis: 100%;
  height: 110px;
  display: flex;
  justify-content: space-between;
  border: 1px solid rgba(255, 255, 255, 0.18);
  box-shadow: 0 8px 8px 1px rgba(0, 0, 0, 0.2);
  border-radius: 12px;
  padding: 5px 15px;
  margin-bottom: 10px;
`;

export const ContentWrapper = styled.div`
  flex-basis: 80%;
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
  padding-right: 10px;
`;

export const ButtonWrapper = styled.div`
  flex-basis: 10%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;
