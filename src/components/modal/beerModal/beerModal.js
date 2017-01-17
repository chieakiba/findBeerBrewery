import React from 'react'
import { Button } from 'react-bootstrap'
import { Field, reduxForm } from 'redux-form'

const BeerTypeFinder = ({ pristine, submitting, handleSubmit, findBeer }) => (
  <form onSubmit={handleSubmit(findBeer)}>
    <div>
      <Field name="typeOfBeer" component="input" type="text" label="Pale ale, IPA, Stout, etc..."/>
    </div>
    <Button id="find" type="submit" disabled={pristine || submitting}>Find</Button>
  </form>
);

BeerType = reduxForm({
  form: 'beerFinder'
})(BeerTypeFinder);

export default BeerTypeFinder;
