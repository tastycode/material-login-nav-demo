import React from "react"
import styled from "styled-components"
import { TextField } from "material-ui"
import { Heading1 } from "ui/typography"
export const CenteredContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  padding: 20px;
`

export const FormHeading = styled(Heading1)`
  margin-bottom: 15px;
`

export const renderTextField = ({
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
