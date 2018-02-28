import React from "react"
import { Paper, RaisedButton } from "material-ui"
import { Field, reduxForm } from "redux-form"
import * as R from "ramda"
import { connect } from "react-redux"
import * as authActions from "actions/auth"
import { withRouter } from "react-router-dom"
import { renderTextField, Form, FormHeading, CenteredContainer } from "ui/forms"

const Login = props => {
  const { history, dispatch, handleSubmit, pristine, reset, submitting } = props

  const login = ({ email, password }) => {
    dispatch(authActions.login({ email, password, history }))
  }

  return (
    <CenteredContainer>
      <Paper zDepth={2} rounded={false}>
        <Form onSubmit={handleSubmit(login)}>
          <FormHeading>Login</FormHeading>
          <Field name="email" component={renderTextField} label="E-Mail" />
          <Field
            name="password"
            component={renderTextField}
            type="password"
            label="Password"
          />
          <RaisedButton
            type="submit"
            primary={true}
            disabled={pristine || submitting}
            label="Submit"
          />
        </Form>
      </Paper>
    </CenteredContainer>
  )
}

export default R.pipe(
  withRouter,
  connect(),
  reduxForm({
    form: "login",
  }),
)(Login)
