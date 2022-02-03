import {useState, useEffect} from "react";
import {Divider} from "antd";
import Text from "antd/es/typography/Text";
import {getAllCitiesAndTextTypes, getAllTexts, selectAllUniqueCities} from "../utils";
import {CitySelect} from "../components";


const filterByCity = (texts, city) => {
    return texts.filter(text => text.city.includes(city))
}

export function GeneratorPage() {
    const [data, setData] = useState(null);
    const [cities, setCities] = useState(null);
    const [currentCity, setCurrentCity] = useState('Всі');

    useEffect(() => {
        getAllTexts()
            .then((data) => {

                console.log('fetching all data');

                setData(data);

                setCities(selectAllUniqueCities(data));
            })
            .catch(err => {
                console.log(err)
            });
    }, []);

    if (!data) {
        return "Loading...";
    }

    function handleCityChange(value) {
        console.log(`selected ${value}`);
        setCurrentCity(value);
    }

    return (
        <div>
            <Text>Місто/Село: </Text>
            {cities && <CitySelect cities={cities} handleChange={handleCityChange} initialValue={currentCity}/>}
            <Divider/>
            {JSON.stringify(filterByCity(data, currentCity))}
        </div>
    );
}