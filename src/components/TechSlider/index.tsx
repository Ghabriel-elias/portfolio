import { useTranslation } from "react-i18next";
import { GlobalTextComponent } from "../GlobalTextComponent";
import Slider from "react-slick";
import { SiCss3, SiElectron, SiExpress, SiGit, SiHtml5, SiJavascript, SiNextdotjs, SiNodedotjs, SiReact, SiTypescript } from "react-icons/si";
import themesLight from "../../global/themesLight";
import themesDark from "../../global/themesDark";
import * as S from './style'
import { ArrowComponent } from "../ArrowComponent";

const iconsTecnologiesData = {
    javascript: {name: 'Javascript', icon: (color: string) => <SiJavascript color={color} size={40}/>},
    typescript: {name: 'Typescript', icon: (color: string) => <SiTypescript color={color} size={40}/>},
    react: {name: 'React', icon: (color: string) => <SiReact color={color} size={40}/>},
    reactNative: {name: 'React Native', icon: (color: string) => <SiReact color={color} size={40}/>},
    node: {name: 'Node', icon: (color: string) => <SiNodedotjs color={color} size={40}/>},
    git: {name: 'Git', icon: (color: string) => <SiGit color={color} size={40}/>},
    html: {name: 'HTML5', icon: (color: string) => <SiHtml5 color={color} size={40}/>},
    css: {name: 'CSS3', icon: (color: string) => <SiCss3 color={color} size={40}/>},
    express: {name: 'Express', icon: (color: string) => <SiExpress color={color} size={40}/>},
    next: {name: 'Next', icon: (color: string) => <SiNextdotjs color={color} size={40}/>},
    electron: {name: 'Electron', icon: (color: string) => <SiElectron color={color} size={40}/>},
}

const settings = {
  dots: false,
  infinite: true, 
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true, 
  autoplaySpeed: 2000,
  nextArrow: <ArrowComponent />,
  prevArrow: <ArrowComponent />,
  responsive: [ 
    {
      breakpoint: 768, 
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 480, 
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    }
  ]
};

const IconTecnologies = ({iconName}: {iconName: keyof typeof iconsTecnologiesData}) => {
  
  const savedTheme = localStorage.getItem("theme");
  const appliedTheme = savedTheme === 'dark' ? themesLight : themesDark;
  
  return (
    <S.IconContent>
      {iconsTecnologiesData[iconName].icon(appliedTheme.colors.background)}
      <GlobalTextComponent
        color='text'
        fontFamily='poppinsLight'
        fontSize={14}
        text={iconsTecnologiesData[iconName].name}
        style={{ margin: 0, marginTop: 10}}
      />
    </S.IconContent>  
  )
}

export const TechSlider = () => {

  const {t} = useTranslation()

  return (
    <S.Container>
      <GlobalTextComponent
        color='text'
        fontFamily='poppinsMedium'
        fontSize={20}
        text={t('skills')}
      />
      <S.SliderContent>
        <Slider {...settings}>
          {Object.keys(iconsTecnologiesData).map((iconName) => (
            <IconTecnologies key={iconName} iconName={iconName as keyof typeof iconsTecnologiesData} />
          ))}
        </Slider>
      </S.SliderContent>
    </S.Container>
  );
};