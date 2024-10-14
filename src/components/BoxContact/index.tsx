import { useTranslation } from "react-i18next"
import { GlobalTextComponent } from "../GlobalTextComponent"
import * as S from './style'
import { MutableRefObject } from "react"
import { Button } from "../Button"
import { FaWhatsapp } from "react-icons/fa"
import { MdEmail } from "react-icons/md"

export const BoxContact = ({contactRef}: {contactRef: MutableRefObject<null>}) => {

    const {t} = useTranslation()

    const sendEmail = (to: string) => {
        const mailtoLink = `mailto:${to}`;
        window.location.href = mailtoLink; 
    };

    const openWhatsApp = (phoneNumber: string) => {
        const url = `https://wa.me/${phoneNumber}`;
        window.open(url, '_blank');
    };

    return (
        <div id="contactSection" ref={contactRef}>
            <GlobalTextComponent
                color='text'
                fontFamily='poppinsMedium'
                fontSize={18}
                text={t('options.contact')}
            />
            <S.LineSeparator/>
            <S.MainContent>
                <GlobalTextComponent
                    color='text'
                    fontFamily='poppinsMedium'
                    fontSize={40}
                    textAlign='center'
                    style={{margin: 0, marginBottom: 20, width: '60%'}}
                    text={t("contact.title")}
                /> 
                <GlobalTextComponent
                    color='text'
                    fontFamily='poppinsMedium'
                    fontSize={18}
                    style={{margin: 0, marginBottom: 20}}
                    text={t("contact.subtitle")}
                /> 
                <S.BoxButtons>
                   <Button 
                      handleButton={() => {
                        openWhatsApp('+5595984050997')
                      }}
                      icon={() => <FaWhatsapp/>} 
                      textColor="lightColor" 
                      bgColor='greenColor' 
                      text="Whatsapp"
                    />
                   <Button 
                      handleButton={() => {
                        sendEmail('ghsouza1013@gmail.com')
                      }}
                      icon={() => <MdEmail/>} 
                      textColor="lightColor" 
                      bgColor='blueColor' 
                      text="Email"
                    />
                </S.BoxButtons> 
            </S.MainContent>
      </div>
    )
}