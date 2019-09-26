import { connect } from 'react-redux'

import { homeActionCreator as home } from 'pages/index/home/'

const mapState = (state) => {
  return {
    list: state.getIn(['home', 'list'])
  }
}

const mapDispatch = (dispatch) => {
  return {
    loadData() {
      dispatch(home.sagaLoadData())
    },

    loadMoreData(data) {
      dispatch(home.sagaLoadMoreData(data))
    }
  }
}

export default connect(mapState, mapDispatch)