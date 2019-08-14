import React from "react";
import SwipeableViews from "react-swipeable-views";
import { Paper, Typography, makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary
  },
  wallet: {
    margin: 4,
    padding: 12
  }
}));

const TabContainer = ({ children }) => {
  return <Typography component="div">{children}</Typography>;
};

const Wallet = props => {
  const classes = useStyles();
  return (
    <Paper className={classes.wallet}>
      <Typography variant="overline" gutterBottom>
        {"Funds in your wallet"}
      </Typography>
      <SwipeableViews index={props.currency}>
        <TabContainer>
          <Typography variant="h4" gutterBottom>
            {"0.123 BTC"}
          </Typography>
        </TabContainer>
        <TabContainer>
          <Typography variant="h4" gutterBottom>
            {"10,242 XLM"}
          </Typography>
        </TabContainer>
        <TabContainer>
          <Typography variant="h4" gutterBottom>
            {"12.801 LTC"}
          </Typography>
        </TabContainer>
      </SwipeableViews>
    </Paper>
  );
};

export default Wallet;
