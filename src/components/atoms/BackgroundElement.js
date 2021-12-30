import styled from 'styled-components';

export const BackgroundElement = styled.div`
  width: 200px;
  height: 200px;
  position: absolute;
  top: -50px;
  left: -50px;
  border: none;
  border-radius: 50%;
  box-shadow: inset -25px -15px 40px rgba(0, 0, 0, 0.3);
  background-color: rgb(49, 0, 133);
  background-image: linear-gradient(146deg, rgba(49, 0, 133, 1) 20%, rgba(100, 57, 255, 1) 100%);
  &:nth-child(2) {
    top: 75%;
    left: 30%;
    background-color: rgb(133, 0, 123);
    background-image: linear-gradient(197deg, rgba(133, 0, 123, 1) 20%, rgba(183, 57, 255, 1) 100%);
  }
  &:nth-child(3) {
    top: 30%;
    left: 30%;
    background-color: rgb(100, 0, 122);
    background-image: linear-gradient(180deg, rgba(100, 0, 122, 1) 20%, rgba(0, 39, 255, 1) 100%);
  }
  @media ${({ theme }) => theme.mediaQuery.laptop} {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(50%, -50%);
    &:nth-child(2) {
      transform: translate(calc(150px - 50%), calc(50px - 50%));
    }
    &:nth-child(3) {
      transform: translate(calc(300px - 50%), calc(-50px - 50%));
    }
  }
`;
