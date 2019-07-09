import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  font-family: 'Open Sans', sans-serif;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  width: 500px;
  height: 40%;
`;

export const Title = styled.h1`
  color: black;
  font-size: 2.5rem;
  font-weight: 700;
`;

export const Paragraph = styled.p`
  color: black;
  font-size: 1rem;
`;

export const Link = styled.a`
  color: #00a8e8;
`;
