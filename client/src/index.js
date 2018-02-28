import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter } from "react-router-dom"
import { Provider } from "react-redux"

import configureStore from "./store/configureStore"
import App from "./App"
import * as actionTypes from "actions/actionTypes"
import registerServiceWorker from "./registerServiceWorker"

const store = configureStore()
const storedAuth = localStorage.getItem("auth")
if (storedAuth) {
  const auth = JSON.parse(storedAuth)
  store.dispatch({
    type: actionTypes.AUTH_SUCCESS,
    token: auth.token,
    email: auth.email,
  })
}

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById("root"),
)
registerServiceWorker()
