import styled from 'styled-components';

export const Header = styled.h1`
  font-size: ${({ isSmall, theme }) => (isSmall ? theme.fontSize.l : theme.fontSize.xl)};
  color: ${({ theme }) => theme.colors.lightGrey};
  font-family: 'Ubuntu', sans-serif;
  font-weight: 300;
  border-bottom: 1px solid rgba(255, 255, 255, 0.18);
  flex-basis: 100%;
  margin: 10px auto;
  padding: ${({ isSmall }) => (isSmall ? '0' : '0 10px 10px 10px')};

  @media ${({ theme }) => theme.mediaQuery.tablet} {
    font-size: ${({ isSmall, theme }) => (isSmall ? theme.fontSize.l : theme.fontSize.xxl)};
  }
`;
