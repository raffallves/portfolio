import { getContent } from '../../content'
import styles from './award.module.css'

export default async function Awards({ lang }) {
    const content = await getContent(lang)
    return (
        <section className={styles.awards_wrapper}>
            <h3 className={styles.awards_title}>{content.awards.title}</h3>
            {content.awards.awardStack.map(award => (
                <div>
                    <h4 className={styles.award_title}>{award.title}</h4>
                    <p>{award.description}</p>
                </div>
            ))}
        </section>
    )
}