import { useTranslation } from "react-i18next"
import { GlobalTextComponent } from "../GlobalTextComponent"
import * as S from './style'
import { MutableRefObject } from "react"

export const BoxTextAbout = ({refAbout}: {refAbout: MutableRefObject<null>}) => {

    const {t} = useTranslation()

    return (
        // <S.Container>
            <S.TextContent ref={refAbout} id="aboutSection">
                <GlobalTextComponent
                    color='text'
                    fontFamily='poppinsMedium'
                    fontSize={18}
                    text={t('options.about')}
                />
                <S.LineSeparator/>
                <GlobalTextComponent
                    color='text'
                    fontFamily='poppinsMedium'
                    fontSize={20}
                    text={t("text.aboutMe")}
                />
                {/* <GlobalTextComponent
                    color='text'
                    fontFamily='poppinsMedium'
                    fontSize={18}
                    text={t("text.aboutSkill")}
                /> */}
            </S.TextContent>
        // {/* </S.Container> */}
    )
}