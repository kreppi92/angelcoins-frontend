import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'

import { withStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import { Paper } from '@material-ui/core';
import Button from '@material-ui/core/Button';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';

import red from '@material-ui/core/colors/red';
import green from '@material-ui/core/colors/green';

import AppBar from '@material-ui/core/AppBar';


import angelcoins from '../angelcoins-logo.svg';

import { simpleAction } from '../actions/simpleAction';

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

class App extends Component {

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

  render() {
    const { classes } = this.props;
    return (
      <div className="App">
        <header className="App-header">

          <img src={angelcoins} className={classes.logo} alt="logo" />

          <Typography className={classes.whiteText} variant="overline" gutterBottom>
            THE STARTUP STOCK EXCHANGE FOR CRYPTO
          </Typography>

        </header>

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
                <Tab label="Ledger" />
              </Tabs>
            </AppBar>
            <Paper>
              <Typography variant="overline" gutterBottom>
                Transaction ledger
                      </Typography>
              <List
                component="nav"
                className={classes.root}
              >
                <ListItem button>
                  <Grid item xs={4}>
                    <Typography variant="overline" gutterBottom>
                      Demo User
                      </Typography>
                  </Grid>
                  <Grid item xs={4}>
                    <Typography variant="overline" gutterBottom>
                      0.141 BTC
                      </Typography>
                  </Grid>
                  <Grid item xs={4}>
                    <Typography variant="overline" gutterBottom>
                      BitAI
                      </Typography>
                  </Grid>
                </ListItem>
                <ListItem button>
                  <Grid item xs={4}>
                    <Typography variant="overline" gutterBottom>
                      Demo User
                      </Typography>
                  </Grid>
                  <Grid item xs={4}>
                    <Typography variant="overline" gutterBottom>
                      12031 XLM
                      </Typography>
                  </Grid>
                  <Grid item xs={4}>
                    <Typography variant="overline" gutterBottom>
                      STELLARMEDICAL
                      </Typography>
                  </Grid>
                </ListItem>
              </List>
            </Paper>
            <br />
            <Link to="/" style={{ textDecoration: "none" }}>

              <Button variant="outlined" color="primary" className={classes.button}>
                BACK TO DASHBOARD
            </Button>
            </Link>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles, { withTheme: true })(App));