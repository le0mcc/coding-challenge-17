import React, { useState, useEffect } from 'react';
import NotInterested from './Button';

function FetchTourData() {
    const [tours, setTours] = useState([]);

    useEffect(() => {
        // Fetch tour data from API
        // Uses id, name, info, image, price
        let url = 'https://api.allorigins.win/get?url=https://course-api.com/react-tours-project'
        fetch(url)
            .then(response => {
                // check if the response is successful
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                return response.json();
            })
            .then(data => setTours(JSON.parse(data.contents)))
            .catch(error => {
                console.error(`Error fetching data ${error}`)
            })
    }, []); // Empty dependency array so it only runs once when the component mounts

    return (
        <div>
            <h2>Tour Data</h2>
            <>
                {tours.map(tour => (
                    <p key={tour.id}>
                        <h2>{tour.name}</h2>
                        <p>Price: ${tour.price}</p>
                        <p>{tour.info}</p>
                    </p>
                ))}
            </>
        </div>
    )
}

export default FetchTourData;