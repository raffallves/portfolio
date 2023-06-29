"use client"
import { useMemo } from 'react';
import { scaleBand, scaleLinear, scaleUtc } from 'd3-scale';
import { utcFormat } from 'd3-time-format';

export default function AxisBottom({ domain, range, scaleType }) {
    // Date parsing function
    const parseTime = utcFormat('%b/%Y')
    
    // Sets number of ticks
    const ticks = useMemo(() => {
        if (scaleType === "band") {
            const xScale = scaleBand()
                .domain(domain)
                .range(range)
                .paddingInner(0.3)
                .paddingOuter(0.4)
                .align(0.5)
            
            return domain.map(value => ({
                value,
                xOffset: xScale(value)
            }))
        } else if (scaleType === "time") {
            const xScale = scaleUtc()
                .domain(domain)
                .range(range)
                .nice()
            
            const width = range[1] - range[0]
            const pixelsPerTick = width > 380 ? 60 : 80
            const numberOfDesiredTicks = Math.max(1, Math.floor(width / pixelsPerTick))

            return xScale.ticks(numberOfDesiredTicks).map(value => ({
                value,
                xOffset: xScale(value)
            }))
        } else {
            const xScale = scaleLinear()
                .domain(domain)
                .range(range)
            const width = range[1] - range[0]
            const pixelsPerTick = 30
            const numberOfDesiredTicks = Math.max(1, Math.floor(width / pixelsPerTick))

            return xScale.ticks(numberOfDesiredTicks).map(value => ({
                value,
                xOffset: xScale(value)
            }))
        }
        
    }, [domain.join("-"), range.join("-")])

    return (
        <>
            <path d={[
                "M", range[0], 6,
                "v", -6,
                "H", range[1],
                "v", 6
            ].join(" ")}
            fill="none"
            stroke="currentColor"/>
            {ticks.map(({ value, xOffset }) => (
                <g key={value} transform={`translate(${xOffset}, 0)`}>
                    <line y2="6" stroke="currentColor"/>
                    <text key={value} style={{fontSize: "10px", textAnchor: "middle", transform: "translateY(20px)"}}>{
                        scaleType === "time" ? 
                            !value ? '' : parseTime(value) 
                        : value 
                    }</text>
                </g>
            ))}
        </>
    )

}