import styled from "styled-components";

export const LineSeparator = styled.div`
    width: 100%;
    height: 2px;
    margin-bottom: 2rem;
    background-color: ${({theme}) => theme.colors.text};
`;

export const Container = styled.div`
    padding-top: 2rem;
`;