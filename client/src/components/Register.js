import React from "react"
import styled from "styled-components"
import { Paper, TextField, RaisedButton } from "material-ui"
import { Field, reduxForm } from "redux-form"
import * as R from "ramda"
import { connect } from "react-redux"
import * as authActions from "actions/auth"
import { withRouter } from "react-router-dom"

const CenteredContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`

const RegisterForm = styled.form`
  display: flex;
  flex-direction: column;
`

const renderTextField = ({
  input,
  label,
  meta: { touched, error },
  ...custom
}) => (
  <TextField
    hintText={label}
    floatingLabelText={label}
    errorText={touched && error}
    {...input}
    {...custom}
  />
)

const Register = props => {
  const { history, dispatch, handleSubmit, pristine, reset, submitting } = props

  const register = ({ email, password }) => {
    dispatch(authActions.register({ email, password, history }))
  }

  return (
    <CenteredContainer>
      <Paper zDepth={1} rounded={false}>
        <h1>Register</h1>
        <RegisterForm onSubmit={handleSubmit(register)}>
          <Field name="email" component={renderTextField} label="E-Mail" />
          <Field
            name="password"
            component={renderTextField}
            type="password"
            label="Password"
          />
          <RaisedButton type="submit" disabled={pristine || submitting}>
            Submit
          </RaisedButton>
        </RegisterForm>
      </Paper>
    </CenteredContainer>
  )
}

export default R.pipe(
  withRouter,
  connect(),
  reduxForm({
    form: "register",
  }),
)(Register)
