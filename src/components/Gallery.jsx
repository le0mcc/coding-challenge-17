import React, { useState, useEffect } from "react";
import Tour from "./Tour";

function LoadingMessage({ show }) {
  // If tour data is present, don't show loading message
  if (!show) {
    return null;
  }

  // Return loading message if tour data isn't present
  return (
    <>
      <h2>Loading...</h2>
    </>
  );
}

function FetchTourData() {
  const [tours, setTours] = useState([]);

  useEffect(() => {
    // Fetch tour data from API
    // Uses id, name, info, image, price
    let url =
      "https://api.allorigins.win/get?url=https://course-api.com/react-tours-project";
    fetch(url)
      .then((response) => {
        // check if the response is successful
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        return response.json();
      })
      // Parse data from response object
      .then((data) => setTours(JSON.parse(data.contents)))
      .catch((error) => {
        // Handle and display an error message if the fetch fails
        alert("Failed to load");
        console.error(`Error fetching data ${error}`);
      });
  }, []); // Empty dependency array so it only runs once when the component mounts

  // Creating new array without the target and setting state
  function removeTour(targetId) {
    setTours(tours.filter((t) => t.id !== targetId));
  };

  return (
    // Return each tour's information using map
    <div>
      <LoadingMessage show={tours.length == 0} />
      <>
        <h2>Tour Data</h2>
        {tours.map((tour) => (
            <Tour key={tour.id} tour={tour} buttonCallback={removeTour}/>
        ))}
      </>
    </div>
  );
}

export default FetchTourData;