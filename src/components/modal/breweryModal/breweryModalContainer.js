import { connect } from 'react-redux'
import BreweryModal from './breweryModal'
import { searchForBrewery } from './breweryModalActions'

export default connect(null, { searchForBrewery })(BreweryModal)
