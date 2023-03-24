import React, { useState, useEffect } from "react";
import axios from "axios";

const apiFixtures = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const options = {
      method: "GET",
      url: "https://api-football-v1.p.rapidapi.com/v3/players/squads",
      params: { season: "2022", league: "39" },
      headers: {
        "X-RapidAPI-Key": "7ca1969ae9msh68d5bd0f9355080p110c06jsn199987ed9ba9",
        "X-RapidAPI-Host": "api-football-v1.p.rapidapi.com",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data.response[0].league.standings);
        setData(response.data.response[0].league.standings);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  return (
    <div className="App">
      {data.map((standings) => (
        <div key={standings}>
          <li></li>
        </div>
      ))}
    </div>
  );
};

export default apiFixtures;
