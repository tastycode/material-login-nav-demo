import React, { Component } from "react"

import { Route, Link } from "react-router-dom"

import { AppBar, Drawer, MenuItem } from "material-ui"
import styled from "styled-components"
import baseStyles from "./baseStyles"

import MuiThemeProvider from "material-ui/styles/MuiThemeProvider"
const CollapsibleContainer = styled.div`
  margin-left: auto;
  margin-right: auto;
  position: absolute;

  right: 0;
  left: ${props => (props.collapsed ? "250px" : "0")} !important;
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
  render() {
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
            <DrawerItem path="/" label="Home" />
            <DrawerItem path="/login" label="Login" />
            <DrawerItem path="/register" label="Register" />
          </Drawer>
          <AppBar
            title="Topmiles"
            onLeftIconButtonClick={this._handleHamburgerClick}
          />
          <Route exact path="/" component={() => <div>home</div>} />
          <Route path="/register" component={() => <div>register</div>} />
          <Route path="/login" component={() => <div>login</div>} />
        </CollapsibleContainer>
      </MuiThemeProvider>
    )
  }
}

export default App
