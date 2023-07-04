"use client"
import { scaleLinear, scaleBand } from 'd3-scale'
import { useMemo } from 'react'

export default function AxisLeft({domain=[100, 0], range=[10, 190], scale="linear"}) {
    if (scale === "linear") {
        // Sets number of ticks
        const ticks = useMemo(() => {
            const yScale = scaleLinear().domain(domain).range(range)
            const height = range[1] - range[0]
            const pixelsPerTick = 30
            const numberOfTicksTarget = Math.max(1, Math.floor(height / pixelsPerTick))

            return yScale.ticks(numberOfTicksTarget).map(value => ({
                value,
                yOffset: yScale(value)
            }))
        }, [domain.join("-"), range.join("-")])

        return (
            <>
                <path d={[
                    "M", -6, range[0],
                    "h", 6,
                    "V", range[1],
                    "h", -6
                ].join(" ")}
                fill="none"
                stroke="currentColor"/>
                {ticks.map(({ value, yOffset }) => (
                    <g key={value} transform={`translate(0, ${yOffset})`}>
                        <line x2="-6" stroke="currentColor"/>
                        <text key={value} stroke="currentColor" style={{fontSize: "10px", textAnchor: "middle", transform: "translateX(-20px)"}}>{value}</text>
                    </g>
                ))}
            </>
        )
    } else if (scale === "band") {
        // Sets number of ticks
        const ticks = useMemo(() => {
            const yScale = scaleBand()
                .domain(domain)
                .range(range)
                .paddingInner(0.3)
                .paddingOuter(0.4)
                .align(0.5)

            return domain.map(value => ({
                value,
                yOffset: yScale(value)
            }))
        }, [domain.join("-"), range.join("-")])

        return (
            <>
                <path d={[
                    "M", -6, range[0],
                    "h", 6,
                    "V", range[1],
                    "h", -6
                ].join(" ")}
                fill="none"
                stroke="currentColor"/>
                {ticks.map(({ value, yOffset }) => (
                    <g key={value} transform={`translate(0, ${yOffset})`}>
                        <line x2="-6" stroke="currentColor"/>
                        <text key={value} 
                        style={{
                            fontSize: "10px", 
                            textAnchor: "middle",
                            transform: "rotate(-45deg) translateX(-35px)"
                        }}>{value}</text>
                    </g>
                ))}
            </>
        )
    }
}