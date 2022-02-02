import { useState, useEffect } from "react";
import {getAllCitiesAndTextTypes} from "../utils/contentful";

export function Generator() {
    const [data, setData] = useState(null);

    useEffect(() => {
        getAllCitiesAndTextTypes()
            .then((data) => {

                console.log(data, 'ddd');

                setData(data);
            })
            .catch(err => {
                console.log(err)
            });
    }, []);

    if (!data) {
        return "Loading...";
    }

    return (
        <div>
            {JSON.stringify(data)}
        </div>
    );
}