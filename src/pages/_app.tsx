import './globals.css'

import type { AppProps } from 'next/app'
import { useEffect } from 'react'
import { themeChange } from 'theme-change'

const MyApp = ({ Component, pageProps }: AppProps) => {
  useEffect(() => {
    themeChange(false)
  }, [])

  return (
    <div className='m-0 h-0 font-sans box-border'>
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
