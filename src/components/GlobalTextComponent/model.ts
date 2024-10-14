import themes from "../../global/themesDark";

export const {colors, fonts} = themes

export interface GlobalTextProps {
  text: string;
  fontSize: number;
  fontFamily: keyof typeof fonts;
  color: keyof typeof colors;
  lineHeight?: number;
  textAlign?: 'center' | 'right' | 'left';
  alignFontWithMargin?: boolean;
  style?: React.CSSProperties;
  numberOfLines?: number;
}
