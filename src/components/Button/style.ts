import styled from "styled-components";
import themesDark from "../../global/themesDark";

interface ButtonProps {
    bgColor: keyof typeof themesDark.colors; 
    textColor: keyof typeof themesDark.colors; 
}

export const ContainerButton = styled.div<ButtonProps>`
    cursor: pointer;
    padding: 10px;
    display: flex;
    background-color: ${({theme, bgColor}) => theme.colors[bgColor]};
    color: ${({theme, textColor}) => theme.colors[textColor]};
    justify-content: center;
    width: 8rem;
    height: 1.3rem;
    align-items: center;
    border-radius: 16px;
`;