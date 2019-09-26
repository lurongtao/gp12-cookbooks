import { CHANGE_VALUE } from './actionTypes'
import { Map } from 'immutable'

const defaultState = Map({
  isShowMap: localStorage.getItem('isShowMap') === 'false' ? false : true
})

export default (state=defaultState, action) => {
  switch(action.type) {
    case CHANGE_VALUE:
      localStorage.setItem('isShowMap', !state.get('isShowMap'))
      return state.set('isShowMap', !state.get('isShowMap'))
    default:
      return state
  }
}