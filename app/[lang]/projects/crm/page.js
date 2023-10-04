import ChartsHighlight from "../components/highlights/ChartsHighlight/ChartsHighlight"
import CRMArchitectureHighlight from "../components/highlights/crmArchitectureHighlight/crmArchitectureHighlight"
import CRMDevelopmentHighlight from "../components/highlights/crmDevelopmentHighlight/crmDevelopmentHighlight"
import { getContent } from '../content'

export async function generateStaticParams() {
    return [{ lang: 'en' }, { lang: 'pt' }]
}

export const metadata = {
    title: 'Rafael Alves',
    description: 'The Web Dev portfolio of Rafael Alves.',
    themeColor: [
      { media: '(prefers-color-scheme: light)', color: '#f1f1f1' },
      { media: '(prefers-color-scheme: dark)', color: '#332E2E' },
    ],
}

export default async function CRM({ params: { lang } }) {
    const content = await getContent(lang)
    return (
        <>
            <h1>{content.crm.title}</h1>
            <p>{content.crm.description}</p>
            <ChartsHighlight content={content.crm.chart}/>
            <CRMArchitectureHighlight content={content.crm.architecture}/>
            <CRMDevelopmentHighlight content={content.crm.development}/>
        </>
    )
}