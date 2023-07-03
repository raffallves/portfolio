"use client"
import { useEffect } from 'react'
import Prism from 'prismjs'
import 'prismjs/components/prism-javascript'
import 'prismjs/components/prism-typescript'

export default function MDXHighlight({ content }) {
    useEffect(() => {
        Prism.highlightAll()
    }, [])

    const snippet1 = `// @lib/posts.js
    // Gets post data to be parsed by MDX Remote
    export async function getPostData(slug, lang, subject) {
        const command = new GetObjectCommand({
            Bucket: process.env.AWS_BUCKET, 
            Key: \`\\\${lang}\\\${subject}\\posts\\\${slug}.mdx\`
        })
        
        try {
            // Try to get post from S3 bucket
            const response = await s3.send(command)
            const stringData = await response.Body.transformToString()
    
            // Combine the data with the slug
            return {
                slug,
                stringData,
            }
        } catch (e) {
            console.error(e.message)
        }
    }`

    const snippet2 = `// @posts/[slug].tsx
    // Retrieves the post's data based on the current path
    export const getStaticProps: GetStaticProps = async ({ params }) => {
        const postData = await getPostData(params.slug, 'en', 'tech')
        const mdxSource = await serialize(postData.stringData, { 
            parseFrontmatter: true, 
            mdxOptions: {
                remarkPlugins:[[remarkPrism]]
            }
        })
    
        return {
            props: {
                source: mdxSource
            }
        }
    }
    
    // Get all possible path names to enable dynamic paths
    export const getStaticPaths: GetStaticPaths = async () => {
        const paths = await getAllPostSlugs('\\en')
        return {
            paths,
            fallback: false
        }
    }
    
    export default function Post({ source }) {
    
        // Create custom components for the MDX page
        const components = {
            p: Paragraph,
            h1: Heading.H1,
            h2: Heading.H2,
            h3: Heading.H3,
            h4: Heading.H4,
            h5: Heading.H5,
            h6: Heading.H6,
        }
    
        return (
            <>
                <Head>
                    <title>{source.frontmatter.title}</title>
                </Head>
                <article>
                    <h1>{source.frontmatter.title}</h1>
                    <MDXRemote {...source} components={components} />
                </article>
            </>
        )
    }`
    
    return (
        <section>
            <h2>{content.h2}</h2>
            <p>{content.p1}</p>
            <p>{content.p2}</p>
            <p>{content.p3}</p>
            <pre className={`language-javascript`}>
                <code className={`language-javascript`}>{snippet1}</code>
            </pre>
            <p>{content.p4}</p>
            <pre className={`language-typescript`}>
                <code className={`language-javascript`}>{snippet2}</code>
            </pre>
        </section>
    )
}