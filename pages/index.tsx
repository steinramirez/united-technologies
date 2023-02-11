import Head from 'next/head'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Navbar from '../pages/components/nav'
import Content from '../pages/components/content'
import TawkMessengerReact from '@tawk.to/tawk-messenger-react'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>United Technologies</title>
        
        <meta name="description" content="United Technologies, a microweb service company located in USA" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon1.ico" /> 
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/tailwindcss@1.x/dist/tailwind.min.css" />
      </Head>
      <main>
        <div>
          <Navbar />
          <Content />
          <div className="App">
            <TawkMessengerReact
                propertyId="5880d66dbcf30e71ac11daaa"
                widgetId="default"/>
        </div>
        </div>
      </main>
      
    </>
  )
}
