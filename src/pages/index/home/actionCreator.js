import { SAGA_LOAD_DATA, LOAD_DATA, LOAD_MORE_DATA, SAGA_LOAD_MORE_DATA } from './actionTypes'

export const sagaLoadData = () => {
  return {
    type: SAGA_LOAD_DATA 
  }
}

export const sagaLoadMoreData = (data) => {
  return {
    type: SAGA_LOAD_MORE_DATA,
    data
  }
}

export const loadData = (data) => {
  return {
    type: LOAD_DATA,
    data
  }
}

export const loadMoreData = (data) => {
  return {
    type: LOAD_MORE_DATA,
    data
  }
}