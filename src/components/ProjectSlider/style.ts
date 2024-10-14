import styled from "styled-components";

export const Container = styled.div`
  padding-left: 4rem;
  padding-right: 4rem;
  height: 100%;
  margin-bottom: 3rem;
`;

export const CardSlider = styled.div`
  display: flex;
  justify-content: center; 
  align-items: center;  
  text-align: center; 
`;

export const SliderContent = styled.div`
  width: 30rem;
  border-width: 1px;
  border-color: ${({theme}) => theme.colors.text};
  border-style: solid;
  border-radius: 8px;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const BoxTags = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  margin-bottom: 0.5rem;
`;

export const BoxSliderImages = styled.div`
  padding-left: 2rem;
  padding-right: 2rem;
  margin-bottom: 1rem;
`;