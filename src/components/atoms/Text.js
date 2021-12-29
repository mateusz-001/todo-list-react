import styled from 'styled-components';

export const Text = styled.p`
  font-weight: 300;
  font-size: ${({ isBig, theme }) => (isBig ? theme.fontSize.l : theme.fontSize.m)};
  color: ${({ theme }) => theme.colors.lightPurple};
  text-align: ${({ isBig }) => (isBig ? 'center' : '')};
  margin: ${({ navText }) => (navText ? '0 0 5px 0' : '5px auto')};
`;
