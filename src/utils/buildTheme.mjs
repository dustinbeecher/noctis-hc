import createTokenColors from './createTokenColors.mjs'

function buildTheme(theme, themeType = NORMAL) {
  let newTheme = { ...theme }

  let tokenColors = createTokenColors(newTheme.syntaxColors, themeType)
  newTheme.tokenColors = tokenColors
  delete newTheme.syntaxColors

  return newTheme
}

export default buildTheme
