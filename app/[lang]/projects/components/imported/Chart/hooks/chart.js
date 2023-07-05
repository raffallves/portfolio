import { combineDimensions } from "../lib/utils"
import { ResizeObserver } from '@juggle/resize-observer'
import { useRef, useState, useEffect } from 'react'

export function useChartDimensions(settings) {
    // Sets ref to be used on the chart's wrapper
    const ref = useRef()
    // Sets chart dimensions with both passed in and default settings
    const dimensions = combineDimensions(settings)
    
    const [width, setWidth] = useState(0)
    const [height, setHeight] = useState(0)
    
    useEffect(() => {
        const element = ref.current
        // Use resizeObserver polyfill to work in all browsers
        // This basically watches — or observes, if you will — an element for
        // changes in its dimensions
        const resizeObserver = new ResizeObserver(entries => {
            // Edge cases
            if (!Array.isArray(entries)) return
            if (!entries.length) return

            // Change the width and height states to be the resized ones
            for (let entry of entries) {
                if (entry.contentRect.width !== width) {
                    setWidth(entry.contentRect.width)
                }

                if (entry.contentRect.height !== height) {
                    setHeight(entry.contentRect.height)
                }
            }
          
        })

        resizeObserver.observe(element)

        return () => resizeObserver.unobserve(element)
    }, [height, width])

    // If height and width were specified in the settings, use those
    if (dimensions.width && dimensions.height) return [ref, dimensions]

    // Run combineDimensions again with the new values
    const newSettings = combineDimensions({
        ...dimensions,
        width: dimensions.width || width,
        height: dimensions.height || height
    })

    return [ref, newSettings]
}