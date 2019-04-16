import React, { Component } from 'react';
import style from './index.module.scss';
import { Table, Divider, Tag } from 'antd';
import { Link } from 'react-router-dom'
class Index extends Component {
    render() {
        const columns = [{
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            render: text => <a href="javascript:;">{text}</a>,
        }, {
            title: 'Age',
            dataIndex: 'age',
            key: 'age',
        }, {
            title: 'Address',
            dataIndex: 'address',
            key: 'address',
        }, {
            title: 'Tags',
            key: 'tags',
            dataIndex: 'tags',
            render: tags => (
                <span>
                    {tags.map(tag => {
                        let color = tag.length > 5 ? 'geekblue' : 'green';
                        if (tag === 'loser') {
                            color = 'volcano';
                        }
                        return <Tag color={color} key={tag}>{tag.toUpperCase()}</Tag>;
                    })}
                </span>
            ),
        }, {
            title: 'Action',
            key: 'action',
            render: (text, record) => (
                <span>
                    <a href="javascript:;">Invite {record.name}</a>
                    <Divider type="vertical" />
                    <a href="javascript:;">Delete</a>
                </span>
            ),
        }];

        const data = [{
            key: '1',
            name: 'John Brown',
            age: 32,
            address: 'New York No. 1 Lake Park',
            tags: ['nice', 'developer'],
        }, {
            key: '2',
            name: 'Jim Green',
            age: 42,
            address: 'London No. 1 Lake Park',
            tags: ['loser'],
        }, {
            key: '3',
            name: 'Joe Black',
            age: 32,
            address: 'Sidney No. 1 Lake Park',
            tags: ['cool', 'teacher'],
        }];
        return (
            <div className={style.Index}>
                <span>sdfsdf</span>
                <Table columns={columns} dataSource={data} />
                <Link to='/friends'>朋友页 </Link>
                <br/>
                <Link to='/book'>book </Link>
            </div>
        );
    }
}

export default Index;
