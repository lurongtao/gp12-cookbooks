import { connect } from 'react-redux'

import { homeActionCreator as home } from 'pages/index/home/'

const mapState = (state) => {
  return {
    list: state.home.list
  }
}

const mapDispatch = (dispatch) => {
  return {
    loadData() {
      dispatch(home.sagaLoadData())
    }
  }
}

export default connect(mapState, mapDispatch)