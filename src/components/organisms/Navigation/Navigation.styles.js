import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Wrapper = styled.nav`
  margin-top: -1px;
  flex-basis: 100%;
  height: 71px;
  display: flex;
  justify-content: flex-end;
  padding-right: 15px;
`;

export const Link = styled(NavLink)`
  padding: 0 10px;
  margin: 0 5px;
  width: 48px;
  height: 60px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  border-top: none;
  border-radius: 0 0 10px 10px;
  color: ${({ theme }) => theme.colors.white};
  text-align: center;
  font-size: ${({ theme }) => theme.fontSize.s};
  text-decoration: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  flex-direction: row;
  align-items: center;
  transition: 0.35s;
  position: relative;

  &.active {
    transition: 0.35s;
    height: 65px;
    background-color: white;
    & svg {
      fill: ${({ theme }) => theme.colors.darkGrey};
      stroke: ${({ theme }) => theme.colors.darkGrey};
    }
    & p {
      color: ${({ theme }) => theme.colors.darkGrey};
    }
  }

  @media ${({ theme }) => theme.mediaQuery.tablet} {
    font-size: ${({ theme }) => theme.fontSize.m};
    width: 55px;
    height: 70px;
    &.active {
      height: 75px;
    }
  }
`;
