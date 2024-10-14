import { useTranslation } from "react-i18next"
import { GlobalTextComponent } from "../GlobalTextComponent"
import * as S from './style'
import { ProjectSlider } from "../ProjectSlider"
import { MutableRefObject } from "react"

export const BoxProjects = ({refProjects}: {refProjects: MutableRefObject<null>}) => {

    const {t} = useTranslation()

    return (
      <S.Container ref={refProjects} id='projectsSection'>
        <GlobalTextComponent
          color='text'
          fontFamily='poppinsMedium'
          fontSize={18}
          text={t('options.projects')}
        />
        <S.LineSeparator/>
        <ProjectSlider/>
      </S.Container>
    )
}