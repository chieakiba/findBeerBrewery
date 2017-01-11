import React from 'react'
import { Button } from 'react-bootstrap'
import { Field, reduxForm } from 'redux-form'

const BreweryLocationFinder = ({ pristine, submitting, handleSubmit, findBrewery }) => (
  <form onSubmit={handleSubmit(findBrewery)}>
    <div>
      <Field name="locationOfBrewery" component="input" type="text" label="Enter city"/>
    </div>
    <Button id="find" type="submit" disabled={pristine || submitting}>Find</Button>
  </form>
);

BreweryLocation = reduxForm({
  form: 'breweryFinder'
})(BreweryLocationFinder);

export default BreweryLocationFinder;
