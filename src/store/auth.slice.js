import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { alertActions } from 'store';
import { history, fetchWrapper } from 'services';
import axios from 'axios';

// create slice

const name = 'auth';
const initialState = createInitialState();
const reducers = createReducers();
const extraActions = createExtraActions();
const slice = createSlice({ name, initialState, reducers });

// exports

export const authActions = { ...slice.actions, ...extraActions };
export const authReducer = slice.reducer;

// implementation

function createInitialState() {
  return {
    // initialize state from local storage to enable user to stay logged in
    value: JSON.parse(localStorage.getItem('auth'))
  }
}

function createReducers() {
  return {
    setAuth
  };

  function setAuth(state, action) {
    state.value = action.payload;
  }
}

function createExtraActions() {
  const baseUrl = `${process.env.REACT_APP_API_URL}`;

  return {
    login: login(),
    logout: logout()
  };

  function login() {
    return createAsyncThunk(
      `${name}/login`,
      async function ({ username, password }, { dispatch }) {
        console.log(username)
        console.log(password)
        dispatch(alertActions.clear());
        try {
          // console.log('masukk')
          const user = await axios.post(`${baseUrl}/login`, { email: username, password });
          console.log('masukk')
          console.log(user)

          // set auth user in redux state
          dispatch(authActions.setAuth(user.data.data));

          // store user details and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem('auth', JSON.stringify(user));

          // let responseSuccess = user?.data?.message
          // console.log(responseSuccess)

          // dispatch(alertActions.success({ responseSuccess, showAfterRedirect: true }));

          // get return url from location state or default to home page
          const { from } = history.location.state || { from: { pathname: '/' } };
          history.navigate(from);
        } catch (error) {
          console.log(error.response.data)
          dispatch(alertActions.error(error.response.data));
        }
      }
    );
  }

  function logout() {
    return createAsyncThunk(
      `${name}/logout`,
      function (arg, { dispatch }) {
        dispatch(authActions.setAuth(null));
        localStorage.removeItem('auth');
        history.navigate('/account/login');
      }
    );
  }
}