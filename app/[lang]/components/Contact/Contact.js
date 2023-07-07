import styles from './contact.module.css'
import { getContent } from '../../content'
import Link from 'next/link'

export default async function Contact({ lang }) {
    const content = await getContent(lang)
    return (
        <section className={styles.contact_wrapper}>
            <h3 className={styles.contact_title}>{content.contact.title}</h3>
            <p>{content.contact.text}</p>
            <a href={'mailto:rafael@rafalves.com'} rel='noopener noreferrer'>
                <button className={styles.contact_button}>{content.contact.button}</button>
            </a>
        </section>
    )
}