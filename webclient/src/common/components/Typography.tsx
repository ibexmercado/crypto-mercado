import { Typography as MUITypography } from "@material-ui/core";
import styled from "styled-components";
import {
  color,
  flex,
  fontFamily,
  fontSize,
  fontStyle,
  fontWeight,
  lineHeight,
  space,
  SpaceProps,
  textAlign,
} from "styled-system";

type TypographyProps = SpaceProps;

export const Typography = styled(MUITypography)<TypographyProps>`
  ${space}
  ${fontSize}
  ${fontFamily}
  ${fontWeight}
  ${fontStyle}
  ${lineHeight}
  ${color}
  ${flex}
  ${textAlign}
`;