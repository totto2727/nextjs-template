import './globals.css'

import type { AppProps } from 'next/app'
import type { ReactNode } from 'react'
import { useEffect } from 'react'
import { themeChange } from 'theme-change'

type MainProps = { children: ReactNode }
const Main = ({ children }: MainProps) => {
  useEffect(() => {
    themeChange(false)
  }, [])

  return (
    <div className='m-0 h-0 font-sans box-border'>
      <select data-choose-theme className='select select-primary'>
        {/* <option value=''>Default</option> */}
        <option value='light'>Light</option>
        <option value='dark'>Dark</option>
      </select>
      {children}
    </div>
  )
}

const App = ({ Component, pageProps }: AppProps) => {
  useEffect(() => {
    themeChange(false)
  }, [])
  return (
    <div>
      <Main>
        <Component {...pageProps} />
      </Main>
    </div>
  )
}

export default App
