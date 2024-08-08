import Grid from "@mui/material/Unstable_Grid2";
import { AppBar, Button, CssBaseline, Paper } from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import theme from "./theme";

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
          <Paper> About Me </Paper>
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
