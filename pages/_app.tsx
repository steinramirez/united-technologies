import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import type { ReactElement, ReactNode } from 'react'

type PropsWithComponent = AppProps & {
  Component: React.ComponentType<any>
}
export default function App({ Component, pageProps }: PropsWithComponent): ReactElement  {
  return (
  <>
  <Component {...pageProps} /> 
  </>
  );
}
