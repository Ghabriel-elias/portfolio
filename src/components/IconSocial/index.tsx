import { FaGithub, FaLinkedin } from "react-icons/fa";
import themesDark from "../../global/themesDark";
import themesLight from "../../global/themesLight";

const iconsSocials = {
    linkedin: {href: "https://www.linkedin.com/in/Ghabriel-elias", icon: () => <FaLinkedin size={30} />},
    github: {href: "https://github.com/Ghabriel-elias", icon: () => <FaGithub size={30} />},
}
  
export const IconSocial = ({ iconName }: { iconName: keyof typeof iconsSocials }) => {
    const savedTheme = localStorage.getItem("theme");
    const appliedTheme = savedTheme === 'dark' ? themesDark : themesLight;
    const iconColor = appliedTheme.colors.text
    const hoverColor = appliedTheme.colors.hoverColor

    return (
    <a
        href={iconsSocials[iconName].href} 
        target="_blank"
        rel="noopener noreferrer"
        style={{ marginRight: 10, textDecoration: 'none' }}>
        <div
        style={{
            transition: 'color 0.3s', 
            color: iconColor, 
        }}
        onMouseEnter={(e) => (e.currentTarget.style.color = hoverColor)} 
        onMouseLeave={(e) => (e.currentTarget.style.color = iconColor)} 
        >
        {iconsSocials[iconName].icon()}
        </div>
    </a>
    );
};