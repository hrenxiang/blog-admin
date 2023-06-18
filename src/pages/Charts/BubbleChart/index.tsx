import React from 'react';
import {AntvBubbleChart, ReactBubbleChart} from "../../../components/Charts";
import CustomChartCard from "../../../components/Charts/CustomChartCard";
import CustomBreadcrumb from "../../../components/CustomBreadcrumb";

const BubbleChart = () => {
    return (
        <>
            <CustomBreadcrumb items={[{title: "home"}, {title: "charts"}, {title: "bubble"}]} separator="/" marginTop="10"/>
            <CustomChartCard title="Bubble - ChatJs" chartComponent={<ReactBubbleChart/>}/>
            <CustomChartCard title="Bubble - Antv-G2plot" chartComponent={<AntvBubbleChart/>} marginTop="10"/>
        </>
    );
};

export default BubbleChart;