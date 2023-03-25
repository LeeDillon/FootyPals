import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import React, { useState, useEffect } from "react";
import axios from "axios";

// function createData(name, played, win, draw, lose, goalsDiff, points) {
//   return { name, played, win, draw, lose, goalsDiff, points };
// }

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

export default function DynamicTable() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const options = {
      method: "GET",
      url: "https://api-football-v1.p.rapidapi.com/v3/standings",
      params: { season: "2022", league: "39" },
      headers: {
        "X-RapidAPI-Key": `${process.env.REACT_APP_FOOTBALL_KEY}`,
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
    <TableContainer component={Paper}>
      <Table aria-label="simple table" stickyHeader>
        <TableHead>
          <TableRow>
            <TableCell></TableCell>
            <TableCell>Team</TableCell>
            <TableCell>P</TableCell>
            <TableCell>W</TableCell>
            <TableCell>D</TableCell>
            <TableCell>L</TableCell>
            <TableCell>GD</TableCell>
            <TableCell>Pts</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((item) => (
            <TableRow key={item.team.id}>
              <TableCell align="left">
                <img src={item.team.logo} width={30} alt="logo" />{" "}
              </TableCell>
              <TableCell align="left">{item.team.name}</TableCell>
              <TableCell align="left">{item.all.played}</TableCell>
              <TableCell align="left">{item.all.win}</TableCell>
              <TableCell align="left">{item.all.draw}</TableCell>
              <TableCell align="left">{item.all.lose}</TableCell>
              <TableCell align="left">{item.goalsDiff}</TableCell>
              <TableCell align="left">{item.points}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
