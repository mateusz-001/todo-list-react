import styled from 'styled-components';

export const Button = styled.button`
  background-color: rgba(255, 255, 255, 0.1);
  box-shadow: 0 10px 8px 0 rgba(0, 0, 0, 0.2);
  border: none;
  border-top: 1px solid rgba(255, 255, 255, 0.18);
  border-radius: ${({ isSmall }) => (isSmall ? '50%' : '12px')};
  width: ${({ isSmall }) => (isSmall ? '29px' : '150px')};
  height: ${({ isSmall }) => (isSmall ? '29px' : '40px')};
  padding: ${({ isSmall }) => (isSmall ? '6px' : '7px')};
  margin-top: ${({ isSmall }) => (isSmall ? '2px' : '10px')};
  color: ${({ theme }) => theme.colors.darkPurple};
  font-size: ${({ theme }) => theme.fontSize.l};
  font-family: 'Ubuntu';
  font-weight: 500;
  word-spacing: 2px;
  line-height: 1.4;
  position: relative;
  transition: 0.35s;
  display: flex;
  align-items: center;
  justify-content: center;
  &:focus,
  :hover {
    transform: scale(1.05);
    box-shadow: 0 0px 6px 4px rgba(48, 0, 110, 0.7);
    outline: none;
  }
  & svg {
    width: 100%;
    height: 100%;
    fill: ${({ theme }) => theme.colors.white};
    opacity: 0.7;
  }

  @media ${({ theme }) => theme.mediaQuery.tablet} {
    height: ${({ isSmall }) => (isSmall ? '29px' : '45px')};
  }
`;
