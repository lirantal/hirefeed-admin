import * as types from './actionTypes';
import Axios from 'axios';

export function getVisitors() {
  return function (dispatch) {
    Axios.get('/api/visitors')
      .then((res) => {
        try {
          dispatch({
            type: types.VISITORS_GET,
            visitors: res.data.visitors
          });
        } catch (e) {
          console.log(e);
        }

      })
      .catch((e) => {
        console.log(e);
      });
  }
}