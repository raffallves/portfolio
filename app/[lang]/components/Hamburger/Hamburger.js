"use client"
import HamburgerIcon from '../Icons/HamburgerIcon'
import Link from 'next/link'
import { useState } from 'react'
import styles from './hamb.module.css'
import { usePathname } from 'next/navigation'

export default function Hamburger({ content }) {
    const [isActiveHamb, setIsActiveHamb] = useState(false)
    const [isActiveLang, setIsActiveLang] = useState(false)
    const pathname  = usePathname()
    const activeLang = pathname.substring(1, 3)
    return (
        <div className={styles.hamburger}>
            <button onClick={() => setIsActiveHamb(!isActiveHamb)}>
                <HamburgerIcon />
            </button>
            <div className={isActiveHamb ? styles.hamburger_menu_active : styles.hamburger_menu}>
                <button className={styles.hamburger_close} onClick={() => setIsActiveHamb(false)}></button>
                <div className={styles.hamburger_menu_item}>
                    <Link href={'https://essays.rafalves.com/en'} hrefLang='en'>Blog</Link>
                </div>
                <div className={styles.hamburger_menu_item}>
                    <Link href={'https://github.com/raffallves'}>Github</Link>
                </div>
                <div className={styles.hamburger_menu_item}>
                    <Link href={'https://linkedin.com/in/raffallves'}>LinkedIn</Link>
                </div>
                <div className={styles.hamburger_menu_item}>
                    {content.nav.menu.lang}
                    <div>
                        <Link href={`${pathname.replace(activeLang, 'en')}`} hrefLang='en'>
                            <p>English</p>
                        </Link>
                        <Link href={`${pathname.replace(activeLang, 'pt')}`} hrefLang='pt'>
                            <p>Português</p>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}