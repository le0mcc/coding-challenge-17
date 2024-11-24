// Utilizing an additional component for readability and state management
import React, { useState } from "react";

function Tour({ tour, buttonCallback }) {
  // Using state for show and hide functionality
  const [minimized, setminimized] = useState(true);

  // Utilize CSS elements, display tour information, and create buttons
  return (
    <>
      <div
        key={tour.id}
        style={{
          borderWidth: "10px",
          border: "solid",
          borderRadius: "10%",
          marginBottom: "10px",
          padding: "10px",
        }}
      >
        <h2>{tour.name}</h2>
        <p>Price: ${tour.price}</p>
        {!minimized && <p>{tour.info}</p>}
        <img src={tour.image} alt={tour.name} width="50%" />
        <div>
          <button
            onClick={() => {
              setminimized(!minimized);
            }}
            style={{ marginRight: "1em" }}
          >
            {minimized ? "Show More" : "Show Less"}
          </button>
          <button onClick={() => buttonCallback(tour.id)}>
            Not Interested
          </button>
        </div>
      </div>
    </>
  );
}

export default Tour;