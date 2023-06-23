"use client"
import { useState } from 'react'
import LanguagesIcon from '../Icons/LanguagesIcon'
import styles from './lang.module.css'
import Link from 'next/link'

export default function Languages() {
    const [isActiveLang, setIsActiveLang] = useState(false)
    return (
        <div className={styles.languages_wrapper}>
            <button className={styles.language_button} onClick={() => setIsActiveLang(!isActiveLang)}>
                <LanguagesIcon />
            </button>
            <div className={isActiveLang ? styles.languages_menu_active : styles.languages_menu}>
                <Link href={'/en'}>
                    <button className={styles.language_button}>English</button>
                </Link>
                <Link href={'/pt'}>
                    <button className={styles.language_button}>Português</button>
                </Link>
            </div>
        </div>
    )
}