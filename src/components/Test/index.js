import React, { useState, useEffect } from "react";
import axios from "axios";

const Test = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const options = {
      method: "GET",
      url: "https://api-football-v1.p.rapidapi.com/v3/standings",
      params: { season: "2022", league: "39" },
      headers: {
        "X-RapidAPI-Key": "629a58f79cmshfb145eb0a13fef4p192114jsn550f87c25aeb",
        "X-RapidAPI-Host": "api-football-v1.p.rapidapi.com",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data.response[0].league.standings[0]);
        setData(response.data.response[0].league.standings[0]);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  return (
    <div className="App">
      <h1>This is it</h1>
      {data.map((item) => {
        return (
          <div>
            <div>
              <h2>{item.name}</h2>
              <p>{item.goalsDiff}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Test;
