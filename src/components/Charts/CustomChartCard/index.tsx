import React, { ReactNode } from 'react';

interface CustomChartCardChartProps {
    title: string;
    chartComponent: ReactNode;
    marginTop?: string;
}

const CustomChartCard: React.FC<CustomChartCardChartProps> = ({ title, chartComponent, marginTop }) => {
    return (
        <>
            <div className={`p-8 2xl:p-10 bg-main-bg border-1 border-solid border-gray-400 border-opacity-40 rounded-xl mt-${marginTop}`}>
                <h1 className="mb-10 md:text-lg xl:text-xl 2xl:text-2xl font-medium">{title}</h1>
                {chartComponent}
            </div>
        </>
    );
};

export default CustomChartCard;