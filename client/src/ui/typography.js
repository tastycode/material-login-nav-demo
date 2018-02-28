import styled, { css } from "styled-components"

export const baseFont = css`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", Helvetica, Arial,
    sans-serif;
`

const meter = 5
const lineHeightRatio = 1.5
const base = {
  m: 14,
  s: 16,
}
const sizeRatio = {
  m: 1.2720062893, // sqrt(GOLDEN)
  s: 1.1278325626, //GOLDEN*-4
}

export const meteredFontSize = base => css`
  font-size: ${base}px;
  line-height: ${Math.floor(base * lineHeightRatio / meter) * meter}px;
`

const meteredResponsiveFontSize = power => css`
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  ${meteredFontSize(
    base.m * Math.pow(sizeRatio.m, power),
  )} @media(max-width: 1023px) {
    ${meteredFontSize(base.s * Math.pow(sizeRatio.s, power))};
  }
`

export const sizes = {
  s: () => meteredResponsiveFontSize(-1),
  m: () => meteredResponsiveFontSize(0),
  l: () => meteredResponsiveFontSize(1),
  l2: () => meteredResponsiveFontSize(2),
  l3: () => meteredResponsiveFontSize(3),
  l4: () => meteredResponsiveFontSize(4),
  l5: () => meteredResponsiveFontSize(5),
}

export const Heading1 = styled.h1`
  ${baseFont} ${sizes.l3()};
`
