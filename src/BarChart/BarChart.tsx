import React, {useEffect, useRef} from 'react';
import * as d3 from 'd3';

import './barChartStyles.scss';
import {useSelector} from "react-redux";

interface IProps {
    data?: number[]
}

export default function BarChart() {
    const data: number[] = useSelector((state: any) => state.data.data);
    const d3Container = useRef(null);

    useEffect(() => {
        if (data && d3Container.current) {
            const svgElement = d3.select(d3Container.current);


            // bars
            svgElement
                .selectAll('rect')
                .data(data)
                .enter()
                .append('rect')
                // styling
                .attr('fill', (d) => d < 20 ? 'red' : 'navy')
                .attr('height', (d, i) => d * 3)
                .attr('width', '15')
                // positioning
                .attr('x', (d, i) => i * 30)
                .attr('y', (d, i) => 500 - (d * 3))
                // hover
                .attr('class', 'bar')
                .append('title')
                .text((d) => d < 20 ? 'This is a very low number' : 'This is standard')
            // listeners
            // svgElement.on('click', d() => alert(d3.mouse(d3Container)))

            //labels
            svgElement
                .selectAll('text')
                .data(data)
                .enter()
                .append('text')
                // positioning
                .attr("x", (d, i) => i * 30)
                .attr("y", (d, i) => (500 - 3 * d) - 3)
                .text((d) => d)
            // styling
            // .attr('fill', 'red')
            // .attr('font-size', '15px')

        }
    });

    return (
            <svg
                className='d3-component'
                width={'50%'}
                height={500}
                ref={d3Container}
            >
            </svg>
    )
};


