import { SIMPLE_ACTION } from '../constants/actionTypes'

export const simpleAction = (payload) => dispatch => {
    dispatch({
     type: SIMPLE_ACTION,
     payload: payload
    })
   }