import LogoHighlight from '../components/highlights/LogoHighlight/LogoHighlight'
import MDXHighlight from '../components/highlights/MDXHighlight/MDXHighlight'
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

export default async function Blog({ params: { lang } }) {
    const content = await getContent(lang)
    
    return (
        <>
            <h1>{content.blog.title}</h1>
            <p>{content.blog.description}</p>
            <LogoHighlight content={content.blog.logo}/>
            <MDXHighlight content={content.blog.mdx} />
        </>
    )
}