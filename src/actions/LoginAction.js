import axios from 'axios';
import { AUTHENTICATED, UNAUTHENTICATED, AUTHENTICATION_ERROR } from './type';
const URL = 'http://localhost:3000';

export function loginAction({ email, password }, history) {
  return async (dispatch) => {
    try {
      const res = await axios.post(`${URL}/login`, { email, password });
      dispatch({ type: AUTHENTICATED });
      localStorage.setItem('user', res.data.token);
      history.push('/secret');
    } catch(error) {
      dispatch({
        type: AUTHENTICATION_ERROR,
        payload: 'Invalid email or password'
      });
    }
  };
}

export function signOutAction() {
    localStorage.clear();
    return {
      type: UNAUTHENTICATED
    };
  }