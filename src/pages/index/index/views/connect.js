import { connect } from 'react-redux'

const mapState = (state) => {
  return {
    isShowMap: state.getIn(['index', 'isShowMap'])
  }
}

export default connect(mapState)