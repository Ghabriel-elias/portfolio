import { GlobalTextComponent } from "../GlobalTextComponent";
import { Container } from "./style";

function getRandomColor(theme: string | null) {
    let color;
  
    if (theme === 'light') {
      color = `rgb(
        ${Math.floor(Math.random() * 156) + 100}, 
        ${Math.floor(Math.random() * 156) + 100}, 
        ${Math.floor(Math.random() * 156) + 100}
      )`;
    } else {
      color = `rgb(
        ${Math.floor(Math.random() * 100)}, 
        ${Math.floor(Math.random() * 100)}, 
        ${Math.floor(Math.random() * 100)}
      )`;
    }
  
    return color;
  }

export const TagTech = ({text}: {text: string}) => {
    const savedTheme = localStorage.getItem("theme");

    return (
      <Container style={{
          background: getRandomColor(savedTheme),
        }}>
        <GlobalTextComponent
          color='text'
          fontFamily='poppinsSemiBold'
          fontSize={12}
          text={text}
          style={{margin: 0}}
        />
      </Container>
    )
}