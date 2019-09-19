import COLORS from './colors.mjs'
import { makeThemePath } from './makeThemePath.mjs'
import { buildTheme } from './buildTheme.mjs'
import { THEMES } from './build.mjs'
/**
 *
 *
 * @param {array} themesArray
 * @returns {void}
 */
export function buildAllThemes(themesArray) {
  const PATHS_NORMAL = makeThemePath(THEMES)[0]
  const PATHS_NO_ITALIC = makeThemePath(THEMES)[1]
  const PATHS_NO_ITALIC_AND_BOLD = makeThemePath(THEMES)[2]
  themesArray.forEach(theme => {
    let themeEntries = Object.entries(theme)
    let themeName = themeEntries[0][0]
    let themeWorkbench = themeEntries[0][1]
    PATHS_NORMAL.find(path => {
      if (path.includes(themeName)) {
        buildTheme(path, COLORS[themeName], themeWorkbench, themeName)
      }
    })
    PATHS_NO_ITALIC.find(path => {
      if (path.includes(themeName)) {
        buildTheme(path, COLORS[themeName], themeWorkbench, themeName)
      }
    })
    PATHS_NO_ITALIC_AND_BOLD.find(path => {
      if (path.includes(themeName)) {
        buildTheme(path, COLORS[themeName], themeWorkbench, themeName)
      }
    })
  })
}
