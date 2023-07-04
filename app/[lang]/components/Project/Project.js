import styles from './project.module.css'
import Link from 'next/link'
import Javascript from '../Icons/Tech/Javascript'
import MySQL from '../Icons/Tech/MySQL'
import Node from '../Icons/Tech/Node'
import React from '../Icons/Tech/React'
import D3 from '../Icons/Tech/D3'
import AWS from '../Icons/Tech/AWS'
import Next from '../Icons/Tech/Next'
import MDX from '../Icons/Tech/MDX'

export default function Project({ content, lang }) {
    const techMap = new Map()
    techMap.set('javascript', <Javascript/>)
    techMap.set('mysql', <MySQL/>)
    techMap.set('node', <Node/>)
    techMap.set('react', <React/>)
    techMap.set('d3', <D3/>)
    techMap.set('aws', <AWS/>)
    techMap.set('next', <Next/>)
    techMap.set('mdx', <MDX/>)

    return (
        <div>
            <h4 className={styles.project_title}>{content.title}</h4>
            <p>{content.description}</p>
            <div className={styles.project_tech_wrapper}>
                <div className={styles.project_tech}>
                    <p>Tech Stack:</p>
                    {content.stack.map(tech => {
                        const component = techMap.get(tech)
                        return (
                            <div className={styles.tech_icon} key={tech}>
                                {component}
                            </div>
                        )
                    })}
                </div>
                <Link href={`${lang}/projects/${content.slug}`}>
                    <button className={styles.highlight_button}>
                        {content.action}
                        <svg width="9" height="16" viewBox="0 0 9 16" fill="none" aria-hidden='true'>
                            <path d="M8.70711 8.70711C9.09763 8.31658 9.09763 7.68342 8.70711 7.29289L2.34315 0.928932C1.95262 0.538408 1.31946 0.538408 0.928932 0.928932C0.538408 1.31946 0.538408 1.95262 0.928932 2.34315L6.58579 8L0.928932 13.6569C0.538408 14.0474 0.538408 14.6805 0.928932 15.0711C1.31946 15.4616 1.95262 15.4616 2.34315 15.0711L8.70711 8.70711ZM6 9H8V7H6V9Z"/>
                        </svg>
                    </button>
                </Link>
            </div>
        </div>
    )
}