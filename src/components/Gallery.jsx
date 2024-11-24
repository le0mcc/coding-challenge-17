import React, { useState, useEffect } from "react";

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

function Tour({ tour, buttonCallback }) {
  const [minimized, setminimized] = useState(true);

    return (
    <>
      <div key={tour.id}>
            <h2>{tour.name}</h2>
            <p>Price: ${tour.price}</p>
            {!minimized && <p>{tour.info}</p>}
            <img src={tour.image} alt={tour.name} width="50%" />
            <div>
              <button
                onClick={() => {
                  setminimized(!minimized);
                }}
              >
                {minimized ? "Show More" : "Show Less"}
              </button>
            </div>
            <div>
              <button
                onClick={() => buttonCallback(tour.id)}
              >
                Not Interested
              </button>
            </div>
          </div>
    </>
    )
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

  function removeTour(tourId) {
    setTours(tours.filter((t) => t.id !== tourId));
  };

  return (
    // Return each tour's information
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
