import styled from "styled-components";

export const LineSeparator = styled.div`
  width: 100%;
  height: 2px;
  margin-bottom: 1rem;
  background-color: ${({theme}) => theme.colors.text};
`;

export const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 90vh;
  width: 100%;
`;

export const BoxButtons = styled.div`
  display: flex; 
  flex-direction: row;
  align-items: center;
  gap: 10px;
`;