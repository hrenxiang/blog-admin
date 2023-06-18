import React, {useEffect, useRef} from 'react';
import {Radar} from '@antv/g2plot';
import "../../style.css";

const AntvRadarChart = () => {
    const containerRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const data = [
            { "item": "Design", "user": "a", "score": 70 },
            { "item": "Design", "user": "b", "score": 30 },
            { "item": "Development", "user": "a", "score": 60 },
            { "item": "Development", "user": "b", "score": 70 },
            { "item": "Marketing", "user": "a", "score": 50 },
            { "item": "Marketing", "user": "b", "score": 60 },
            { "item": "Users", "user": "a", "score": 40 },
            { "item": "Users", "user": "b", "score": 50 },
            { "item": "Test", "user": "a", "score": 60 },
            { "item": "Test", "user": "b", "score": 70 },
            { "item": "Language", "user": "a", "score": 70 },
            { "item": "Language", "user": "b", "score": 50 },
            { "item": "Technology", "user": "a", "score": 50 },
            { "item": "Technology", "user": "b", "score": 40 },
            { "item": "Support", "user": "a", "score": 30 },
            { "item": "Support", "user": "b", "score": 40 },
            { "item": "Sales", "user": "a", "score": 60 },
            { "item": "Sales", "user": "b", "score": 40 },
            { "item": "UX", "user": "a", "score": 50 },
            { "item": "UX", "user": "b", "score": 60 }
        ];

        const container = containerRef.current as HTMLDivElement;

        if (container) {

            const doughnutPlot = new Radar (container,  {
                data,
                xField: 'item',
                yField: 'score',
                seriesField: 'user',
                meta: {
                    score: {
                        alias: '分数',
                        min: 0,
                        max: 80,
                    },
                },
                xAxis: {
                    line: null,
                    tickLine: null,
                    grid: {
                        line: {
                            style: {
                                lineDash: null,
                            },
                        },
                    },
                },
                // 开启面积
                area: {},
                // 开启辅助点
                point: {
                    size: 2,
                },
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

export default AntvRadarChart;