import React from "react";
import {
  Paper,
  Typography,
  List,
  ListItem,
  Grid,
  AppBar,
  Tabs,
  Tab,
  Button,
  makeStyles
} from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles(theme => ({
  markets: {
    paddingTop: 3,
    marginLeft: 4,
    marginRight: 4,
    marginBottom: 24
  }
  //   button: {
  //       backgroundColor: theme.palette.common.white
  //   }
}));

const Ledger = () => {
  const classes = useStyles();

  const dataArray = [
    ["Demo User", "0.141 BTC", "BitAI"],
    ["Demo User", "12,031 XLM", "BitAI"],
    ["Demo User", "0.131 BTC", "MedAI"],
    ["Demo User", "2.031 LTC", "MedAI"],
    ["Demo User", "12,031 XLM", "BitAI"],
    ["Demo User", "0.131 BTC", "MedAI"],
    ["Demo User", "2.031 LTC", "MedAI"]
  ];

  return (
    <Grid container>
      <Grid item xs={12}>
        <Paper className={classes.markets}>
          <AppBar position="static" color="default">
            <Tabs
              indicatorColor="primary"
              textColor="primary"
              variant="fullWidth"
              value={0}
            >
              <Tab label="Ledger" />
            </Tabs>
          </AppBar>
          <Typography variant="overline" gutterBottom>
            Transaction ledger
          </Typography>
          <List>
            {dataArray.map( (row, index) => {
              return (
                <ListItem key={index}>
                  <Grid item xs={4}>
                    <Typography variant="overline">{row[0]}</Typography>
                  </Grid>
                  <Grid item xs={4}>
                    <Typography variant="overline">{row[1]}</Typography>
                  </Grid>
                  <Grid item xs={4}>
                    <Typography variant="overline">{row[2]}</Typography>
                  </Grid>
                </ListItem>
              );
            })}
          </List>
        </Paper>
      </Grid>
      <Grid item xs={12}>
        <Link to="/" style={{ textDecoration: "none" }}>
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
          >
            BACK TO DASHBOARD
          </Button>
        </Link>
      </Grid>
    </Grid>
  );
};

export default Ledger;
