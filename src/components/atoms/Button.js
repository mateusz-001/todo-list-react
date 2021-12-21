import styled from 'styled-components';

export const Button = styled.button`
  background-color: rgba(255, 255, 255, 0.1);
  box-shadow: 0 10px 8px 0 rgba(0, 0, 0, 0.2);
  border: none;
  border-top: 1px solid rgba(255, 255, 255, 0.18);
  border-radius: 12px;
  width: 150px;
  padding: 7px;
  margin-top: 10px;
  color: ${({ theme }) => theme.colors.darkPurple};
  font-size: ${({ theme }) => theme.fontSize.l};
  font-family: 'Ubuntu';
  font-weight: 500;
  word-spacing: 2px;
  line-height: 1.4;
  position: relative;
  &:focus {
    box-shadow: 0 0px 6px 6px rgba(48, 0, 110, 0.7);
    outline: none;
  }
`;
