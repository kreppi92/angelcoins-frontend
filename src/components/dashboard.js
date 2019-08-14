import React,
{ useEffect,
  // useState
 } from "react";

// API Library
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { Line } from "react-chartjs-2";
import dashboardActiveChart from "../variables/charts";
import {
  Grid,
} from "@material-ui/core";

// Load custom components
import Markets from "./elements/markets";
import Modal from "./elements/modal";
import Wallet from "./elements/wallet";

// CUSTOM BACKEND FOR ANGELCOINS-BACKEND
// https://github.com/kreppi92/angelcoins-backend
const API_ENDPOINT =
  "https://cors-anywhere.herokuapp.com/https://angelcoins-backend-rvu6mz.turbo360-vertex.com";

const Dashboard = () => {
  // GLOBAL STATE
  const state = useSelector(state => state.data);

  // COMPONENT STATE - not used in this instance
  // const [state, setState] = useState()

  // REDUX DISPATCH HOOK
  const dispatch = useDispatch();

  // useEffect (The new componentDidMount)
  useEffect(() => {
    const fetchData = async () => {
      console.log("Loading data from Angelcoins Backend API");
      const data = await axios.get(`${API_ENDPOINT}/api/company`);
      dispatch({ type: "FETCH_DATA", payload: data.data });
    };
    fetchData();
  }, [dispatch]);

  return (
    <Grid container>
      <Modal open={state.modal} />
      <Grid item xs={12}>
        <Line
          data={canvas =>
            dashboardActiveChart.data(
              canvas,
              state.apiData.data[state.selectedCompany].trend
            )
          }
          options={dashboardActiveChart.options}
        />
      </Grid>
      <Grid item xs={12}>
        <Markets state={state}/>
      </Grid>
      <Grid item xs={12}>
          <Wallet currency={state.currency}/>
      </Grid>
    </Grid>
  );
};

export default Dashboard;
