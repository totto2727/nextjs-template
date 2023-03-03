const path = require('path')

const buildEslintCommand = (filenames) =>
  `next lint --fix --file ${filenames
    .map((f) => path.relative(process.cwd(), f))
    .join(' --file ')}`

const buildPrettierCommand = (filenames) =>
  `prettier --write ${filenames
    .map((f) => path.relative(process.cwd(), f))
    .join(' --file ')}`

module.exports = {
  '{src,app,git,.storybook}/**/*.{js,jsx,ts,tsx}': [
    buildEslintCommand,
    buildPrettierCommand,
  ],
  '{src,app,git,.storybook}/**/*.{json,css,md,mdx}': [buildPrettierCommand],
}
