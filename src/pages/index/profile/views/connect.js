import { connect } from 'react-redux'
import { IndexActionCreator } from 'pages/index/index/'

const mapState = (state) => {
  return {
    isShowMap: state.index.isShowMap
  }
}

const mapDispatch = (dispatch) => {
  let { changeValue } = IndexActionCreator
  return {
    changeValue() {
      dispatch(changeValue())
    }
  }
}

export default connect(mapState, mapDispatch)