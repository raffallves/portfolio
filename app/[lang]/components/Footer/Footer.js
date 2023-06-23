import styles from './footer.module.css'
import { getContent } from '../../content'

export default async function Footer({ lang }) {
    const content = await getContent(lang)
    return (
        <footer className={styles.footer}>
            <p>© 2023 Rafael Alves</p>
            <p>{content.footer.location}</p>
        </footer>
    )
}