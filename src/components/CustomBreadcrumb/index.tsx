import React from 'react';
import { Breadcrumb } from 'antd';
import "./style.css";

interface BreadcrumbItem {
    title?: string;
    href?: string;
    type?: 'separator';
    separator?: string;
}

interface BreadcrumbProps {
    items: BreadcrumbItem[];
    separator: string;
    marginTop?: string;
    marginBottom?: string;
}

const CustomBreadcrumb: React.FC<BreadcrumbProps> = ({ items, separator , marginTop, marginBottom}) => (
    <Breadcrumb items={items} separator={separator} className={`custom_breadcrumb pb-6 text-gray-400 mt-${marginTop} mb-${marginBottom}`}/>
);

export default CustomBreadcrumb;