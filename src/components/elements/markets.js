import React from "react";
import { useDispatch } from "react-redux";
import { ArrowUpward, ArrowDownward } from "@material-ui/icons";
import { red, green } from "@material-ui/core/colors";
import {
  AppBar,
  Tabs,
  Tab,
  Paper,
  Typography,
  List,
  ListItem,
  ListItemText,
  Button,
  makeStyles
} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary
  },
  appBar: {
    maxWidth: 375
  },
  iconRed: {
    color: red[500]
  },
  iconGreen: {
    color: green[500]
  },
  markets: {
    paddingTop: 3,
    marginLeft: 4,
    marginRight: 4
  }
}));
;
const Markets = props => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const returnCoinValues = company => {
    switch (props.state.currency) {
      case 0:
        return `${(company.stock * 0.001).toFixed(3)} BTC`;
      case 1:
        return `${(company.stock * 3.2).toFixed(2)} XLM`;
      case 2:
        return `${(company.stock * 0.2).toFixed(2)} LTC`;
      default:
        return null;
    }
  };

  return (
    <Paper className={classes.markets}>
      <AppBar position="static" color="default" className={classes.appBar}>
        <Tabs
          value={props.state.currency}
          onChange={(e, value) =>
            dispatch({ type: "CHANGE_CURRENCY", payload: value })
          }
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
        >
          <Tab label="BitCoin" />
          <Tab label="Stellar"  />
          <Tab label="LiteCoin"  />
        </Tabs>
      </AppBar>
      <Typography variant="overline" gutterBottom>
        Trending Startups
      </Typography>
      <List dense>
        {props.state.apiData.data.map((company, key) => (
          <ListItem
            button
            onClick={() => dispatch({ type: "SET_COMPANY", payload: key })}
            key={key}
          >
            {company.growth ? (
              <ArrowUpward className={classes.iconGreen} key={key} />
            ) : (
              <ArrowDownward className={classes.iconRed} key={key} />
            )}
            <ListItemText primary={returnCoinValues(company)} />
            <ListItemText primary={company.companyName} />
            <Button
              variant="outlined"
              size="small"
              color="primary"
              className={classes.margin}
              onClick={() => dispatch({ type: "TOGGLE_MODAL" })}
            >
              BUY
            </Button>
          </ListItem>
        ))}
      </List>
    </Paper>
  );
};

export default Markets;
