import { List, Avatar } from 'antd';

const data = [

    {
        title: 'Добавлено підтримку фільтрації текстів по містах. Добавлено трекінг змін⌚️',
        date: '3 лютого 2022'
    },
    {
        title: 'Підключено Contentful🎉',
        date: '2 лютого 2022'
    },
    {
        title: 'Стартонула розробка коду🕺',
        date: '3 грудня 2021'
    },
];

export function ChangesPage() {
    return (
        <div>
            <List
                itemLayout="horizontal"
                dataSource={data}
                renderItem={item => (
                    <List.Item>
                        <List.Item.Meta
                            title={<b>{item.date}</b>}
                            description={item.title}
                        />
                    </List.Item>
                )}
            />
        </div>
    );
}