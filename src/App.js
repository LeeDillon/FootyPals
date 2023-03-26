import "./App.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Home from "./components/pages/Home/Home";


// To override the default styling use below
const theme = createTheme({
  typography: {
    fontFamily: ["Jost", "sans-serif"].join(","),
    fontWeightLight: "300",
    fontWeightRegular: "400",
    fontWeightBold: "500",
  },
  palette: {
    mode: "light",
    primary: {
      main: "#fff",
    },
    // myBtn: {
    //   main: "#DDB61A",
    // },
  },
});

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Home />
      </ThemeProvider>
    </>
  );
}

export default App;
