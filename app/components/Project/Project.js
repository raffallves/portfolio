import styles from './project.module.css'

export default function Project() {
    return (
        <div>
            <h4 className={styles.project_title}>CRM</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam varius justo in lacus blandit efficitur. Donec lectus felis, luctus eget tristique sit amet, consectetur et lorem. Praesent interdum enim ut massa cursus aliquam.</p>
            <div className={styles.project_tech_wrapper}>
                <div className={styles.project_tech}>
                    <p>Tech Stack:</p>
                </div>
                <button className={styles.highlight_button}>
                    Highlights
                    <svg width="9" height="16" viewBox="0 0 9 16" fill="none">
                        <path d="M8.70711 8.70711C9.09763 8.31658 9.09763 7.68342 8.70711 7.29289L2.34315 0.928932C1.95262 0.538408 1.31946 0.538408 0.928932 0.928932C0.538408 1.31946 0.538408 1.95262 0.928932 2.34315L6.58579 8L0.928932 13.6569C0.538408 14.0474 0.538408 14.6805 0.928932 15.0711C1.31946 15.4616 1.95262 15.4616 2.34315 15.0711L8.70711 8.70711ZM6 9H8V7H6V9Z"/>
                    </svg>
                </button>
            </div>
        </div>
    )
}