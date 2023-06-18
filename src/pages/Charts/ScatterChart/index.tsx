import React from 'react';
import {AntvScatterChart, ReactScatterChart} from "../../../components/Charts";
import CustomChartCard from "../../../components/Charts/CustomChartCard";
import CustomBreadcrumb from "../../../components/CustomBreadcrumb";

const ScatterChart = () => {
    return (
        <>
            <CustomBreadcrumb items={[{title: "home"}, {title: "charts"}, {title: "scatter"}]} separator="/" marginTop="10"/>
            <CustomChartCard title="Scatter - ChatJs" chartComponent={<ReactScatterChart/>}/>
            <CustomChartCard title="Scatter - Antv-G2plot" chartComponent={<AntvScatterChart/>} marginTop="10"/>
        </>
    );
};

export default ScatterChart;