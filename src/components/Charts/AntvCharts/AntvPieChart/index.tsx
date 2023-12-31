import React, {useEffect, useRef} from 'react';
import {Pie} from '@antv/g2plot';
import "../../style.css";

const AntvPieChart = () => {
    const containerRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const data = [
            {
                type: '分类一',
                value: 27,
            },
            {
                type: '分类二',
                value: 25,
            },
            {
                type: '分类三',
                value: 18,
            },
            {
                type: '分类四',
                value: 15,
            },
            {
                type: '分类五',
                value: 10,
            },
            {
                type: '其他',
                value: 5,
            },
        ];

        const container = containerRef.current as HTMLDivElement;

        if (container) {

            const doughnutPlot = new Pie (container,  {
                appendPadding: 10,
                data,
                angleField: 'value',
                colorField: 'type',
                radius: 1,
                // 设置圆弧起始角度
                startAngle: Math.PI,
                endAngle: Math.PI * 1.5,
                label: {
                    type: 'inner',
                    offset: '-8%',
                    content: '{name}',
                    style: {
                        fontSize: 18,
                    },
                },
                interactions: [
                    {
                        type: 'element-active',
                    },
                ],
                pieStyle: {
                    lineWidth: 0,
                }
            });

            doughnutPlot.render();

            // 清除图表实例
            return () => {
                doughnutPlot.destroy();
            };
        }
    }, []);

    return (
        <div ref={containerRef} className="circle-chart-canvas"/>
    );
};

export default AntvPieChart;