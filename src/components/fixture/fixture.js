import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
// import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Container, Box, Typography } from "@mui/material";
import Paper from "@mui/material/Paper";
import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Fixture() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const options = {
      method: "GET",
      url: "https://api-football-v1.p.rapidapi.com/v3/fixtures",
      params: { league: "39", next: "50" },
      headers: {
        "X-RapidAPI-Key": `${process.env.REACT_APP_FOOTBALL_KEY}`,
        "X-RapidAPI-Host": "api-football-v1.p.rapidapi.com",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data.response);
        setData(response.data.response);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  const PlTableStyles = {
    fontWeight: "500",
    color: "#22577a",
    padding: 5,
  };

  const containerStyles = {
    margin: "20px 0px 100px 0px",
  };

  const dateStyle = {
    borderBottom: "none",
    paddingBottom: 0,
    fontWeight: "600",
  };

  const timeStyle = {
    paddingTop: 0,
    fontWeight: "600",
  };

  return (
    <Container>
      {/* ------------------ header ------------------ */}
      <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
        <Typography variant="h5" sx={PlTableStyles}>
          Upcoming Fixtures
        </Typography>
      </Box>
      <Paper elevation={24}>
        <TableContainer component={Paper} sx={containerStyles}>
          <Table aria-label="simple table" stickyHeader>
            <TableBody>
              {data.map((item) => (
                <React.Fragment key={item.teams.id}>
                  <TableRow>
                    <TableCell colSpan={6} align="center" sx={dateStyle}>
                      {new Date(item.fixture.date).toLocaleString("en-GB", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell align="right" sx={{ fontSize: "1rem", pt: "0px" }}>
                      {item.teams.home.name}
                    </TableCell>
                    <TableCell align="left" sx={{ pt: "0px" }}>
                      <img src={item.teams.home.logo} width={36} alt="logo" />{" "}
                    </TableCell>
                    <TableCell align="center" sx={timeStyle}>
                      {new Date(item.fixture.date).toLocaleString("en-GB", {
                        hour: "numeric",
                        minute: "numeric",
                        hour12: false,
                      })}
                    </TableCell>
                    <TableCell align="right" sx={{ pt: "0px" }}>
                      <img src={item.teams.away.logo} width={30} alt="logo" />{" "}
                    </TableCell>
                    <TableCell align="left" sx={{ fontSize: "1rem", pt: "0px" }}>
                      {item.teams.away.name}
                    </TableCell>
                  </TableRow>
                </React.Fragment>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Container>
  );
}
