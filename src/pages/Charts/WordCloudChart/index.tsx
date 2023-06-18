import React from 'react';
import {AntvWordCloudChart} from "../../../components/Charts";
import CustomChartCard from "../../../components/Charts/CustomChartCard";
import CustomBreadcrumb from "../../../components/CustomBreadcrumb";

const WordCloudChart = () => {
    return (
        <>
            <CustomBreadcrumb items={[{title: "home"}, {title: "charts"}, {title: "word cloud"}]} separator="/" marginTop="10"/>
            <CustomChartCard title="WordCloud - Antv-G2plot" chartComponent={<AntvWordCloudChart/>}/>
        </>
    );
};

export default WordCloudChart;