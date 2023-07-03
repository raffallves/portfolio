import LineChart from "../../imported/Chart/LineChart"

export default function ChartsHighlight({ content }) {
    return (
        <section>
            <h2>{content.h2}</h2>
            <p>{content.p1}</p>
            <p>{content.p2}</p>
            <p>{content.p3}</p>
            <LineChart/>
            <p>{content.p4}</p>
            <p>{content.p5}</p>
        </section>
    )
}