import styles from './nav.module.css'
import Link from 'next/link'
import Logo from '../Icons/Logo'
import BlogIcon from '../Icons/BlogIcon'
import GithubIcon from '../Icons/GithubIcon'
import LinkedinIcon from '../Icons/LinkedinIcon'
import { getContent } from '../../content'

/* Client Components */
import Hamburger from '../Hamburger/Hamburger'
import Languages from '../Languages/Languages'

export default async function NavBar({ lang }) {
    const content = await getContent(lang)
    return (
        <header>
            <nav className={styles.nav}>
                <Logo/>
                <div className={styles.social}>
                    <Link href={'https://essays.rafalves.com/en'}>
                        <BlogIcon />
                    </Link>
                    <Link href={'https://github.com/raffallves'}>
                        <GithubIcon />
                    </Link>
                    <Link href={'https://linkedin.com/in/raffallves'}>
                        <LinkedinIcon />
                    </Link>
                    <Languages />
                </div>
                <Hamburger content={content} />
            </nav>
        </header>
    )
}