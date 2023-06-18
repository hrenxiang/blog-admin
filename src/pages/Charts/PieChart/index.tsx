import React from 'react';
import {AntvPieChart, ReactPieChart} from "../../../components/Charts";
import CustomChartCard from "../../../components/Charts/CustomChartCard";
import CustomBreadcrumb from "../../../components/CustomBreadcrumb";


const PieChart = () => {
    return (
        <>
            <CustomBreadcrumb items={[{title: "home"}, {title: "charts"}, {title: "pie"}]} separator="/" marginTop="10"/>
            <CustomChartCard title="Pie - ChatJs" chartComponent={<ReactPieChart/>}/>
            <CustomChartCard title="Pie - Antv-G2plot" chartComponent={<AntvPieChart/>} marginTop="10"/>
        </>
    );
};

export default PieChart;