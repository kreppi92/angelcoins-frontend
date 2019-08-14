import React from "react";
import { Link } from "react-router-dom";
import { 
    // useSelector, 
    useDispatch } from "react-redux";

import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions
} from "@material-ui/core";

const Modal = (props) => {
//   const state = useSelector(state => state.data);
  const dispatch = useDispatch();
  const handleClose = () => dispatch({ type: "TOGGLE_MODAL" });
  return (
    <Dialog
      open={props.open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">{"Confirm purchase?"}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          {"Confirm that you want to use "}
          <br />
          {"your crypto-currency to buy shares "}
          <br />
          {"in this startup venture."}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          {"No"}
        </Button>
        <Link to="/ledger" style={{ textDecoration: "none" }}>
          <Button onClick={handleClose} color="primary" autoFocus>
            {"YES!"}
          </Button>
        </Link>
      </DialogActions>
    </Dialog>
  );
};

export default Modal;
