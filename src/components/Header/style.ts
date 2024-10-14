import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    position: absolute;
    padding-top: 1rem;
    padding-bottom: 1rem;
    /* z-index: 10; */
    right: 2rem;
    background-color: ${({theme}) => theme.colors.background};
`;

export const IconContainer = styled.div`
    cursor: pointer;
    padding: 0.6rem;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 1rem;
    transform: scale(1.0);
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.15);
    background-color: ${({theme}) => theme.colors.bgIconHeader};
`;

export const BoxDropDown = styled.div`
    position: absolute;
    top: calc(100% + 0.5rem);
    right: 0;
    background-color: ${({theme}) => theme.colors.bgDropDown};
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    padding: 0.5rem 0rem;
    width: 5rem;
    z-index: 10;
`;

export const DropDownSelect = styled.div`
    padding: 0.5rem;
    cursor: pointer;
    color: #333;
    padding-left: 1rem;
`;