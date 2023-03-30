import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Container, Typography, Box } from "@mui/material";
import Relegation from "../relegation/relegation";

import React, { useState, useEffect } from "react";
import axios from "axios";

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

  const containerStyles = {
    margin: "20px 0px 100px 0px",
  };

  const PlTableStyles = {
    fontWeight: "500",
    color: "#22577a",
    padding: 5,
  };

  return (
    <>
      <Container>
        {/* ------------------ header ------------------ */}
        <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
          <Typography variant="h5" sx={PlTableStyles}>
            Premier League Table
          </Typography>
        </Box>
        <Relegation />
        <Paper elevation={24}>
          <TableContainer component={Paper} sx={containerStyles}>
            <Table aria-label="simple table" stickyHeader>
              <TableHead>
                <TableRow sx={{ fontWeight: "600" }}>
                  <TableCell></TableCell>
                  <TableCell>Team</TableCell>
                  <TableCell sx={{ paddingLeft: 0 }}>P</TableCell>
                  <TableCell sx={{ paddingLeft: 0 }}>W</TableCell>
                  <TableCell sx={{ paddingLeft: 0 }}>D</TableCell>
                  <TableCell sx={{ paddingLeft: 0 }}>L</TableCell>
                  <TableCell sx={{ paddingLeft: 0 }}>GD</TableCell>
                  <TableCell sx={{ paddingLeft: 0 }}>Pts</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data.map((item, index) => (
                  <TableRow key={item.team.id}>
                    <TableCell align="center">
                      {/* ----------- Picks out the first 4 indexes ---------- */}
                      {index < 4 && (
                        <Box
                          sx={{
                            position: "relative",
                            left: ["-20px", "-40px", "-66px", "-80px"],
                            width: "8px",
                            height: "30px",
                            backgroundColor: "#0ead69",
                            display: "inline-block",
                          }}
                        />
                      )}
                      {/* ----------- Picks out the 5th indexes ---------- */}
                      {index === 4 && (
                        <Box
                          sx={{
                            position: "relative",
                            left: ["-20px", "-40px", "-66px", "-80px"],
                            width: "8px",
                            height: "30px",
                            backgroundColor: "#ffd23f",
                            display: "inline-block",
                          }}
                        />
                      )}
                      {/* ----------- Picks out the last 3 indexes ---------- */}
                      {index >= data.length - 3 && (
                        <Box
                          sx={{
                            position: "relative",
                            left: ["-20px", "-40px", "-66px", "-80px"],
                            width: "8px",
                            height: "30px",
                            backgroundColor: "#ee4266",
                            display: "inline-block",
                          }}
                        />
                      )}
                      <img src={item.team.logo} width={30} alt="logo" />
                    </TableCell>
                    <TableCell align="left">{item.team.name}</TableCell>
                    <TableCell align="left" sx={{ paddingLeft: 0 }}>
                      {item.all.played}
                    </TableCell>
                    <TableCell align="left" sx={{ paddingLeft: 0 }}>
                      {item.all.win}
                    </TableCell>
                    <TableCell align="left" sx={{ paddingLeft: 0 }}>
                      {item.all.draw}
                    </TableCell>
                    <TableCell align="left" sx={{ paddingLeft: 0 }}>
                      {item.all.lose}
                    </TableCell>
                    <TableCell align="left" sx={{ paddingLeft: 0 }}>
                      {item.goalsDiff}
                    </TableCell>
                    <TableCell align="left" sx={{ paddingLeft: 0 }}>
                      {item.points}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      </Container>
      <style>
        {`
          body {
            background-color: "#"
        `}
      </style>
    </>
  );
}
