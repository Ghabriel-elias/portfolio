import { useTranslation } from "react-i18next";
import { ArrowComponent } from "../ArrowComponent";
import Slider from "react-slick";
import * as S from './style'
import { GlobalTextComponent } from "../GlobalTextComponent";
import { TagTech } from "../TagTech";

const settings = {
    dots: false,
    infinite: true, 
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, 
    autoplaySpeed: 1000 * 20,
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

const settingsImages = {
    dots: false,
    infinite: true, 
    speed: 500,
    arrows: false,
    slidesToScroll: 1,
    autoplay: true, 
    autoplaySpeed: 2000,
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

export const ProjectSlider = () => {

    const {t} = useTranslation()
  
    const projectsData = [
      {
        name: 'WatchList',
        application: 'mobile',
        description: t("projects.description.watchlist"),
        technologies: ['React Native', 'React', 'Redux', 'TMDB API', 'Styled Components'],
        images: [
          'https://github.com/user-attachments/assets/2b76cbed-8b69-435f-8749-93235206eff3',
          'https://github.com/user-attachments/assets/0441b5d0-b8e3-4555-b24a-7b40865d553e',
          'https://github.com/user-attachments/assets/e0dd162c-47df-46f6-8ec1-cb1d085d46f7',
          'https://github.com/user-attachments/assets/afe5b735-9c79-43e8-b33f-6a9881277f8c',
        ],
      },
      {
        name: 'Pomo Focus',
        application: 'mobile',
        description: t("projects.description.pomoFocus"),
          technologies: ['React Native', 'React', 'Redux', 'Styled Components'],
          images: [
          'https://github.com/user-attachments/assets/5de50b5e-67cd-47c6-bcc0-295c6e8cc31b',
          'https://github.com/user-attachments/assets/82d1020e-f77a-44db-8ef5-c4f3a9c26400',
          'https://github.com/user-attachments/assets/a9ed036b-a91a-46fa-9947-c3dcc53feb3c',
          'https://github.com/user-attachments/assets/b6298966-7465-4f26-a2a1-202b688932ba',
        ],
      },
      {
        name: 'Spotter Exercise',
        application: 'web',
        description: t("projects.description.spotter"),
          technologies: ['React', 'Material Ui', 'Styled Components'],
          images: [
          'https://github.com/user-attachments/assets/070e1d76-7212-4aa2-9a40-ab144faf7c9a',
          'https://github.com/user-attachments/assets/f5bfaf85-7708-4320-815a-c0ef3cd8b6ab',
        ],
      },
    ];
  
    return (
      <S.Container>
        <Slider {...settings}>
          {projectsData.map((project, index) => (
            <div>
              <S.CardSlider>
                <S.SliderContent>
                  <GlobalTextComponent
                    color='text'
                    fontFamily='poppinsBold'
                    fontSize={20}
                    text={project.name}
                  />
                  <S.BoxSliderImages style={{
                    marginLeft: project.application == 'web' ? 0 : '1rem',
                    width: project.application === 'web' ? '100%' : "80%",
                  }}>
                    <Slider slidesToShow={project.application === 'web' ? 1 : 2} {...settingsImages}>
                      {project.images.map((tech) => (
                        <div>
                          <img 
                            src={tech} 
                            height={project.application === 'web' ? 300 : 340} 
                            width={project.application === 'web' ? '100%' : '95%'} alt="Screenshot 4" 
                          />
                        </div>
                      ))}
                    </Slider>
                  </S.BoxSliderImages>
                  <S.BoxTags>
                    {project.technologies.map((tech) => (
                      <TagTech text={tech}/>
                    ))}
                  </S.BoxTags>
                  <GlobalTextComponent
                    color='text'
                    fontFamily='poppinsMedium'
                    fontSize={16}
                    text={project.description}
                    style={{margin: 0, marginBottom: '0.5rem'}}
                  />
                </S.SliderContent>
              </S.CardSlider>
            </div>
          ))}
        </Slider>
      </S.Container>
    );
};
  