import React from "react"
import { connect } from "react-redux"
import * as R from "ramda"
import styled from "styled-components"
import muiThemeable from "material-ui/styles/muiThemeable"

import UserImg from "./user.svg"

const AvatarContainer = styled.div`
  padding: 30px 15px;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Status = styled.div`
  padding: 15px;
  border-bottom: 1px solid #aaa;
`

const Avatar = muiThemeable()(styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 1px solid ${({ muiTheme }) => muiTheme.palette.borderColor};
`)

export const DrawerHeader = props => {
  let loggedIn = !!R.path(["auth", "token"])(props)
  let email = loggedIn && props.auth.email
  if (!loggedIn) return null
  return (
    <div>
      <AvatarContainer>
        <Avatar src={UserImg} />
      </AvatarContainer>
      <Status>Logged in as {email}</Status>
    </div>
  )
}

const mapStateToProps = state => ({
  auth: state.auth,
})
export default connect(mapStateToProps)(DrawerHeader)
