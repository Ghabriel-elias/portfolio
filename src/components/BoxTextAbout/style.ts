import styled from "styled-components";

export const Container = styled.div`
  width: 50%;
  padding: 2rem;
`;

export const TextContent = styled.div`
  padding-top: 6rem;
`;

export const LineSeparator = styled.div`
  width: 100%;
  height: 2px;
  margin-bottom: 1rem;
  background-color: ${({theme}) => theme.colors.text};
`;