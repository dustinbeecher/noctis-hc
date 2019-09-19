/**
 *
 *
 * @param {array} themesArray
 * @returns {array}
 */
export function makeThemePath(themesArray) {
  const PATHS_NORMAL = []
  const PATHS_NO_ITALIC = []
  const PATHS_NO_ITALIC_AND_BOLD = []
  themesArray.forEach(theme => {
    PATHS_NORMAL.push(`./themes/${Object.keys(theme)}.json`)
    PATHS_NO_ITALIC.push(`./themes/${Object.keys(theme)}noit.json`)
    PATHS_NO_ITALIC_AND_BOLD.push(`./themes/${Object.keys(theme)}noitbold.json`)
  })
  return [PATHS_NORMAL, PATHS_NO_ITALIC, PATHS_NO_ITALIC_AND_BOLD]
}
