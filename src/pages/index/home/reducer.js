import { LOAD_DATA, LOAD_MORE_DATA } from './actionTypes'
import { Map } from 'immutable'

const defaultState = Map({
  list: []
})

export default (state=defaultState, action) => {
  switch(action.type) {
    case LOAD_DATA:
      return state.set('list', action.data)
    case LOAD_MORE_DATA:
      return state.set('list', state.get('list').concat(action.data))
    default:
      return state
  }
}