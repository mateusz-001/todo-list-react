import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 20px;
  justify-content: center;
  @media ${({ theme }) => theme.mediaQuery.tablet} {
    max-width: 85%;
    margin: 0 auto;
    justify-content: center;
  }
`;

export const TaskWrapper = styled.div`
  width: 100%;
  height: auto;
`;
