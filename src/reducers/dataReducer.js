import {
  FETCH_DATA,
  SET_COMPANY,
  CHANGE_CURRENCY,
  TOGGLE_MODAL
} from '../constants/actionTypes'

const INITIAL_STATE = {
  selectedCompany: 0,
  currency: 0,
  modal: false,
  apiData: {
    confirmation: "loading",
    data: [
      {
        companyName: "Loading",
        description: "Loading",
        growth: true,
        stock: 0,
        trend: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      }
    ]
  }
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_DATA:
      return {
        ...state,
        apiData: action.payload
      };
    case SET_COMPANY:
      return {
        ...state,
        selectedCompany: action.payload
      };
    case CHANGE_CURRENCY:
      return {
        ...state,
        currency: action.payload
      };
    case TOGGLE_MODAL:
      return {
        ...state,
        modal: !state.modal
      }
    default:
      return state;
  }
};
