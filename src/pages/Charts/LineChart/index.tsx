import React from 'react';
import {AntvLineChart, ReactLineChart} from "../../../components/Charts";
import CustomChartCard from "../../../components/Charts/CustomChartCard";
import CustomBreadcrumb from "../../../components/CustomBreadcrumb";

const LineChart = () => {
    return (
        <>
            <CustomBreadcrumb items={[{title: "home"}, {title: "charts"}, {title: "line"}]} separator="/" marginTop="10"/>
            <CustomChartCard title="Line - ChatJs" chartComponent={<ReactLineChart/>}/>
            <CustomChartCard title="Line - Antv-G2plot" chartComponent={<AntvLineChart/>} marginTop="10"/>
        </>
    );
};

export default LineChart;