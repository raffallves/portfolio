import ChartsHighlight from "../components/highlights/ChartsHighlight/ChartsHighlight"
import { getContent } from '../content'

export async function generateStaticParams() {
    return [{ lang: 'en' }, { lang: 'pt' }]
}

export default async function CRM({ params: { lang } }) {
    const content = await getContent(lang)
    return (
        <>
            <h1>{content.crm.title}</h1>
            <p>{content.crm.description}</p>
            <ChartsHighlight content={content.crm.chart}/>
        </>
    )
}