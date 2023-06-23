import styles from './contact.module.css'
import { getContent } from '../../content'

export default async function Contact({ lang }) {
    const content = await getContent(lang)
    return (
        <section className={styles.contact_wrapper}>
            <h3 className={styles.contact_title}>{content.contact.title}</h3>
            <p>{content.contact.text}</p>
            <button className={styles.contact_button}>{content.contact.button}</button>
        </section>
    )
}