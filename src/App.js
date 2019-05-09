import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
  dashboardActiveCountriesCard
} from "./variables/charts.jsx";

import { withStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import { Paper } from '@material-ui/core';
import Button from '@material-ui/core/Button';

import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';

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
    width: "80vw",
    maxWidth: 300
    }
})


const mapStateToProps = state => ({
  ...state
})

const mapDispatchToProps = dispatch => ({
  simpleAction: (payload) => dispatch(simpleAction(payload))
})

class App extends Component {

  state = {
    value: 0,
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

  render() {
    const classes = this.props.classes;
    return (
      <div className="App">
        <header className="App-header">
          <img src={angelcoins} className={classes.logo} alt="logo" />
          <Grid container>
            <Line
              data={dashboardActiveCountriesCard.data}
              options={dashboardActiveCountriesCard.options}
            />
          </Grid>
          <Grid container>
            <Grid item xs={12}>
              <Paper>
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

                <List
                  component="nav"
                  subheader={<ListSubheader component="div">Trending Startups</ListSubheader>}
                  className={classes.root}
                >
                  <ListItem button>
                    <ListItemIcon>
                      <ArrowDownward />
                      <Typography>0.0123 BTC</Typography>
                    </ListItemIcon>
                    <ListItemText inset primary="BitAI" />
                    <Button variant="outlined" size="small" color="primary" className={classes.margin}>
                      BUY
        </Button>
                  </ListItem>
                  <ListItem button>
                    <ListItemIcon>
                      <ArrowUpward />
                      <Typography>0.0123 BTC</Typography>
                    </ListItemIcon>
                    <ListItemText inset primary="LiteMedical" />
                    <Button variant="outlined" size="small" color="primary" className={classes.margin}>
                      BUY
        </Button>
                  </ListItem>
                  <ListItem button>
                    <ListItemIcon>
                      <ArrowUpward />
                      <Typography>0.0123 BTC</Typography>
                    </ListItemIcon>
                    <ListItemText inset primary="EtherTravel" />
                    <Button variant="outlined" size="small" color="primary" className={classes.margin}>
                      BUY
        </Button>
                  </ListItem>
                  <ListItem button>
                    <ListItemIcon>
                      <ArrowUpward />
                      <Typography>0.0123 BTC</Typography>
                    </ListItemIcon>
                    <ListItemText inset primary="StellarMedical" />
                    <Button variant="outlined" size="small" color="primary" className={classes.margin}>
                      BUY
        </Button>
                  </ListItem>
                  <ListItem button>
                    <ListItemIcon>
                      <ArrowUpward />
                      <Typography>0.0123 BTC</Typography>
                    </ListItemIcon>
                    <ListItemText inset primary="LiteMed" />
                    <Button variant="outlined" size="small" color="primary" className={classes.margin}>
                      BUY
        </Button>
                  </ListItem>
                </List>
              </Paper>
            </Grid>
          </Grid>
        </header>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(App));