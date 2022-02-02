const CONTENTFUL_SPACE_URL = `https://graphql.contentful.com/content/v1/spaces/${process.env.REACT_APP_CONTENTFUL_SPACE_ID}/`

export const getContentfulDataByQuery = query => {
    return fetch(CONTENTFUL_SPACE_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${process.env.REACT_APP_CONTENTFUL_ACCESS_TOKEN}`,
        },
        body: JSON.stringify({query}),
    })
        .then((response) => response.json())
        .then(({data, errors}) => {
            if (errors) {
                console.error(errors);

                throw new Error('Contentful error');
            }

            return data
        });
}

export const getAllCitiesAndTextTypes = async () => {
    const query = `
{
  textCollection {
    items {
      type,
      city
    }
  }
}
`;

    const data = await getContentfulDataByQuery(query);

    const types = new Set();
    const cities = new Set();

    data.textCollection.items.forEach(item => {
        item.city.forEach(city => cities.add(city));
        item.type.forEach(type => types.add(type));
    });

    return {
        cities: Array.from(cities),
        types: Array.from(types),
    }


}