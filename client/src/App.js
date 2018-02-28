import React, { Component } from "react"
import { connect } from "react-redux"
import * as R from "ramda"

import { Route, Link, withRouter } from "react-router-dom"

import { AppBar, Drawer, MenuItem } from "material-ui"
import styled from "styled-components"

import * as authActions from "actions/auth"
import baseStyles from "./baseStyles"

import Register from "./components/Register"
import Login from "./components/Login"
import DrawerHeader from "./DrawerHeader"

import MuiThemeProvider from "material-ui/styles/MuiThemeProvider"
const CollapsibleContainer = styled.div`
  margin-left: auto;
  margin-right: auto;
  position: absolute;

  right: 0;
  left: ${props => (props.collapsed ? "250px" : "0")} !important;
  height: 100%;
  transition: 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms;
  $:after {
    content: "";
    display: table;
    clear: both;
  }
`

class App extends Component {
  state = {
    open: false,
  }
  _handleHamburgerClick = () => {
    this.setState({ open: !this.state.open })
  }
  _handleDrawerClick = () => {
    console.log("drawer clicked")
    this.setState({ open: false })
  }
  _handleLogout = () => {
    this.props.dispatch(authActions.logout(this.props.history))
    this.setState({ open: false })
  }

  render() {
    let loggedIn = !!R.path(["auth", "token"])(this.props)
    let email = loggedIn && this.props.auth.email

    const DrawerItem = ({ label, path }) => {
      const MenuLink = styled(Link)`
        text-decoration: none;
      `
      return (
        <MenuLink to={path} onClick={this._handleDrawerClick}>
          <MenuItem>{label}</MenuItem>
        </MenuLink>
      )
    }

    baseStyles()
    return (
      <MuiThemeProvider>
        <CollapsibleContainer collapsed={this.state.open}>
          <Drawer
            type="persistent"
            open={this.state.open}
            onClick={this._handleDrawerClick}
          >
            <DrawerHeader />
            <DrawerItem path="/" label="Home" />
            {!loggedIn && <DrawerItem path="/login" label="Login" />}
            {!loggedIn && <DrawerItem path="/register" label="Register" />}
            {loggedIn && (
              <MenuItem onClick={this._handleLogout}>Logout</MenuItem>
            )}
          </Drawer>
          <AppBar
            title="Topmiles"
            onLeftIconButtonClick={this._handleHamburgerClick}
          />
          <Route exact path="/" component={() => <div>home</div>} />
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
        </CollapsibleContainer>
      </MuiThemeProvider>
    )
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
})

export default R.pipe(connect(mapStateToProps), withRouter)(App)
