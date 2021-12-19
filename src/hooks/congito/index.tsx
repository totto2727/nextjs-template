import '@aws-amplify/ui-react/styles.css'

import type { useAuthenticator } from '@aws-amplify/ui-react'
import type { FC, ReactNode } from 'react'
import { createContext, useContext } from 'react'

export type CognitoContextProps = {
  signOut: ReturnType<typeof useAuthenticator>['signOut']
  user: ReturnType<typeof useAuthenticator>['user']
}

const CogniteContext = createContext<CognitoContextProps>(
  {} as CognitoContextProps,
)

export const CogniteContextProvider: FC<
  CognitoContextProps & { children: ReactNode }
> = ({ signOut, user, children }) => {
  return (
    <CogniteContext.Provider value={{ signOut, user }}>
      {children}
    </CogniteContext.Provider>
  )
}

export const useCognito = () => {
  return useContext(CogniteContext)
}
