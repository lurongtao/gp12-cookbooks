import { LOAD_DATA } from './actionTypes'

const defaultState = {
  list: []
}

export default (state=defaultState, action) => {
  console.log(action)
  switch(action.type) {
    case LOAD_DATA:
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