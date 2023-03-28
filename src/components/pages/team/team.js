import React from "react";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import backgroundImage from "../../../assets/bgImage.jpg";
import TeamsButtons from "../../TeamsButtons/TeamsButtons";
import SearchBar from "../../searchBar/searchBar";
// import Bio from "../../bio/bio";
// import Squad from "../../squad/squad";

const Team = () => {
  return (
    <>
      <TeamsButtons />
      <Box
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        <Typography variant="h3" sx={{ fontWeight: "500" }}>
          Stay up-to-date with everything <br></br> Premier League in one place.
        </Typography>
      </Box>
      <SearchBar />
      {/* <Bio />
      <Squad /> */}

      <style>
        {`
          body {
            background-image: url(${backgroundImage});
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
            height: 100vh;
        `}
      </style>
    </>
  );
};

export default Team;