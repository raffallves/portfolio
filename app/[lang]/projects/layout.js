import styles from './highlights.module.css'
import '../../prism-duotone-sea.css'

export default function HighlightsLayout({ children, params }) {

    return (
      <main>
        <article className={styles.article}>
            {children}
        </article>
      </main>
    )
  }
  