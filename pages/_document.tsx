import { ColorModeScript } from '@chakra-ui/react'
import { Head, Html, Main, NextScript } from 'next/document'
import { theme } from './_app'

export default function Document() {
  return (
    <Html lang='ja'>
      <Head />
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />{' '}
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
