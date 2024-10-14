import styled from "styled-components";

export const Container = styled.div`
  margin: 0;
  padding: 0;
  background-color: ${({theme}) => theme.colors.background};
  display: flex;
`;

export const MainContent = styled.div`
  width: 50%; 
  height: 100%;
  display: flex;
  flex-direction: column;
  padding-right: 4rem;
`;

export const LineSeparator = styled.div`
  width: 100%;
  height: 2px;
  margin-bottom: 1rem;
  background-color: ${({theme}) => theme.colors.text};
`;