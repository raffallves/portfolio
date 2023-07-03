"use client"
import { useState } from 'react'
import LanguagesIcon from '../Icons/LanguagesIcon'
import styles from './lang.module.css'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Languages() {
    const [isActiveLang, setIsActiveLang] = useState(false)
    const pathname  = usePathname()
    const activeLang = pathname.substring(1, 3)
    return (
        <div className={styles.languages_wrapper}>
            <button className={styles.language_button} onClick={() => setIsActiveLang(!isActiveLang)}>
                <LanguagesIcon />
            </button>
            <div className={isActiveLang ? styles.languages_menu_active : styles.languages_menu}>
                <Link href={`${pathname.replace(activeLang, 'en')}`} hrefLang='en'>
                    <button className={styles.language_button}>English</button>
                </Link>
                <Link href={`${pathname.replace(activeLang, 'pt')}`} hrefLang='pt'>
                    <button className={styles.language_button}>Português</button>
                </Link>
            </div>
        </div>
    )
}