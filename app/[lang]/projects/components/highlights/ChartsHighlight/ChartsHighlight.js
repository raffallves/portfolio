import LineChart from "../../imported/Chart/LineChart"

export default function ChartsHighlight() {
    return (
        <section>
            <h2>Charts</h2>
            <p>Charts are an essential part of any CRM system because they’re the best way to visualize aggregated data. With D3.js, data visualization becomes a breeze — it relies heavily on SVG for building highly scalable and easily transformable shapes of all types.</p>
            <p>The challenge with using D3.js with React is that they both need control of the DOM to do their thing. One simple workaround would be to fill the code with various useRef hooks, but that would limit React’s ability to update what’s rendered on screen.</p>
            <p>A safe compromise is to let D3.js handle the calculations — transforming data into dimensional coordinates — and leave the rendering responsibility to React. This is the approach I chose to follow, and it’s how I created charts such as the one below:</p>
            <LineChart/>
            <p>That one uses mocked data, but the one that’s used in the production app obviously needs to fetch it from a server API (a REST API that I implemented as well).</p>
            <p>One issue with this approach is that a lot of the helper functions from the D3.js library which depend on direct access to the DOM have to be written from scratch, like the axis generator function. Thankfully, <a href="https://2019.wattenberger.com/blog/react-and-d3">this great article by Amelia Wattenberger</a> shows exactly how to do that by using a hook that relies on the ResizeObserver API — or a polyfill version of it — to calculate the chart’s inner and outer dimensions automatically.</p>
        </section>
    )
}