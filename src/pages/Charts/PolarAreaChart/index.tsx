import React from 'react';
import {ReactPolarAreaChart} from "../../../components/Charts";
import CustomChartCard from "../../../components/Charts/CustomChartCard";
import CustomBreadcrumb from "../../../components/CustomBreadcrumb";

const PolarAreaChart = () => {
    return (
        <>
            <CustomBreadcrumb items={[{title: "home"}, {title: "charts"}, {title: "polar area"}]} separator="/" marginTop="10"/>
            <CustomChartCard title="PolarArea - ChatJs" chartComponent={<ReactPolarAreaChart/>}/>
        </>
    );
};

export default PolarAreaChart;