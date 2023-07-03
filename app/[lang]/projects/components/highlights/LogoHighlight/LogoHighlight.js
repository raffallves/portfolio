import Logo from '../../imported/Logo/Logo'

export default function LogoHighlight({ content }) {
    return (
        <section>
            <h2>{content.h2}</h2>
            <Logo />
            <p>{content.p1}</p>
            <p>{content.p2}</p>
            <p>{content.p3}</p>
            <p>{content.p4}</p>
        </section>
    )
}