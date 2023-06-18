import React from 'react';
import {AntvDoughnutChart, ReactDoughnutChart} from "../../../components/Charts";
import CustomChartCard from "../../../components/Charts/CustomChartCard";
import CustomBreadcrumb from "../../../components/CustomBreadcrumb";

const DoughnutChart = () => {
    return (
        <>
            <CustomBreadcrumb items={[{title: "home"}, {title: "charts"}, {title: "doughnut"}]} separator="/" marginTop="10"/>
            <CustomChartCard title="Doughnut - ChatJs" chartComponent={<ReactDoughnutChart/>}/>
            <CustomChartCard title="Doughnut - Antv-G2plot" chartComponent={<AntvDoughnutChart/>} marginTop="10"/>
        </>
    );
};

export default DoughnutChart;