import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Navbar from "../src/components/Navbar";
import Grid from '@material-ui/core/Grid';
import CityView from "../src/components/CityView";

import "./styles.css";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    overflow: 'hidden',
    margin: theme.spacing(3),
    padding: theme.spacing(0, 3),
  },
  paper: {
    maxWidth: 400,
    margin: `${theme.spacing(1)}px auto`,
    padding: theme.spacing(2),
  },
}));

export default function App() {
  const classes = useStyles();
  return (
    <div className="App">
      <Navbar
      name={"World is my Oyster"}
      />
      <div className={classes.root}>

      <Grid container spacing={3}>
        {/* <Grid item xs={2}>
          </Grid> */}
        <Grid item xs={12}>
            <CityView/>
          </Grid>
        {/* <Grid item xs={2}>
          </Grid> */}
      </Grid>
  
      </div>
  </div>
  );
}
