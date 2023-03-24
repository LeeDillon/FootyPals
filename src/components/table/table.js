import * as React from "react";
import { useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
// import getTableData from "../../utils/api-table";
import axios from "axios";

export default function DenseTable() {
  const handleClick = (e) => {
    e.preventDefault();
    console.log("The link was clicked.");
    console.log("Hello", getTableData());
  };

  var resultsArray = [];

  function getTableData() {
    const options = {
      method: "GET",
      url: "https://api-football-v1.p.rapidapi.com/v3/standings",
      params: { season: "2022", league: "39" },
      headers: {
        "X-RapidAPI-Key": "7ca1969ae9msh68d5bd0f9355080p110c06jsn199987ed9ba9",
        "X-RapidAPI-Host": "api-football-v1.p.rapidapi.com",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        const teams = response.data.response[0].league.standings[0];
        console.log(teams);
        for (let i = 0; i < teams.length; i++) {
          const position = teams.rank;
          const team = teams.team.name;
          const played = teams.all.played;
          const goalDiff = teams.goalsDiff;
          const points = teams.points;
          const rowData = {
            position: position,
            team: team,
            played: played,
            goalDiff: goalDiff,
            points: points,
          };
          console.log(rowData);
          resultsArray.push(rowData);
        }
        console.log(resultsArray);
        return resultsArray;
      })
      .catch(function (error) {
        console.error(error);
      });
  }

  function createData(
    position,
    team,
    played,
    goalDiff,
    points,
  ) {
    return { position, team, played, goalDiff, points};
  }

  const rows = [];
  // const array = getTableData;
  // array.map((standings) =>
  //   createData(
  //     standings.position,
  //     standings.name,
  //     standings.played,
  //     standings.goalsDiff,
  //     standings.points
  //   )
  // );

  return (
    <TableContainer component={Paper}>
      <button onClick={handleClick}>Click me</button>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Premier League Table</TableCell>
            <TableCell align="right">Postion</TableCell>
            <TableCell align="right">Name</TableCell>
            <TableCell align="right">Played</TableCell>
            <TableCell align="right">GD</TableCell>
            <TableCell align="right">Points</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.position}</TableCell>
              <TableCell align="right">{row.name}</TableCell>
              <TableCell align="right">{row.played}</TableCell>
              <TableCell align="right">{row.goalsDiff}</TableCell>
              <TableCell align="right">{row.points}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
