import { connect } from 'react-redux'

const mapState = (state) => {
  return {
    isShowMap: state.index.isShowMap
  }
}

export default connect(mapState)