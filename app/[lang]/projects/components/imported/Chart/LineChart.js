"use client"
import { scaleUtc, scaleLinear } from "d3-scale"
import { line } from 'd3-shape'
import { max, extent } from 'd3-array'
import { useChartDimensions } from "./hooks/chart"
import AxisLeft from './AxisLeft'
import AxisBottom from './AxisBottom'

const data = [
    {date: '2023-01-01', value: 50},
    {date: '2023-01-15', value: 70},
    {date: '2023-01-28', value: 35},
    {date: '2023-02-07', value: 26},
    {date: '2023-02-16', value: 81},
    {date: '2023-03-18', value: 19},
    {date: '2023-03-21', value: 42},
    {date: '2023-03-30', value: 63},
    {date: '2023-04-01', value: 54},
    {date: '2023-04-05', value: 33},
    {date: '2023-04-18', value: 89},
    {date: '2023-05-22', value: 67},
    {date: '2023-05-23', value: 46},
    {date: '2023-06-13', value: 27},
]

export default function LineChart() {
    const [ref, dimensions] = useChartDimensions({
        marginLeft: 60,
        marginRight: 40
    })


    const xScale = scaleUtc().domain(extent(data, d => new Date(d.date))).range([0, dimensions.boundedWidth])
    const yScale = scaleLinear().domain([max(data, d => d.value), 0]).range([0, dimensions.boundedHeight])

    const linePath = line().x(d => xScale(new Date(d.date))).y(d => yScale(d.value))

    return (
        <div ref={ref} style={{height: 350}} aria-label='Chart'>
            <svg width={dimensions.width} height={dimensions.height} aria-hidden='true'>
                <g transform={`translate(${[dimensions.marginLeft, dimensions.marginTop].join(',')})`}>
                    <path d={linePath(data)} fill='none' stroke='#1767de' strokeWidth={1} />
                    <g transform={`translate(${[
                        0,
                        0
                    ].join(",")})`}>
                    <AxisLeft domain={yScale.domain()} range={yScale.range()} scaleType={'money'} />
                    </g>
                    <g transform={`translate(${[
                        0,
                        dimensions.boundedHeight
                    ].join(",")})`}>
                        <AxisBottom domain={xScale.domain()} range={xScale.range()}  scaleType={'time'} />
                    </g>
                </g>
            </svg>
        </div>
    );
}