import Grid from "@mui/material/Unstable_Grid2";
import { AppBar, Button, CssBaseline, Paper } from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import theme from "./theme";

import AboutMe from "./components/AboutMe";

//TODO: investigate how ThemeProvider and CssBasline work, right now all i know is that theme as some colour, cssbaeline makes the background a colour

//TODO: for Grid, once content placeholders are there, see what numbers make it look right

//TODO: projects i want a carousel, look into how to make that work, MUI docs has something that may be useful with Steppers

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar>
        
      </AppBar>
      <Grid container spacing={2}>
        <Grid xs={4}>
          <Paper> Welcome </Paper>
          <Button> Test </Button>
        </Grid>
        <Grid xs={6}>
          <AboutMe />
        </Grid>
        <Grid xs={4}>
          <Paper> Previous Projects </Paper>
        </Grid>
        <Grid xs={4}>
          <Paper> Contact </Paper>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

export default App;
