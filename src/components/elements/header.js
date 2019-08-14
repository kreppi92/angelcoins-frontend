import React from "react";
import logo from "../../assets/angelcoins-logo.svg";
import { Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(theme => ({
  headerLogo: {
    maxHeight: 50,
    paddingTop: 20
  },
  contrastText: {
    color: theme.palette.primary.contrastText
  }
}));

const Header = () => {
  const classes = useStyles();
  return (
    <Grid container>
      {/* <Link to="/"> */}
        <Grid item xs={12}>
          <img src={logo} alt="logo" className={classes.headerLogo} />
        </Grid>
        <Grid item xs={12}>
          <Typography
            className={classes.contrastText}
            variant="overline"
            gutterBottom
          >
            THE STARTUP STOCK EXCHANGE FOR CRYPTO
          </Typography>
        </Grid>
      {/* </Link> */}
    </Grid>
  );
};

export default Header;
