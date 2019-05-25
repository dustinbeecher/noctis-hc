import fs from "fs";
import { promisify } from "util";
import { createSyntax } from "./createSyntax.mjs";
const writeFileAsync = promisify(fs.writeFile);

/**
 *
 *
 * @param {string} path
 * @param {object} syntaxColors
 * @param {Function} themeWorkbench
 * @param {string} themeName
 * @returns {void}
 */
export async function buildTheme(path, syntaxColors, themeWorkbench, themeName) {

   let syntax = createSyntax(syntaxColors)[0];
   let syntaxNoItalics = createSyntax(syntaxColors)[1];
   let syntaxNoItalicsAndBold = createSyntax(syntaxColors)[2];

   const NORMAL_THEME = themeWorkbench(syntax);
   const SYNTAX_NO_ITALICS = themeWorkbench(syntaxNoItalics);
   const SYNTAX_NO_ITALICS_AND_BOLD = themeWorkbench(syntaxNoItalicsAndBold);
   try {
      await writeFileAsync(path, JSON.stringify(NORMAL_THEME));
      await writeFileAsync(path, JSON.stringify(SYNTAX_NO_ITALICS));
      await writeFileAsync(path, JSON.stringify(SYNTAX_NO_ITALICS_AND_BOLD));
      console.log(`✔  ${path} theme built`);
   }
   catch (error) {
      console.error(`❗  ${error}`);
   }
}
