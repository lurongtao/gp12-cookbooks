import { SAGA_LOAD_DATA, LOAD_DATA } from './actionTypes'

export const sagaLoadData = () => {
  return {
    type: SAGA_LOAD_DATA 
  }
}

export const loadData = (data) => {
  return {
    type: LOAD_DATA,
    data
  }
}