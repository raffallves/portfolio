import Logo from '../../imported/Logo/Logo'

export default function LogoHighlight() {
    return (
        <section>
            <h2>Logo Animation</h2>
            <Logo />
            <p>My personal logo — the same one you can see on this page’s NavBar — was designed with letters from my name in mind (the bottom part is a “V” and the top part is an “A”), and is drawn with SVG to maintain a nice image resolution at any scale.</p>
            <p>In the blog’s version of the logo, I got inspired by the code rain effect from The Matrix. To make that work, I leveraged the html &lt;canvas/&gt; element by using a 2D context that renders randomly generated lines of ones and zeroes in a loop.</p>
            <p>I also used the requestAnimationFrame method from the browser API so that the animation loop is performant and consumes the least amount of memory necessary.</p>
            <p>The whole animation code is run inside a useEffect hook from the React library, which cleans up the canvas and restarts the animation at every rerender (switching pages, for example) to keep things even more performant. The useRef hook is used to get the &lt;canvas/&gt; element directly from the DOM and attach the animation behavior to it.</p>
        </section>
    )
}