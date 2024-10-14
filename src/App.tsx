import { useEffect, useRef, useState } from 'react'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { ThemeProvider } from 'styled-components';
import themesLight from './global/themesLight';
import themesDark from './global/themesDark';
import './i18n'
import { useTranslation } from 'react-i18next';
import { Header } from './components/Header';
import { CardAbout } from './components/CardAbout';
import * as S from './style'
import { BoxTextAbout } from './components/BoxTextAbout';
import { BoxProjects } from './components/BoxProjects';
import { BoxContact } from './components/BoxContact';

function App() {

  const [theme, setTheme] = useState<"light" | "dark">("dark");
  const isDarkTheme = theme === "dark";
  const {i18n, t} = useTranslation()
  const [selectedSection, setSelectedSection] = useState('aboutSection')
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);
  const appliedTheme = isDarkTheme ? themesDark : themesLight;
  
  function toggleLanguage(lng: string) {
    i18n.changeLanguage(lng)
    localStorage.setItem("lng", lng);
  }

  const toggleTheme = () => {
    const updatedTheme = isDarkTheme ? "light" : "dark";
    setTheme(updatedTheme)
    localStorage.setItem("theme", updatedTheme);
  }
 
  function getConfigs() {
    const savedLng = localStorage.getItem('lng')
    if(savedLng) i18n.changeLanguage(savedLng)
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (savedTheme && ["dark", "light"].includes(savedTheme)) {
      setTheme(savedTheme);
    } else if (prefersDark) {
      setTheme("dark");
    }
  }
  
  useEffect(() => {

    getConfigs()

    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setSelectedSection(entry.target.id);
        }
      });
    };

    const options = {
      root: null, 
      rootMargin: '0px',
      threshold: 0.8, 
    };

    const observer = new IntersectionObserver(handleIntersection, options);

    if (aboutRef.current) observer.observe(aboutRef.current);
    if (projectsRef.current) observer.observe(projectsRef.current);
    if (contactRef.current) observer.observe(contactRef.current);

    return () => {
      if (aboutRef.current) observer.unobserve(aboutRef.current);
      if (projectsRef.current) observer.unobserve(projectsRef.current);
      if (contactRef.current) observer.unobserve(contactRef.current);
    };
  }, []);

  return (
    <ThemeProvider theme={appliedTheme}>
      <Header toggleTheme={toggleTheme} selectedTheme={theme} toggleLanguage={toggleLanguage} />
      <S.Container>
        <CardAbout selectedSection={selectedSection} setSelectedSection={setSelectedSection} />
        <div style={{width: '50%'}}/>
        <S.MainContent>
          <BoxTextAbout refAbout={aboutRef} />
          <BoxProjects refProjects={projectsRef} />
          <BoxContact contactRef={contactRef}/>
        </S.MainContent>
      </S.Container>
    </ThemeProvider>
  )
}

export default App