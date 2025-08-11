import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Karla } from 'next/font/google'

// โหลดฟอนต์ Karla
const karla = Karla({
  subsets: ['latin'],
  weight: ['400', '500', '800'], // น้ำหนักฟอนต์ที่ต้องใช้
  variable: '--font-karla',      // ตัวแปร CSS สำหรับ Tailwind
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={karla.className}>
      <Component {...pageProps} />
    </main>
  )
}
