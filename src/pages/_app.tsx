import './globals.css'

import type { AppProps } from 'next/app'
import Head from 'next/head'
import { useState } from 'react'

type Modes = 'light' | 'dark'
const MyApp = ({ Component, pageProps }: AppProps) => {
  const [mode, setMode] = useState<Modes>('dark')

  return (
    <>
      <Head>
        <html lang='ja' />
      </Head>
      <button
        className='btn btn-primary'
        onClick={() => {
          setMode(mode === 'light' ? 'dark' : 'light')
        }}>
        Change Mode
      </button>
      <div data-theme={mode}>
        <div className='m-0 h-0 font-sans box-border'>
          <Component {...pageProps} />
        </div>
      </div>
    </>
  )
}

export default MyApp
