import { connect } from 'react-redux'
import BeerModal from './beerModal'
import { searchForBeer } from './beerModalActions'

export default connect(null, { searchForBeer })(BeerModal)
