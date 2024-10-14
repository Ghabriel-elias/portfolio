import { useState } from "react";
import themesLight from "../../global/themesLight";
import themesDark from "../../global/themesDark";
import { GlobalTextComponent } from "../GlobalTextComponent";
import * as S from './style'

interface SelectSectionProps {
    handleClick: (selectedOption: string) => void;
    text: string;
    isSelected?: boolean;
}

export const SelectSection: React.FC<SelectSectionProps> = ({ handleClick, text, isSelected }) => {
  const [isHovered, setIsHovered] = useState(false);
  const savedTheme = localStorage.getItem("theme");
  const appliedTheme = savedTheme === 'dark' ? themesLight : themesDark;

  return (
    <S.Container
      onMouseEnter={() => setIsHovered(true)} 
      onMouseLeave={() => {
        setTimeout(() => {
          setIsHovered(false);
        }, 500);
      }}
      onClick={() => {
        handleClick(text)
      }} 
    >
      <span
        style={{
          width: isHovered || isSelected ? '80px' : '40px', 
          height: '2px',
          background: isHovered || isSelected ? appliedTheme.colors.background : appliedTheme.colors.greyColor,
          transition: 'width 0.3s ease, background 0.3s ease',
        }}
      />
      <GlobalTextComponent
        color={isHovered || isSelected ? 'text' : 'greyColor'}
        fontFamily='poppinsMedium'
        fontSize={15}
        text={text}
        style={{ 
          margin: 0, 
          marginLeft: 10,
          transition: 'color 0.3s ease', 
        }}
      />
    </S.Container>
  );
};  