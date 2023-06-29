"use client"
import { useEffect } from 'react'
import Prism from 'prismjs'
import 'prismjs/components/prism-javascript'
import styles from './code.module.css'

export default function CodeSnippet({ lang, children }) {
    useEffect(() => {
        Prism.highlightAll()
    }, [])

    return (
        <div className={styles.code_wrapper}>
            <pre className={`language-${lang}`}>
                <code className={`language-${lang}`}>{children}</code>
            </pre>
        </div>
    )
}