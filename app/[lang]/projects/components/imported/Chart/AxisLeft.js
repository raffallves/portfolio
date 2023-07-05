"use client"
import { scaleLinear, scaleBand } from 'd3-scale'
import { useMemo } from 'react'

export default function AxisLeft({domain=[100, 0], range=[10, 190], scaleType="linear"}) {

    const axisTicks = useMemo(() => {
        if (scaleType === 'money') {
            const scale = scaleLinear().domain(domain).range(range);
            
            // This part helps to set the number of ticks in a given axis depending on its height
            const height = range[1] - range[0];
            const pixelsPerTick = 30;
            const numberOfDesiredTicks = Math.max(1, Math.floor(height / pixelsPerTick));
    
            // Returns an object for every value in the domain with the tick's coordinate offset
            return scale.ticks(numberOfDesiredTicks).map(val => ({
                val,
                offset: scale(val)
            }));
        } else {
            const scale = scaleLinear().domain(domain).range(range);
    
            // Filter to remove non-integer numbers
            const desiredTicks = scale.ticks().filter(tick => Number.isInteger(tick));
    
            // Returns an object for every value in the domain with the tick's coordinate offset
            return desiredTicks.map(val => ({
                val,
                offset: scale(val)
            }));
        }
    }, [domain, range, scaleType])
    
    return (
        <>
            <path d={[
                "M", -6, range[0],
                "h", 6,
                "V", range[1],
                "h", -6
            ].join(' ')}
            fill='none'
            stroke='currentColor'/>
            {axisTicks.map(({ val, offset }) => {
                if (scaleType === 'money') {
                    val = `R$ ${val}`
                }

                return (
                    <g key={val} transform={`translate(0, ${offset})`}>
                        <line x2="-6" stroke='currentColor'/>
                        <text key={val} style={{ fontSize: '10px', textAnchor: 'middle', transform: `translateX(-40px)`}}>{val}</text>
                    </g>
            )})}
        </>
    )
}