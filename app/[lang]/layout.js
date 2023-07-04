import '../globals.css'
import { Montserrat } from 'next/font/google'
import NavBar from './components/NavBar/NavBar'
import Footer from './components/Footer/Footer'

const montserrat = Montserrat({ subsets: ['latin'] })

export async function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'pt' }]
}

export default function RootLayout({ children, params }) {
  return (
    <html lang={params.lang}>
      <body className={montserrat.className}>
        <NavBar lang={params.lang}/>
        {children}
        <Footer lang={params.lang}/>
      </body>
    </html>
  )
}
