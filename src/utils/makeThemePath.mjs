import { NORMAL, NO_ITALIC, NO_ITALIC_NO_BOLD } from './themeTypes.mjs'

const themePath = (themeName, themeType = NORMAL) => {
  let path
  switch (themeType) {
    case NO_ITALIC:
      path = `./themes/${themeName}-no-italic.json`
      break

    case NO_ITALIC_NO_BOLD:
      path = `./themes/${themeName}-no-italic-no-bold.json`
      break

    default:
      path = `./themes/${themeName}.json`
      break
  }
  return path
}

export default themePath
