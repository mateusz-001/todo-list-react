import styled from 'styled-components';

export const Header = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.xl};
  color: ${({ theme }) => theme.colors.lightGrey};
  font-family: 'Ubuntu', sans-serif;
  font-weight: 300;
  border-bottom: 1px solid rgba(255, 255, 255, 0.18);
  flex-basis: 100%;
  padding: 0 10px 10px 10px;
`;
