import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Wrapper = styled.nav`
  margin-top: -1px;
  flex-basis: 100%;
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
  align-items: center;
`;
