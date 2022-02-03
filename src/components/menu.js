import React from "react";
import { Menu } from 'antd';
import { UnorderedListOutlined, FileTextOutlined } from '@ant-design/icons';

export class AppMenu extends React.Component {

    render() {
        const path = window.location.pathname;

        return (
            <Menu onClick={this.handleClick} selectedKeys={[path]} mode="horizontal">
                <Menu.Item key="/"  icon={<FileTextOutlined />}>
                    <a href="/">Генератор</a>
                </Menu.Item>
                <Menu.Item key="/changes" icon={<UnorderedListOutlined />}>
                     <a href="/changes">Зміни</a>
                </Menu.Item>
            </Menu>
        );
    }
}