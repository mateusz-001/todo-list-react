import styled from 'styled-components';

export const Label = styled.label`
  color: ${({ theme }) => theme.colors.lightGrey};
  opacity: 0.5;
  font-size: ${({ theme }) => theme.fontSize.l};
  font-family: 'Ubuntu', sans-serif;
  letter-spacing: 1.5px;
  flex-basis: 100%;
  padding: 10px 0 5px 15px;
`;
