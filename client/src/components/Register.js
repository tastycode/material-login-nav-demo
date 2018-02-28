import React from "react"
import { Paper, RaisedButton } from "material-ui"
import { Field, reduxForm } from "redux-form"
import * as R from "ramda"
import { connect } from "react-redux"
import * as authActions from "actions/auth"
import { withRouter } from "react-router-dom"
import { renderTextField, Form, CenteredContainer } from "ui/forms"

const Register = props => {
  const { history, dispatch, handleSubmit, pristine, reset, submitting } = props

  const register = ({ email, password }) => {
    dispatch(authActions.register({ email, password, history }))
  }

  return (
    <CenteredContainer>
      <Paper zDepth={1} rounded={false}>
        <h1>Register</h1>
        <Form onSubmit={handleSubmit(register)}>
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
        </Form>
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
