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

export const getAllTexts = async () => {
    const query = `
{
  textCollection {
    items {
      text,
      type {
        name,
        position,
        secondaryPosition
      },
      city
    }
  }
}
`;

    return getContentfulDataByQuery(query).then(data => data.textCollection.items);
}

export const selectAllUniqueCities = (texts) => {
    const cities = new Set();

    texts.forEach(item => {
        item.city.forEach(city => cities.add(city));
    });

    return Array.from(cities);
}