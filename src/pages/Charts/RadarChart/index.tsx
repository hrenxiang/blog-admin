import React from 'react';
import {AntvRadarChart, ReactRadarChart} from "../../../components/Charts";
import CustomChartCard from "../../../components/Charts/CustomChartCard";
import CustomBreadcrumb from "../../../components/CustomBreadcrumb";

const RadarChart = () => {
    return (
        <>
            <CustomBreadcrumb items={[{title: "home"}, {title: "charts"}, {title: "radar"}]} separator="/" marginTop="10"/>
            <CustomChartCard title="Radar - ChatJs" chartComponent={<ReactRadarChart/>}/>
            <CustomChartCard title="Radar - Antv-G2plot" chartComponent={<AntvRadarChart/>} marginTop="10"/>
        </>
    );
};

export default RadarChart;