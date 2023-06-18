import React, {useState} from 'react';
import {Badge, Button, Form, Popconfirm, TableProps, Typography} from 'antd';
import CustomTable from "../../../components/CustomTable";
import {FilterValue, SorterResult} from "antd/es/table/interface";
import CustomBreadcrumb from "../../../components/CustomBreadcrumb";
import {useStateContext} from "../../../contexts/ContextProvider";

interface Item {
    key: React.Key
    id: number,
    title: string,
    cover: string,
    category: number,
    subcategory: number,
    description: string,
    document_url: string,
    author: string,
    author_avatar: string,
    online: number,
    create_time: string,
    update_time: string,
    valid: number,
    top: number
}

const originData: Item[] = [
    {
        "key": 1,
        "id": 3,
        "title": "MySql 主从复制",
        "cover": "https://images.huangrx.cn/uploads/2023/04/21/blog-web-log-1.jpg",
        "category": 1,
        "subcategory": 1,
        "description": "Mysql的主从复制学习笔记",
        "document_url": "https://huangrx.cn/document/MySql%20%E4%B8%BB%E4%BB%8E%E5%A4%8D%E5%88%B6.md",
        "author": "huangrx",
        "author_avatar": "https://images.huangrx.cn/uploads/2023/04/21/blog-web-logo-2.png",
        "online": 1,
        "create_time": "2023-05-03 17:18:08",
        "update_time": "2023-05-03 17:18:08",
        "valid": 1,
        "top": 0
    },
    {
        "key": 2,
        "id": 5,
        "title": "MySql 基础内容",
        "cover": "https://images.huangrx.cn/uploads/2023/04/21/blog-web-log-1.jpg",
        "category": 1,
        "subcategory": 1,
        "description": "MySql 基础内容学习",
        "document_url": "https://huangrx.cn/document/MySql%20%E5%9F%BA%E7%A1%80%E5%86%85%E5%AE%B9.md",
        "author": "huangrx",
        "author_avatar": "https://images.huangrx.cn/uploads/2023/04/21/blog-web-logo-2.png",
        "online": 1,
        "create_time": "2023-05-03 17:22:23",
        "update_time": "2023-05-03 17:22:23",
        "valid": 1,
        "top": 0
    },
    {
        "key": 3,
        "id": 6,
        "title": "MySql 常用SQL",
        "cover": "https://images.huangrx.cn/uploads/2023/04/21/blog-web-log-1.jpg",
        "category": 1,
        "subcategory": 1,
        "description": "MySql 常用SQL记录",
        "document_url": "https://huangrx.cn/document/MySql%20%E5%B8%B8%E7%94%A8SQL.md",
        "author": "huangrx",
        "author_avatar": "https://images.huangrx.cn/uploads/2023/04/21/blog-web-logo-2.png",
        "online": 0,
        "create_time": "2023-05-03 17:22:23",
        "update_time": "2023-05-03 17:22:23",
        "valid": 0,
        "top": 0
    },
    {
        "key": 4,
        "id": 7,
        "title": "MySql 常用函数",
        "cover": "https://images.huangrx.cn/uploads/2023/04/21/blog-web-log-1.jpg",
        "category": 1,
        "subcategory": 1,
        "description": "MySql 常用函数记录",
        "document_url": "https://huangrx.cn/document/MySql%20%E5%B8%B8%E7%94%A8%E5%87%BD%E6%95%B0.md",
        "author": "huangrx",
        "author_avatar": "https://images.huangrx.cn/uploads/2023/04/21/blog-web-logo-2.png",
        "online": 1,
        "create_time": "2023-05-03 17:22:23",
        "update_time": "2023-05-03 17:22:23",
        "valid": 1,
        "top": 0
    },
    {
        "key": 5,
        "id": 8,
        "title": "MySql 逻辑架构及索引",
        "cover": "https://images.huangrx.cn/uploads/2023/04/21/blog-web-log-1.jpg",
        "category": 1,
        "subcategory": 1,
        "description": "MySql 逻辑架构及索引",
        "document_url": "https://huangrx.cn/document/MySql%20%E9%80%BB%E8%BE%91%E6%9E%B6%E6%9E%84%E5%8F%8A%E7%B4%A2%E5%BC%95.md",
        "author": "huangrx",
        "author_avatar": "https://images.huangrx.cn/uploads/2023/04/21/blog-web-logo-2.png",
        "online": 1,
        "create_time": "2023-05-03 17:22:23",
        "update_time": "2023-05-03 17:22:23",
        "valid": 1,
        "top": 0
    },
    {
        "key": 6,
        "id": 9,
        "title": "MySql 锁及MVCC机制",
        "cover": "https://images.huangrx.cn/uploads/2023/04/21/blog-web-log-1.jpg",
        "category": 1,
        "subcategory": 1,
        "description": "MySql 锁及MVCC机制",
        "document_url": "https://huangrx.cn/document/MySql%20%E9%94%81%E5%8F%8AMVCC%E6%9C%BA%E5%88%B6.md",
        "author": "huangrx",
        "author_avatar": "https://images.huangrx.cn/uploads/2023/04/21/blog-web-logo-2.png",
        "online": 1,
        "create_time": "2023-05-03 17:22:23",
        "update_time": "2023-05-03 17:22:23",
        "valid": 0,
        "top": 0
    },
    {
        "key": 7,
        "id": 10,
        "title": "Dockerfile",
        "cover": "https://images.huangrx.cn/uploads/2023/06/05/pexels-efe-ersoy-16742224.jpg",
        "category": 4,
        "subcategory": 2,
        "description": "Dockerfile是用于构建Docker镜像的一种脚本语言，其常用的语法和相关知识点包括：\n1. 指令（Instructions）\n2. 基础镜像（Base Image）\n3. 构建上下文（Build Context）\n4. 指令缓存（Instruction Cache）",
        "document_url": "https://huangrx.cn/document/Dockerfile.md",
        "author": "huangrx",
        "author_avatar": "https://images.huangrx.cn/uploads/2023/04/21/blog-web-logo-2.png",
        "online": 1,
        "create_time": "2023-05-18 18:38:01",
        "update_time": "2023-05-18 18:38:01",
        "valid": 1,
        "top": 98
    },
    {
        "key": 8,
        "id": 11,
        "title": "Linux Centos7 编程环境及项目上线部署",
        "cover": "https://images.huangrx.cn/uploads/2023/06/05/pexels-miguel-á-padriñán-255377.jpg",
        "category": 5,
        "subcategory": 3,
        "description": "Linux Centos7 编程环境及项目上线部署",
        "document_url": "https://huangrx.cn/document/Linux%20Centos7%20%E7%BC%96%E7%A8%8B%E7%8E%AF%E5%A2%83%E5%8F%8A%E9%A1%B9%E7%9B%AE%E4%B8%8A%E7%BA%BF%E9%83%A8%E7%BD%B2.md",
        "author": "huangrx",
        "author_avatar": "https://images.huangrx.cn/uploads/2023/04/21/blog-web-logo-2.png",
        "online": 1,
        "create_time": "2023-06-05 14:42:13",
        "update_time": "2023-06-05 14:42:13",
        "valid": 1,
        "top": 99
    },
    {
        "key": 9,
        "id": 12,
        "title": "Linux Centos8 编程环境配置手册",
        "cover": "https://images.huangrx.cn/uploads/2022/07/25/62ddefe086746.png",
        "category": 5,
        "subcategory": 3,
        "description": "Linux Centos8 编程环境配置手册",
        "document_url": "https://huangrx.cn/document/Linux%20Centos8%20%E7%BC%96%E7%A8%8B%E7%8E%AF%E5%A2%83%E9%85%8D%E7%BD%AE%E6%89%8B%E5%86%8C.md",
        "author": "huangrx",
        "author_avatar": "https://images.huangrx.cn/uploads/2023/04/21/blog-web-logo-2.png",
        "online": 1,
        "create_time": "2023-06-05 14:42:14",
        "update_time": "2023-06-05 14:42:13",
        "valid": 1,
        "top": 0
    },
    {
        "key": 10,
        "id": 13,
        "title": "Linux 生产常用命令",
        "cover": "https://images.huangrx.cn/uploads/2022/07/22/62daa42422b79.jpg",
        "category": 5,
        "subcategory": 4,
        "description": "Linux 生产常用命令",
        "document_url": "https://huangrx.cn/document/Linux%20%E7%94%9F%E4%BA%A7%E5%B8%B8%E7%94%A8%E5%91%BD%E4%BB%A4.md",
        "author": "huangrx",
        "author_avatar": "https://images.huangrx.cn/uploads/2023/04/21/blog-web-logo-2.png",
        "online": 1,
        "create_time": "2023-06-05 14:42:15",
        "update_time": "2023-06-05 14:42:13",
        "valid": 1,
        "top": 0
    },
    {
        "key": 11,
        "id": 9,
        "title": "MySql 锁及MVCC机制",
        "cover": "https://images.huangrx.cn/uploads/2023/04/21/blog-web-log-1.jpg",
        "category": 1,
        "subcategory": 1,
        "description": "MySql 锁及MVCC机制",
        "document_url": "https://huangrx.cn/document/MySql%20%E9%94%81%E5%8F%8AMVCC%E6%9C%BA%E5%88%B6.md",
        "author": "huangrx",
        "author_avatar": "https://images.huangrx.cn/uploads/2023/04/21/blog-web-logo-2.png",
        "online": 1,
        "create_time": "2023-05-03 17:22:23",
        "update_time": "2023-05-03 17:22:23",
        "valid": 1,
        "top": 0
    },
    {
        "key": 12,
        "id": 10,
        "title": "Dockerfile",
        "cover": "https://images.huangrx.cn/uploads/2023/06/05/pexels-efe-ersoy-16742224.jpg",
        "category": 4,
        "subcategory": 2,
        "description": "Dockerfile是用于构建Docker镜像的一种脚本语言，其常用的语法和相关知识点包括：\n1. 指令（Instructions）\n2. 基础镜像（Base Image）\n3. 构建上下文（Build Context）\n4. 指令缓存（Instruction Cache）",
        "document_url": "https://huangrx.cn/document/Dockerfile.md",
        "author": "huangrx",
        "author_avatar": "https://images.huangrx.cn/uploads/2023/04/21/blog-web-logo-2.png",
        "online": 1,
        "create_time": "2023-05-18 18:38:01",
        "update_time": "2023-05-18 18:38:01",
        "valid": 1,
        "top": 98
    },
    {
        "key": 13,
        "id": 11,
        "title": "Linux Centos7 编程环境及项目上线部署",
        "cover": "https://images.huangrx.cn/uploads/2023/06/05/pexels-miguel-á-padriñán-255377.jpg",
        "category": 5,
        "subcategory": 3,
        "description": "Linux Centos7 编程环境及项目上线部署",
        "document_url": "https://huangrx.cn/document/Linux%20Centos7%20%E7%BC%96%E7%A8%8B%E7%8E%AF%E5%A2%83%E5%8F%8A%E9%A1%B9%E7%9B%AE%E4%B8%8A%E7%BA%BF%E9%83%A8%E7%BD%B2.md",
        "author": "huangrx",
        "author_avatar": "https://images.huangrx.cn/uploads/2023/04/21/blog-web-logo-2.png",
        "online": 1,
        "create_time": "2023-06-05 14:42:13",
        "update_time": "2023-06-05 14:42:13",
        "valid": 1,
        "top": 99
    },
    {
        "key": 14,
        "id": 12,
        "title": "Linux Centos8 编程环境配置手册",
        "cover": "https://images.huangrx.cn/uploads/2022/07/25/62ddefe086746.png",
        "category": 5,
        "subcategory": 3,
        "description": "Linux Centos8 编程环境配置手册",
        "document_url": "https://huangrx.cn/document/Linux%20Centos8%20%E7%BC%96%E7%A8%8B%E7%8E%AF%E5%A2%83%E9%85%8D%E7%BD%AE%E6%89%8B%E5%86%8C.md",
        "author": "huangrx",
        "author_avatar": "https://images.huangrx.cn/uploads/2023/04/21/blog-web-logo-2.png",
        "online": 1,
        "create_time": "2023-06-05 14:42:14",
        "update_time": "2023-06-05 14:42:13",
        "valid": 1,
        "top": 0
    },
    {
        "key": 15,
        "id": 13,
        "title": "Linux 生产常用命令",
        "cover": "https://images.huangrx.cn/uploads/2022/07/22/62daa42422b79.jpg",
        "category": 5,
        "subcategory": 4,
        "description": "Linux 生产常用命令",
        "document_url": "https://huangrx.cn/document/Linux%20%E7%94%9F%E4%BA%A7%E5%B8%B8%E7%94%A8%E5%91%BD%E4%BB%A4.md",
        "author": "huangrx",
        "author_avatar": "https://images.huangrx.cn/uploads/2023/04/21/blog-web-logo-2.png",
        "online": 1,
        "create_time": "2023-06-05 14:42:15",
        "update_time": "2023-06-05 14:42:13",
        "valid": 1,
        "top": 0
    }
];


const Categories: React.FC = () => {

    const {currentColor} = useStateContext();

    const [form] = Form.useForm();
    const [data, setData] = useState(originData);
    const [editingKey, setEditingKey] = useState(-1);
    const [filteredInfo, setFilteredInfo] = useState<Record<string, FilterValue | null>>({});
    const [sortedInfo, setSortedInfo] = useState<SorterResult<Item>>({});

    const handleChange: TableProps<Item>['onChange'] = (pagination, filters, sorter) => {
        console.log('Various parameters', pagination, filters, sorter);
        setFilteredInfo(filters);
        setSortedInfo(sorter as SorterResult<Item>);
    };

    const isEditing = (record: Item) => record.id === editingKey;

    const edit = (record: Partial<Item> & { id: React.Key }) => {
        form.setFieldsValue({name: '', age: '', address: '', ...record});
        setEditingKey(record.id);
    };

    const cancel = () => {
        setEditingKey(-1);
    };

    const save = async (id: React.Key) => {
        try {
            const row = (await form.validateFields()) as Item;

            const newData = [...data];
            const index = newData.findIndex((item) => id === item.id);
            if (index > -1) {
                const item = newData[index];
                newData.splice(index, 1, {
                    ...item,
                    ...row,
                });
                setData(newData);
                setEditingKey(-1);
            } else {
                newData.push(row);
                setData(newData);
                setEditingKey(-1);
            }
        } catch (errInfo) {
            console.log('Validate Failed:', errInfo);
        }
    };

    const columns = [
        {
            title: 'id',
            dataIndex: 'id',
            key: 'id',
            editable: true,
            width: '180px',
            sorter: (a: any, b: any) => a.id - b.id,
            sortOrder: sortedInfo.columnKey === 'id' ? sortedInfo.order : null,
        },
        {
            title: 'title',
            dataIndex: 'title',
            key: 'title',
            editable: true,
            width: '180px',
            filters: [
                {text: 'MySql', value: 'MySql'},
                {text: 'Redis', value: 'Redis'},
            ],
            filteredValue: filteredInfo.title || null,
            onFilter: (value: string, record: any) => record.title.includes(value),
        },
        {
            title: 'cover',
            dataIndex: 'cover',
            key: 'cover',
            editable: true,
            ellipsis: true,
            width: '180px'
        },
        {
            title: 'category',
            dataIndex: 'category',
            key: 'category',
            editable: true,
            width: '180px'
        },
        {
            title: 'subcategory',
            dataIndex: 'subcategory',
            key: 'subcategory',
            editable: true,
            width: '180px'
        }, {
            title: 'description',
            dataIndex: 'description',
            key: 'description',
            editable: true,
            ellipsis: true,
            width: '180px'
        },
        {
            title: 'document_url',
            dataIndex: 'document_url',
            key: 'document_url',
            editable: true,
            ellipsis: true,
            width: '180px'
        },
        {
            title: 'author',
            dataIndex: 'author',
            key: 'author',
            editable: true,
            width: '180px'
        },
        {
            title: 'author_avatar',
            dataIndex: 'author_avatar',
            key: 'author_avatar',
            editable: true,
            ellipsis: true,
            width: '180px'
        },
        {
            title: 'online',
            dataIndex: 'online',
            key: 'online',
            editable: true,
            width: '180px',
            render: (_: any, record: Item) => {
                if (record.online === 1) {
                    return <Badge status="success" text="已上线"/>
                } else {
                    return <Badge status="error" text="未上线"/>
                }
            }
        },
        {
            title: 'create_time',
            dataIndex: 'create_time',
            key: 'create_time',
            editable: true,
            width: '180px',
            sorter: (a: any, b: any) => {
                const dateA = new Date(a.create_time);
                const dateB = new Date(b.create_time);
                return dateA.getTime() - dateB.getTime();
            },
            sortOrder: sortedInfo.columnKey === 'create_time' ? sortedInfo.order : null,
        },
        {
            title: 'update_time',
            dataIndex: 'update_time',
            key: 'update_time',
            editable: true,
            width: '180px',
            sorter: (a: any, b: any) => {
                const dateA = new Date(a.update_time);
                const dateB = new Date(b.update_time);
                return dateA.getTime() - dateB.getTime();
            },
            sortOrder: sortedInfo.columnKey === 'update_time' ? sortedInfo.order : null,
        }, {
            title: 'valid',
            dataIndex: 'valid',
            key: 'valid',
            editable: true,
            width: '180px',
            render: (_: any, record: Item) => {
                if (record.valid === 1) {
                    return <Badge status="success" text="有效"/>
                } else {
                    return <Badge status="error" text="无效"/>
                }
            }
        },
        {
            title: 'top',
            dataIndex: 'top',
            key: 'top',
            editable: true,
            width: '180px',
            sorter: (a: any, b: any) => a.top - b.top,
            sortOrder: sortedInfo.columnKey === 'top' ? sortedInfo.order : null,
        },


        // {
        //     title: 'Age',
        //     dataIndex: 'age',
        //     key: 'age',
        //     sorter: (a: any, b: any) => a.age - b.age,
        //     sortOrder: sortedInfo.columnKey === 'age' ? sortedInfo.order : null,
        //     ellipsis: true,
        //     editable: true
        // },
        // {
        //     title: 'Address',
        //     dataIndex: 'address',
        //     key: 'address',
        //     filters: [
        //         {text: 'London', value: 'London'},
        //         {text: 'New York', value: 'New York'},
        //     ],
        //     filteredValue: filteredInfo.address || null,
        //     onFilter: (value: string, record: any) => record.address.includes(value),
        //     sorter: (a: any, b: any) => a.address.length - b.address.length,
        //     sortOrder: sortedInfo.columnKey === 'address' ? sortedInfo.order : null,
        //     ellipsis: true,
        //     editable: true
        // },
        {
            title: 'operation',
            dataIndex: 'operation',
            width: '180px',
            render: (_: any, record: Item) => {
                const editable = isEditing(record);
                return editable ? (
                    <span>
                        <Typography.Link onClick={() => save(record.id)}>
                            <Button className="mr-3">Save</Button>
                        </Typography.Link>
                        <Typography.Link onClick={cancel}>
                            <Button>Cancel</Button>
                        </Typography.Link>
                    </span>
                ) : (
                    <>
                        <Typography.Link disabled={editingKey !== -1}
                                         onClick={() => edit(record)}>
                            <Button className="mr-3">Edit</Button>
                        </Typography.Link>

                        <Popconfirm
                            title="Delete the data"
                            description="Are you sure to delete this data?"
                            okType="text"
                        >
                            <Button style={{borderColor: currentColor, color: currentColor}}>Delete</Button>
                        </Popconfirm>
                    </>
                );
            },
        },
    ];

    return (
        <>
            <CustomBreadcrumb items={[{title: "home"}, {title: "blog"}, {title: "categories"}]} separator="/" marginTop="10"/>
            <div
                className="p-10 2xl:p-16 bg-white border-1 border-solid border-gray-400 border-opacity-40 rounded-xl">
                <Form form={form} component={false}>
                    <CustomTable columns={columns} data={data} isEditing={isEditing} onChange={handleChange}/>
                </Form>
            </div>
        </>
    );
};

export default Categories;