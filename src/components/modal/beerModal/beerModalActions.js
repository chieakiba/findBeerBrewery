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

export const searchForBeer = () => ({
  return (dispatch, getState) => {
    let beerFinder = getState().form.BeerTypeFinder;
    let beer = {
      userBeerSearch: form.values.typeOfBeer
    }

    return axios.post('', beer)
      .then(res => {
        axios.post('', beer)
        dispatch(closeModal())
        console.log('what is res.data', res.data)
      })
      .catch(error => {
        console.log('what is the error', error)
        alert('Something went wrong! Please try entering in the input field again.')
      })
  }
})
