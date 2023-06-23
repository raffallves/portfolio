import styles from './hero.module.css'
import MySketch from '../Icons/MySketch'
import { getContent } from '../../content'

export default async function Hero({ lang }) {
    const content = await getContent(lang)
    return (
        <section className={styles.intro}>
            <div className={styles.title_wrapper}>
                <h1 className={styles.title_1}>Rafael</h1>
                <h1 className={styles.title_2}>Alves</h1>
            </div>
            <div className={styles.subtitle_wrapper}>
                <h2 className={styles.subtitle}>Full-Stack Developer</h2>
            </div>
            <div className={styles.copy_wrapper}>
                <p className={styles.copy}>{content.hero.copy}</p>
            </div>
            <div className={styles.hero_img_wrapper}>
                <MySketch />
            </div>
        </section>
    )
}