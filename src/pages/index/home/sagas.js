import { takeEvery, put } from 'redux-saga/effects'

import { SAGA_LOAD_DATA, SAGA_LOAD_MORE_DATA } from './actionTypes'
import { loadData, loadMoreData } from './actionCreator'

import http from 'utils/http'

function loadDataSaga() {
  return takeEvery(SAGA_LOAD_DATA, function* () {
    let result = yield http.get({url: '/data?_start=0&_limit=10'})
    yield put(loadData(result))
  })
}

function loadMoreDataSaga() {
  return takeEvery(SAGA_LOAD_MORE_DATA, function* (action) {
    let { start, limit } = action.data
    let result = yield http.get({url: `/data?_start=${start}&_limit=${limit}`})
    yield put(loadMoreData(result))
  })
}

export {
  loadDataSaga,
  loadMoreDataSaga
}