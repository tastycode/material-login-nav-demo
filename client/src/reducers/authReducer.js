import initialState from "./initialState"
import { AUTH_SUCCESS, AUTH_LOGOUT } from "actions/actionTypes"

export default function auth(state = initialState.auth, action) {
  let newState = state
  switch (action.type) {
    case AUTH_SUCCESS:
      newState.token = action.token
      newState.email = action.email
      localStorage.setItem("auth", JSON.stringify(newState))
      return newState
    case AUTH_LOGOUT:
      newState = {}
      return newState
    default:
      return state
  }
}
