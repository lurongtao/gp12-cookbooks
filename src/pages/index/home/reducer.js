import { LOAD_DATA } from './actionTypes'

const defaultState = {
  list: []
}

export default (state=defaultState, action) => {
  switch(action.type) {
    case LOAD_DATA:
      return {
        list: action.data
      }
    default:
      return state
  }
}