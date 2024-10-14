import { GlobalText } from "./style";
import { GlobalTextProps } from "./model";

export const GlobalTextComponent = ({
  color, 
  fontFamily,
  fontSize,
  text,
  lineHeight,
  textAlign,
  alignFontWithMargin,
  style,
  numberOfLines,
}: GlobalTextProps) => (
  <GlobalText
    color={color}
    fontFamily={fontFamily}
    fontSize={fontSize}
    textAlign={textAlign}
    lineHeight={lineHeight}
    alignFontWithMargin={alignFontWithMargin}
    style={style}
    numberOfLines={numberOfLines}
    >
    {text}
  </GlobalText>
)