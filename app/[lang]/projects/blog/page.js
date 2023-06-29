import LogoHighlight from '../components/highlights/LogoHighlight/LogoHighlight'
import MDXHighlight from '../components/highlights/MDXHighlight/MDXHighlight'

export default function Blog() {
    return (
        <>
            <h1>Blog</h1>
            <p>This blog is meant for me to write about the subjects that interest me as I learn them. You can see the full code by accessing the <a href='https://github.com/raffallves/blog'>remote repository.</a> If you want to see it in action, you can click the first link in the navigation bar above. </p>
            <LogoHighlight/>
            <MDXHighlight/>
        </>
    )
}