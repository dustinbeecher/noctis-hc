import { readdirSync, readFileSync } from 'fs'
import { basename } from 'path'

const themeFolder = './src/themeData/'

const themeFullFileNames = readdirSync(themeFolder)

const themes = themeFullFileNames.map(themeFullFileName => {
  const noExtName = basename(themeFullFileName, '.json')
  const data = JSON.parse(readFileSync(`${themeFolder}${themeFullFileName}`))

  return {
    name: noExtName,
    data,
  }
})

export default themes
