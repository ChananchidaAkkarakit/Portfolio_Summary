import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Karla } from 'next/font/google'

// โหลดฟอนต์ Karla
const karla = Karla({
  subsets: ['latin'],
  weight: ['400', '500', '800'],
  variable: '--font-karla',
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={karla.variable}> {/* ผูก CSS variable */}
      <Component {...pageProps} />
    </main>
  )
}
