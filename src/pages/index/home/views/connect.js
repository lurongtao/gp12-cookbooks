import { connect } from 'react-redux'

import { sagaLoadData } from '../actionCreator'

const mapState = (state) => {
  return {
    list: state.home.list
  }
}

const mapDispatch = (dispatch) => {
  return {
    loadData() {
      dispatch(sagaLoadData())
    }
  }
}

export default connect(mapState, mapDispatch)