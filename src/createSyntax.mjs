import SYNTAX from './syntax.mjs'
/**
 *
 *
 * @param {object} syntaxColors
 * @returns {object}
 */
export function createSyntax(syntaxColors) {
  syntaxColors = Object.entries(syntaxColors)
  const DEFAULT_SYNTAX = JSON.parse(JSON.stringify(SYNTAX))

  // const DEFAULT_SYNTAX = [...SYNTAX];
  // const SYNTAX_NO_ITALICS = [...SYNTAX];
  // const SYNTAX_NO_ITALICS_AND_BOLD = [...SYNTAX];
  DEFAULT_SYNTAX.map(element => {
    let name = element.name.toLowerCase()
    syntaxColors.forEach(item => {
      if (name === item[0].toLowerCase()) {
        element.settings.foreground = item[1]
      }
    })
  })
  const SYNTAX_NO_ITALICS = JSON.parse(JSON.stringify(DEFAULT_SYNTAX))
  SYNTAX_NO_ITALICS.map(element => {
    if (element.name === 'ITALIC') {
      element.scope = []
    }
    if (element.name === 'BOLD-ITALIC') {
      element.scope = []
    }
  })

  const SYNTAX_NO_ITALICS_AND_BOLD = JSON.parse(
    JSON.stringify(SYNTAX_NO_ITALICS),
  )
  SYNTAX_NO_ITALICS_AND_BOLD.map(element => {
    if (element.name === 'BOLD') {
      element.scope = []
    }
  })

  return [DEFAULT_SYNTAX, SYNTAX_NO_ITALICS, SYNTAX_NO_ITALICS_AND_BOLD]
}
