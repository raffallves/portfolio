import styles from './work.module.css'
import Project from "../Project/Project"

export default function Work() {
    return (
        <section className={styles.projects_wrapper}>
            <h3 className={styles.work_title}>My Work</h3>
           <Project /> 
        </section>
    )
}