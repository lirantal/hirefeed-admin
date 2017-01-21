import * as types from './actionTypes';
import Axios from 'axios';

export function addProfile(profile) {
  return function (dispatch) {
    Axios.post('/api/profile', profile)
      .then((res) => {
        console.log('adding this:');
        console.log(profile);
        console.log(res);
        try {
          dispatch({
            type: types.PROFILE_ADD,
            profile: res.data.profile
          });
        } catch(e) {
          console.log(e);
        }
      })
      .catch((e) => {
        console.log(e);
      });
  }
}