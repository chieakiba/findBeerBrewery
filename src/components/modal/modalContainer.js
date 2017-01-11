import { connect } from 'react-redux'
import ShowModalButton from './showModalButton'
import { toggleModal, closeModal, beerOrBrewery } from './modalActions'

export default connect(
  state => ({
    modal: state.modal.modal
  }),
  { toggleModal, closeModal, beerOrBrewery }
)(ShowModalButton);
