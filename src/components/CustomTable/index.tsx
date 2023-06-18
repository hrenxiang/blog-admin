import React, {useState} from 'react';
import {Form, Input, InputNumber, Table} from 'antd';
import "./style.css";
import {TableRowSelection} from "antd/es/table/interface";

interface EditableTableProps<T> {
    columns: Array<{
        title?: string,
        dataIndex?: string,
        editable?: boolean,
        width?: string,
        ellipsis?:boolean,
        filters?: any,
        filteredValue?: any,
        onFilter?: any,
        sorter?: any,
        sortOrder?: any,
    }>

    data: T[];

    isEditing?: any;
    onChange?: any;
}

interface EditableCellProps<T> extends React.HTMLAttributes<HTMLElement> {
    editing: boolean;
    dataIndex: keyof T;
    title: string;
    inputType: 'number' | 'text';
    record: T;
    index: number;
    children: React.ReactNode;
}

const EditableCell: React.FC<EditableCellProps<any>> = ({
                                                            editing,
                                                            dataIndex,
                                                            title,
                                                            inputType,
                                                            record,
                                                            index,
                                                            children,
                                                            ...restProps
                                                        }) => {
    const inputNode = inputType === 'number' ? <InputNumber/> : <Input/>;

    return (
        <td {...restProps}>
            {editing ? (
                <Form.Item
                    name={dataIndex as string}
                    style={{margin: 0}}
                    rules={[
                        {
                            required: true,
                            message: `Please input ${title}!`,
                        },
                    ]}
                >
                    {inputNode}
                </Form.Item>
            ) : (
                children
            )}
        </td>
    );
};

const CustomTable = <T extends {}>({columns, data, isEditing, onChange}: EditableTableProps<T>) => {

    // columns
    const mergedColumns = columns.map((col) => {
        if (!col.editable) {
            return col;
        }
        return {
            ...col,
            onCell: (record: any) => ({
                record,
                inputType: col.dataIndex === 'age' ? 'number' : 'text',
                dataIndex: col.dataIndex,
                title: col.title,
                editing: isEditing(record),
            }),
        };
    });

    // selected
    const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);

    const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
        console.log('selectedRowKeys changed: ', newSelectedRowKeys);
        setSelectedRowKeys(newSelectedRowKeys);
    };

    const rowSelection: TableRowSelection<any> = {
        selectedRowKeys,
        onChange: onSelectChange,
        selections: [
            {
                key: 'selectAll',
                text: '全选',
                onSelect: () => {
                    // 全选逻辑
                },
            },
            {
                key: 'selectInvert',
                text: '反选',
                onSelect: () => {
                    // 反选逻辑
                },
            },
            {
                key: 'selectNone',
                text: '不选',
                onSelect: () => {
                    // 不选逻辑
                },
            },
            {
                key: 'odd',
                text: '奇数行',
                onSelect: (changeableRowKeys) => {
                    console.log(changeableRowKeys)
                    const newSelectedRowKeys = changeableRowKeys.filter((_, index) => {
                        if (index % 2 === 0) {
                            return true;
                        }
                        return false;
                    });
                    setSelectedRowKeys(newSelectedRowKeys);
                },
            },
            {
                key: 'even',
                text: '偶数行',
                onSelect: (changeableRowKeys) => {
                    const newSelectedRowKeys = changeableRowKeys.filter((_, index) => {
                        if (index % 2 === 0) {
                            return false;
                        }
                        return true;
                    });
                    setSelectedRowKeys(newSelectedRowKeys);
                },
            },
        ],
    };

    // pagination config
    // 定义 paginationConfig 的类型
    interface PaginationConfig {
        showSizeChanger: boolean;
        pageSizeOptions: string[];
        itemRender: (page: number, type: string, originalElement: React.ReactNode) => React.ReactNode;
        // 其他分页配置...
    }

    const paginationConfig: PaginationConfig = {
        showSizeChanger: true,
        pageSizeOptions: ['15', '20', '25', '30'],
        itemRender: (page, type, originalElement) => {
            if (type === 'page') {
                return <div className={`custom-pagination-item`}>{page}</div>;
            }
            return originalElement;
        },
        // 更多分页配置...
        // 可根据需求进行自定义
    };

    return <Table
        components={{
            body: {
                cell: EditableCell,
            },
        }}
        dataSource={data}
        columns={mergedColumns}
        rowClassName="editable-row leading-10"
        rowSelection={rowSelection}
        onChange={onChange}
        pagination={paginationConfig}
        className="overflow-auto"
    />;
};

export default CustomTable;
