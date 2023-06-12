import styles from './nav.module.css'
import Link from 'next/link'
import Logo from '../Icons/Logo'
import HamburgerIcon from '../Icons/HamburgerIcon'
import BlogIcon from '../Icons/BlogIcon'
import GithubIcon from '../Icons/GithubIcon'
import LanguagesIcon from '../Icons/LanguagesIcon'
import LinkedinIcon from '../Icons/LinkedinIcon'

export default function NavBar() {
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
                    <Link href={'https://github.com/raffallves'}>
                        <LanguagesIcon />
                    </Link>
                </div>
                <div className={styles.hamburger}>
                    <HamburgerIcon />
                </div>
            </nav>
        </header>
    )
}