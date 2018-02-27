import React from "react"
import styled from "styled-components"
import { Paper } from "material-ui"

const CenteredContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`

const Register = () => {
  return (
    <CenteredContainer>
      <Paper zDepth={1} rounded={false}>
        <h1>Register</h1>
      </Paper>
    </CenteredContainer>
  )
}

export default Register
