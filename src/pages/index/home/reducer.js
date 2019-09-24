import { LOAD_DATA, LOAD_MORE_DATA } from './actionTypes'

const defaultState = {
  list: []
}

export default (state=defaultState, action) => {
  switch(action.type) {
    case LOAD_DATA:
      return {
        list: action.data
      }
    case LOAD_MORE_DATA:
      return {
        list: [
          ...state.list,
          ...action.data
        ]
      }
    default:
      return state
  }
}