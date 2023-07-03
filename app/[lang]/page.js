import styles from './page.module.css'
import Head from 'next/head'
import Hero from './components/Hero/Hero'
import Work from './components/Work/Work'
import Awards from './components/Awards/Awards'
import Contact from './components/Contact/Contact'

export async function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'pt' }]
}

export default function Home({ params: { lang }}) {
  return (
    <>
      <Head>
        <meta name="theme-color" content="#F1F1F1"/>
      </Head>
      <main className={styles.main}>
        <Hero lang={lang} />
        <Work lang={lang} />
        <Awards lang={lang}/>
        <Contact lang={lang}/>
      </main>
    </>
  )
}
