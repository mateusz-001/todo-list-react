import styled from 'styled-components';

export const Card = styled.div`
  width: 320px;
  min-height: 580px;
  height: auto;
  background: rgba(255, 255, 255, 0.06);
  box-shadow: 0 8px 6px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(7px);
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  transition: 0.3s;

  @media ${({ theme }) => theme.mediaQuery.mobileL} {
    width: 380px;
  }

  @media ${({ theme }) => theme.mediaQuery.tablet} {
    width: 550px;
    min-height: 680px;
  }
`;
