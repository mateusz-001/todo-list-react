import styled from 'styled-components';

export const Input = styled.input`
  background-color: rgba(255, 255, 255, 0.1);
  box-shadow: 0 10px 8px 0 rgba(0, 0, 0, 0.2);
  border: none;
  border-top: 1px solid rgba(255, 255, 255, 0.18);
  border-radius: 12px;
  width: 250px;
  height: ${({ isTextArea }) => (isTextArea ? '200px' : 'auto')};
  resize: none;
  padding: 7px;
  color: ${({ theme }) => theme.colors.lightGrey};
  font-size: ${({ theme }) => theme.fontSize.m};
  font-family: 'Ubuntu';
  font-weight: 200;
  letter-spacing: 1.5px;
  line-height: 1.4;
  transition: 0.3s;
  &:focus {
    box-shadow: 0 0px 6px 4px rgba(48, 0, 110, 0.7);
    outline: none;
  }
`;
