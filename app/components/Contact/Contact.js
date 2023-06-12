import styles from './contact.module.css'

export default function Contact() {
    return (
        <section className={styles.contact_wrapper}>
            <h3 className={styles.contact_title}>Reach Out</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam varius justo in lacus blandit efficitur. Donec lectus felis, luctus eget tristique sit amet, consectetur et lorem. Praesent interdum enim ut massa cursus aliquam.</p>
            <button className={styles.contact_button}>Contact Me</button>
        </section>
    )
}