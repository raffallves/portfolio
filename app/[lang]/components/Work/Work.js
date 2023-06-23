import styles from './work.module.css'
import Project from "../Project/Project"
import { getContent } from '../../content'

export default async function Work({ lang }) {
    const content = await getContent(lang)
    return (
        <section className={styles.projects_wrapper}>
            <h3 className={styles.work_title}>{content.work.title}</h3>
            {content.work.projects.map(project => (
                <Project content={project} lang={lang} key={project.title}/>
            ))} 
        </section>
    )
}