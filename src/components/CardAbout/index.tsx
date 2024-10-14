import { useTranslation } from "react-i18next"
import { GlobalTextComponent } from "../GlobalTextComponent"
import { SelectSection } from "../SelectSection"
import { TechSlider } from "../TechSlider"
import { IconSocial } from "../IconSocial"
import * as S from './style'

interface CardAboutProps {
  selectedSection: string;
  setSelectedSection: (selectedSection: string) => void;
}

export const CardAbout = ({selectedSection, setSelectedSection} : CardAboutProps) => {

  const {t} = useTranslation()

  const handleClick = (text: string) => {
    setSelectedSection(text);
    let targetId = '';

    switch (text) {
      case t("options.about"):
        targetId = 'aboutSection';
        break;
      case t("options.projects"):
        targetId = 'projectsSection';
        break;
      case t('options.contact'):
        targetId = 'contactSection';
        break;
      default:
        break;
    }

    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <S.Container>
      <S.MainContent>
        <GlobalTextComponent
          color='text'
          fontFamily='poppinsBold'
          fontSize={48}
          text='Ghabriel Elias'
          style={{margin: 0, marginBottom: 15}}
        />
        <GlobalTextComponent
          color='text'
          fontFamily='poppinsMedium'
          fontSize={20}
          text={t('position')}
        />
        <GlobalTextComponent
          color='text'
          fontFamily='poppinsMedium'
          fontSize={18}
          style={{width: '50%'}}
          text={t("subtitle")}
        />
        <S.ContentOptions>
          <SelectSection isSelected={selectedSection === 'aboutSection'} handleClick={handleClick} text={t("options.about")}/>
          {/* <SelectSection isSelected={selectedSection === t("options.experience")} handleClick={handleClick} text={t("options.experience")}/> */}
          <SelectSection isSelected={selectedSection === 'projectsSection'} handleClick={handleClick} text={t("options.projects")}/>
          <SelectSection isSelected={selectedSection === 'contactSection'} handleClick={handleClick} text={t("options.contact")}/>
        </S.ContentOptions>
        <TechSlider/>
        <S.ContentSocial>
          <IconSocial iconName='linkedin'/>
          <IconSocial iconName='github'/>
        </S.ContentSocial>
      </S.MainContent>
    </S.Container>
  )
}