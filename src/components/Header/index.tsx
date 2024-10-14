import { useState } from "react";
import { GlobalTextComponent } from "../GlobalTextComponent";
import { FaMoon, FaSun } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import themesDark from "../../global/themesDark";
import themesLight from "../../global/themesLight";
import * as S from './style'

interface SelectLanguageProps {
  language: 'en' | 'pt';
  toggleLanguage: (lng: string) => void;
}

interface HeaderProps {
  toggleTheme: () => void; 
  selectedTheme: 'light' | 'dark';
  toggleLanguage: (lng: string) => void;
}

export const SelectLanguage = ({language, toggleLanguage}: SelectLanguageProps) => {
  
    const savedTheme = localStorage.getItem("theme");
    const appliedTheme = savedTheme === 'dark' ? themesDark : themesLight;
    const {t} = useTranslation()
    const languages = {
      pt: `🇧🇷 ${t("languages.pt")}`,
      en: `🇺🇸 ${t("languages.en")}`
    }  
  
    return (
      <S.DropDownSelect
        style={{
          transition: 'background 0.2s ease',
        }}
        onClick={() => {
          toggleLanguage(language)
        }}
        onMouseEnter={(e) => (e.currentTarget.style.background = appliedTheme.colors.hoverColor)}
        onMouseLeave={(e) => (e.currentTarget.style.background = 'transparent')}
      >
        <GlobalTextComponent
          color='text'
          fontFamily='poppinsMedium'
          fontSize={15}
          text={languages[language]}
        />
      </S.DropDownSelect>
    )
}

export const Header = ({ toggleTheme, selectedTheme, toggleLanguage }: HeaderProps) => {
    const [isDropdownOpen, setDropdownOpen] = useState(false);
    const isLightTheme = selectedTheme === 'light';
    const toggleDropdown = () => setDropdownOpen(!isDropdownOpen);
    const getLng = localStorage.getItem("lng");
  
    return (
      <S.Container>
        <S.IconContainer
          onClick={toggleDropdown}
          style={{
            transition: 'background 0.3s ease-in-out, transform 0.3s ease',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'scale(1.1)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'scale(1.0)';
          }}
        >
          <GlobalTextComponent
            color='text'
            fontFamily='poppinsMedium'
            fontSize={17}
            style={{margin: 0}}
            text={getLng?.toLocaleUpperCase() || 'EN'}
          />
          {isDropdownOpen && (
            <S.BoxDropDown>
                <SelectLanguage toggleLanguage={toggleLanguage} language='en'/>
                <SelectLanguage toggleLanguage={toggleLanguage} language='pt'/>
            </S.BoxDropDown>
          )}
        </S.IconContainer>
        <S.IconContainer
          onClick={toggleTheme}
          style={{
            transition: 'background 0.3s ease-in-out, transform 0.3s ease',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'scale(1.1)'; 
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'scale(1.0)'; 
          }}
        >
          {isLightTheme ? (
            <FaSun size={22} color="#F1C40F" /> 
          ) : (
            <FaMoon size={22} color="#EAEAEA" /> 
          )}
        </S.IconContainer>
    </S.Container>
    );
};