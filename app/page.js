import styles from './page.module.css'
import Head from 'next/head'
import NavBar from './components/NavBar/NavBar'
import Hero from './components/Hero/Hero'
import Work from './components/Work/Work'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'

export default function Home() {
  return (
    <>
      <Head>
        <meta name="theme-color" content="#F1F1F1"/>
      </Head>
      <NavBar />
      <main className={styles.main}>
        <Hero />
        <Work />
        <Contact/>
      </main>
      <Footer/>
    </>
  )
}
