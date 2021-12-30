import styled from 'styled-components';

export const Text = styled.p`
  font-weight: 300;
  font-size: ${({ isBig, theme }) => (isBig ? theme.fontSize.l : theme.fontSize.s)};
  color: ${({ theme }) => theme.colors.lightPurple};
  text-align: ${({ isBig }) => (isBig ? 'center' : 'left')};
  margin: ${({ navText }) => (navText ? '0 0 5px 0' : '5px auto')};

  @media ${({ theme }) => theme.mediaQuery.mobileL} {
    margin: ${({ navText }) => (navText ? '0 0 5px 0' : '5px auto')};
  }

  @media ${({ theme }) => theme.mediaQuery.tablet} {
    margin: ${({ navText }) => (navText ? '0 0 5px 0' : '5px auto')};
    font-size: ${({ isBig, theme }) => (isBig ? theme.fontSize.xl : theme.fontSize.m)};
  }
`;
