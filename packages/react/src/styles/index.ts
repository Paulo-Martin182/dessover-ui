import { colors, fonts, fontSizes, fontWeights, radii, space } from '@dessover/tokens'
import { createStitches, defaultThemeMap } from '@stitches/react'

export const { styled, css, globalCss, keyframes, getCssText, theme, createTheme, config } = createStitches({
  themeMap: {
    ...defaultThemeMap,
    height: 'space',
    width: 'space',
  },

  theme: {
    colors: colors,
    fontSizes: fontSizes,
    fontWeights: fontWeights,
    fonts: fonts,
    radii: radii,
    space: space,
  },
})
