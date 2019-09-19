import SYNTAX from '../syntax.mjs'
import { NORMAL, NO_ITALIC, NO_ITALIC_NO_BOLD } from './themeTypes.mjs'

function createTokenColors(syntaxColors, themeType = NORMAL) {
  const syntaxDefault = SYNTAX.map(block => {
    const name = block.name.toLowerCase()

    if (name in syntaxColors) {
      block.settings.foreground = syntaxColors[name]
    }
    return block
  })

  const syntaxNoItalics = syntaxDefault.filter(element => {
    return element.name !== 'ITALIC' && element.name !== 'BOLD-ITALIC'
  })

  const syntaxNoItalicsNoBold = syntaxNoItalics.filter(
    element => element.name !== 'BOLD',
  )

  if (themeType === NO_ITALIC_NO_BOLD) return syntaxNoItalicsNoBold
  else if (themeType === NO_ITALIC) return syntaxNoItalics
  else return syntaxDefault
}

export default createTokenColors
