import { writeFile } from 'fs'
import { promisify } from 'util'
import themes from './themes.mjs'
import buildTheme from './buildTheme.mjs'
import makeThemePath from './makeThemePath.mjs'
import * as themeTypes from './themeTypes.mjs'

const writeFileAsync = promisify(writeFile)

themes.forEach(({ name, data }) => {
  Object.values(themeTypes).forEach(type => {
    const theme = buildTheme(data, type)
    const path = makeThemePath(name, type)
    writeFileAsync(path, JSON.stringify(theme, null, 3))
      .then(() => console.log(`✔  ${name} ${type} theme built`))
      .catch(err => console.error(err))
  })
})
