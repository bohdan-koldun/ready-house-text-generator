import { Select } from 'antd';

const { Option } = Select;

export function CitySelect({cities, handleChange, initialValue}) {


    return (<Select defaultValue={initialValue} style={{width: 120}} onChange={handleChange}>
        {cities.map(city => (<Option key={city} value={city}>{city}</Option>))}
    </Select>);
}