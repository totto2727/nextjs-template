import './globals.css'
import '@aws-amplify/ui-react/styles.css'

import { Authenticator, useAuthenticator } from '@aws-amplify/ui-react'
import Amplify from 'aws-amplify'
import type { AppProps } from 'next/app'
import type { ReactNode } from 'react'
import { useEffect } from 'react'
import { themeChange } from 'theme-change'

import awsExports from '@/aws-exports'

Amplify.configure(awsExports)

type MainProps = { children: ReactNode }
const Main = ({ children }: MainProps) => {
  useEffect(() => {
    themeChange(false)
  }, [])

  const { signOut } = useAuthenticator()

  return (
    <div className='m-0 h-0 font-sans box-border'>
      <select data-choose-theme className='select select-primary'>
        {/* <option value=''>Default</option> */}
        <option value='light'>Light</option>
        <option value='dark'>Dark</option>
      </select>
      <button className='btn btn-primary' onClick={signOut}>
        SignOut
      </button>
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
      <Authenticator>
        {() => {
          return (
            <Main>
              <Component {...pageProps} />
            </Main>
          )
        }}
      </Authenticator>
    </div>
  )
}

export default App
