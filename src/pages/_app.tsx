import './globals.css'

import { Authenticator } from '@aws-amplify/ui-react'
import Amplify from 'aws-amplify'
import type { AppProps } from 'next/app'
import type { ReactNode } from 'react'
import { useEffect } from 'react'
import { themeChange } from 'theme-change'

import awsExports from '@/aws-exports'
import type { CognitoContextProps } from '@/hooks/congito'
import { useCognito } from '@/hooks/congito'
import { CogniteContextProvider } from '@/hooks/congito'

Amplify.configure(awsExports)

type MainProps = CognitoContextProps & { children: ReactNode }
const Main = ({ children }: MainProps) => {
  useEffect(() => {
    themeChange(false)
  }, [])

  const { signOut } = useCognito()

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
    <Authenticator>
      {({ signOut, user }) => {
        return (
          <CogniteContextProvider signOut={signOut} user={user}>
            <Main signOut={signOut} user={user}>
              <Component {...pageProps} />
            </Main>
          </CogniteContextProvider>
        )
      }}
    </Authenticator>
  )
}

export default App
