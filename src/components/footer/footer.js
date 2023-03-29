import * as React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";

export default function Footer() {
  return (
    <Paper
      sx={{
        marginTop: "calc(10% + 60px)",
        width: "100%",
        position: "fixed",
        bottom: 0,
      }}
      component="footer"
      square
      variant="outlined"
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            flexGrow: 1,
            justifyContent: "center",
            display: "flex",
            my: 1,
          }}
        ></Box>

        <Box
          sx={{
            flexGrow: 1,
            justifyContent: "center",
            display: "flex",
            mb: 0.1,
          }}
        >
          <Typography mr={3} variant="caption" color="initial">
            <a target="blank" href="https://github.com/LeeDillon">
              Lee Dillon
            </a>
          </Typography>
          <Typography mr={3} variant="caption" color="initial">
            <a target="blank" href="https://github.com/Murtaza34">
              Murtaza Mohebi
            </a>
          </Typography>

          <Typography mr={3} variant="caption" color="initial">
            <a target="blank" href="https://github.com/axeljamal">
              Axel Jamal
            </a>
          </Typography>

          <Typography mr={3} variant="caption" color="initial">
            <a target="blank" href="https://github.com/HelderBalbino">
              Helder Balbino
            </a>
          </Typography>

          <Typography variant="caption" color="initial">
            Copyright ©2023.
          </Typography>
        </Box>
      </Container>
    </Paper>
  );
}
