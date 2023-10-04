import Image from 'next/image'

export default function CRMArchitectureHighlight({ content }) {
    return (
        <section>
            <h2>{content.h2}</h2>
            <p>{content.p1}</p>
            <p>{content.p2}</p>
            <Image src={'/repository-design-pattern.svg'} width={600} height={600} />
            <p>{content.p3}</p>
            <p>{content.p4}</p>
            <p>{content.p5}</p>
        </section>
    )
}