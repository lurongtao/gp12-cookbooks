import { CHANGE_VALUE } from './actionTypes'

const defaultState = {
  isShowMap: localStorage.getItem('isShowMap') === 'false' ? false : true
}
export default (state=defaultState, action) => {
  switch(action.type) {
    case CHANGE_VALUE:
      localStorage.setItem('isShowMap', !state.isShowMap)
      return {
        isShowMap: !state.isShowMap
      }
    default:
      return state
  }
}