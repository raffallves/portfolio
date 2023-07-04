import styles from './page.module.css'
import Hero from './components/Hero/Hero'
import Work from './components/Work/Work'
import Awards from './components/Awards/Awards'
import Contact from './components/Contact/Contact'

export const metadata = {
  title: 'Rafael Alves',
  description: 'The Web Dev portfolio of Rafael Alves.',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f1f1f1' },
    { media: '(prefers-color-scheme: dark)', color: '#332E2E' },
  ],
}

export async function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'pt' }]
}

export default function Home({ params: { lang }}) {
  return (
    <>
      <main className={styles.main}>
        <Hero lang={lang} />
        <Work lang={lang} />
        <Awards lang={lang}/>
        <Contact lang={lang}/>
      </main>
    </>
  )
}
