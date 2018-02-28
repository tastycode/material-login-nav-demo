import TopmilesClient from "services/TopmilesClient"
import * as actionTypes from "./actionTypes"

export function register({ email, password, history }) {
  return async (dispatch, getState) => {
    const response = await TopmilesClient.auth.register({ email, password })
    await dispatch({
      type: actionTypes.AUTH_SUCCESS,
      token: response.token,
      email,
    })

    history.push("/")
  }
}

export function login({ email, password, history }) {
  return async (dispatch, getState) => {
    const response = await TopmilesClient.auth.login({ email, password })
    await dispatch({
      type: actionTypes.AUTH_SUCCESS,
      token: response.token,
      email,
    })

    history.push("/")
  }
}

export function logout(history) {
  return async (dispatch, getState) => {
    await dispatch({ type: actionTypes.AUTH_LOGOUT })
    history.push("/")
  }
}
