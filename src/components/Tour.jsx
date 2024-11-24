import React, { useState } from "react";

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
          <button onClick={() => buttonCallback(tour.id)}>
            Not Interested
          </button>
        </div>
      </div>
    </>
  );
}

export default Tour;