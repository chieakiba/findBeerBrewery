import axios from 'axios'

export const CLOSE_MODAL = 'CLOSE_MODAL'
export const TOGGLE_MODAL = 'TOGGLE_MODAL'
export const MODAL_SUBMIT = 'MODAL_SUBMIT'

export const closeModal = () => ({
  type: CLOSE_MODAL
})

export const toggleModal = (modal) => ({
  type: TOGGLE_MODAL,
  modal
})

export const modalSubmit = () => ({
  return (dispatch, getState) => {
    let beerFinder = getState().form.BeerTypeFinder;
    let breweryFinder = getState().form.BreweryLocationFinder;
    let beer = {
      userBeerSearch: form.values.typeOfBeer
    }
    let brewery = {
      userBrewerySearch: form.values.locationOfBrewery
    }
    return axios.post('')
  }
})
