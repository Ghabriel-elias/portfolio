import React from "react"
import { GlobalTextComponent } from "../GlobalTextComponent"
import * as S from './style'
import themesDark from "../../global/themesDark"

interface ButtonProps {
    text: string; 
    bgColor: keyof typeof themesDark.colors; 
    textColor: keyof typeof themesDark.colors; 
    icon?: () => JSX.Element;
    handleButton: () => void;
}

export const Button = ({text, bgColor, icon, textColor, handleButton}: ButtonProps) => {
    return (
        <S.ContainerButton onClick={handleButton} textColor={textColor} bgColor={bgColor}>
            {icon ? icon() : null}
            <GlobalTextComponent
                color={textColor}
                fontFamily='poppinsMedium'
                fontSize={16}
                style={{margin: 0, marginLeft: 10}}
                text={text}
            /> 
        </S.ContainerButton>
    )
}