import React from "react";
import { Menu } from 'antd';
import { UnorderedListOutlined, FileTextOutlined } from '@ant-design/icons';

export class AppMenu extends React.Component {
    state = {
        current: 'generator',
    };

    handleClick = e => {
        console.log('click ', e);
        this.setState({ current: e.key });
    };

    render() {
        const { current } = this.state;
        return (
            <Menu onClick={this.handleClick} selectedKeys={[current]} mode="horizontal">
                <Menu.Item key="generator" icon={<FileTextOutlined />}>
                    Генератор
                </Menu.Item>
                <Menu.Item key="app-changes" icon={<UnorderedListOutlined />}>
                    Зміни
                </Menu.Item>
            </Menu>
        );
    }
}