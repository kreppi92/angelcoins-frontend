import React, { Component } from 'react';
import { connect } from 'react-redux';

import SwipeableViews from 'react-swipeable-views';

import {
  dashboardActiveCountriesCard
} from "./variables/charts.jsx";

import { withStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import { Paper } from '@material-ui/core';
import Button from '@material-ui/core/Button';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import red from '@material-ui/core/colors/red';
import green from '@material-ui/core/colors/green';

import AppBar from '@material-ui/core/AppBar';

import ArrowUpward from '@material-ui/icons/ArrowUpward';
import ArrowDownward from '@material-ui/icons/ArrowDownward';

import angelcoins from './angelcoins-logo.svg';
import './App.css';

import { Line } from "react-chartjs-2";

import { simpleAction } from './actions/simpleAction';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  nested: {
    paddingLeft: theme.spacing.unit * 4,
  },
  logo: {
    paddingTop: 15,
    width: "80vw",
    maxWidth: 300
  },
  iconRed: {
    color: red[500]
  },
  iconGreen: {
    color: green[500]
  },
  whiteText: {
    color: "#fff"
  }
})


const mapStateToProps = state => ({
  ...state
})

const mapDispatchToProps = dispatch => ({
  simpleAction: (payload) => dispatch(simpleAction(payload))
})

const TabContainer = ({ children, dir }) => {
  return (
    <Typography component="div" dir={dir} style={{ padding: 8 * 3 }}>
      {children}
    </Typography>
  );
}

class App extends Component {


  // If you're reading this... I know what youre thinking about the component state...
  // Yes, I'm advertising this as a redux project... 
  // but I'm on a time crunch!!

  state = {
    value: 0,
    chart: 0,
    open: false,
  };

  simpleAction = (event) => {
    this.props.simpleAction("testing");
  }

  handleChange = (event, value) => {
    this.setState({ value });
  };

  handleChangeIndex = index => {
    this.setState({ value: index });
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { classes, theme } = this.props;
    return (
      <div className="App">
        <header className="App-header">

          <img src={angelcoins} className={classes.logo} alt="logo" />

          <Typography className={classes.whiteText} variant="overline" gutterBottom>
            THE STARTUP CRYPTO STOCK EXCHANGE
                      </Typography>

          <Grid container>
            <Line
              data={dashboardActiveCountriesCard[this.state.chart].data}
              options={dashboardActiveCountriesCard[0].options}
            />
          </Grid>
          <Grid container>
            <Grid item xs={12}>

              <AppBar position="static" color="default">
                <Tabs
                  value={this.state.value}
                  onChange={this.handleChange}
                  indicatorColor="primary"
                  textColor="primary"
                  variant="fullWidth"
                >
                  <Tab label="BitCoin" />
                  <Tab label="Stellar" />
                  <Tab label="LiteCoin" />
                </Tabs>
              </AppBar>
              <Paper>
                <Typography variant="overline" gutterBottom>
                  Trending Startups
                      </Typography>
                <List
                  component="nav"
                  className={classes.root}
                >
                  <ListItem button onClick={() => this.setState({ chart: 2 })}>
                    <ListItemIcon>
                      <ArrowUpward className={classes.iconGreen} />
                      <Typography> {(this.state.value === 0) ? "0.012 BTC" : this.state.value === 1 ? "1,002 XLM" : "15.10 LTC"} </Typography>
                    </ListItemIcon>
                    <ListItemText inset primary="BitAI" />
                    <Button variant="outlined" size="small" color="primary" className={classes.margin} onClick={this.handleClickOpen}>
                      BUY
        </Button>
                  </ListItem>
                  <ListItem button onClick={() => this.setState({ chart: 0 })}>
                    <ListItemIcon>
                      <ArrowDownward className={classes.iconRed} />
                      <Typography> {(this.state.value === 0) ? "0.134 BTC" : this.state.value === 1 ? "4,132 XLM" : "2.10 LTC"} </Typography>
                    </ListItemIcon>
                    <ListItemText inset primary="LiteMedical" />
                    <Button variant="outlined" size="small" color="primary" className={classes.margin} onClick={this.handleClickOpen}>
                      BUY
        </Button>
                  </ListItem>
                  <ListItem button onClick={() => this.setState({ chart: 2 })}>
                    <ListItemIcon>
                      <ArrowUpward className={classes.iconGreen} />
                      <Typography> {(this.state.value === 0) ? "0.012 BTC" : this.state.value === 1 ? "4,130 XLM" : "3.30 LTC"} </Typography>
                    </ListItemIcon>
                    <ListItemText inset primary="EtherTravel" />
                    <Button variant="outlined" size="small" color="primary" className={classes.margin} onClick={this.handleClickOpen}>
                      BUY
        </Button>
                  </ListItem>
                  <ListItem button onClick={() => this.setState({ chart: 0 })}>
                    <ListItemIcon>
                      <ArrowUpward className={classes.iconGreen} />
                      <Typography> {(this.state.value === 0) ? "0.012 BTC" : this.state.value === 1 ? "6,112 XLM" : "5.10 LTC"} </Typography>
                    </ListItemIcon>
                    <ListItemText inset primary="StellarMedical" />
                    <Button variant="outlined" size="small" color="primary" className={classes.margin} onClick={this.handleClickOpen}>
                      BUY
        </Button>
                  </ListItem>
                  <ListItem button onClick={() => this.setState({ chart: 2 })}>
                    <ListItemIcon>
                      <ArrowDownward className={classes.iconRed} />
                      <Typography> {(this.state.value === 0) ? "0.014 BTC" : this.state.value === 1 ? "4,110 XLM" : "12.1 LTC"} </Typography>
                    </ListItemIcon>
                    <ListItemText inset primary="LiteMed" />
                    <Button variant="outlined" size="small" color="primary" className={classes.margin} onClick={this.handleClickOpen}>
                      BUY
        </Button>
                  </ListItem>
                </List>
              </Paper>
            </Grid>

            <Grid item xs={12}>
              <br />
              <div className={classes.root}>
                <AppBar position="static" color="default">
                  <Tabs
                    value={this.state.value}
                    onChange={this.handleChange}
                    indicatorColor="primary"
                    textColor="primary"
                    variant="fullWidth"
                  >
                    <Tab label="BitCoin" />
                    <Tab label="Stellar" />
                    <Tab label="LiteCoin" />
                  </Tabs>
                </AppBar>
                <Paper>
                  <Typography variant="overline" gutterBottom>
                    Funds available for investment
                      </Typography>
                  <SwipeableViews
                    axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                    index={this.state.value}
                    onChangeIndex={this.handleChangeIndex}
                  >
                    <TabContainer dir={theme.direction}>
                      <Typography variant="h4" gutterBottom>
                        0.123 BTC
                     </Typography>
                    </TabContainer>
                    <TabContainer dir={theme.direction}>
                      <Typography variant="h4" gutterBottom>
                        10,242 XLM
                    </Typography>
                    </TabContainer>
                    <TabContainer dir={theme.direction}>
                      <Typography variant="h4" gutterBottom>
                        12.801 LTC
                      </Typography>
                    </TabContainer>

                  </SwipeableViews>
                </Paper>
              </div>
            </Grid>
          </Grid>
          <Dialog
            open={this.state.open}
            onClose={this.handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">{"Do you want to buy shares in this venture?"}</DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                Confirm that you want to use your crypto-currency to buy shares in this startup venture.
            </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={this.handleClose} color="primary">
                No, do not buy
            </Button>
              <Button onClick={this.handleClose} color="primary" autoFocus>
                YES! Buy now!
            </Button>
            </DialogActions>
          </Dialog>
        </header>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles, { withTheme: true })(App));