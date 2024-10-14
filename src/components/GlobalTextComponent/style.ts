import styled from "styled-components";
import { GlobalTextProps } from "./model";
import themes from "../../global/themesDark";

export const {colors, fonts} = themes

export const GlobalText = styled.p<GlobalTextProps>`
  font-size: ${({fontSize}) => Number(fontSize)}px;
  color: ${({color, theme}) => theme.colors[color]};
  line-height: ${({lineHeight, fontSize}) => Number(lineHeight || fontSize + 2)}px;
  font-family: ${({fontFamily, theme}) => theme.fonts[fontFamily].name};
  font-weight: ${({fontFamily, theme}) => theme.fonts[fontFamily].weight};
  text-align: ${({textAlign}) => textAlign || 'left'};
  margin-top: ${({alignFontWithMargin}) => alignFontWithMargin ? 3 : 0}px;
`;