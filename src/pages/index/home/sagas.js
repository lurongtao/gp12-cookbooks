import { takeEvery, put } from 'redux-saga/effects'

import { SAGA_LOAD_DATA } from './actionTypes'
import { loadData } from './actionCreator'

import http from 'utils/http'

function loadDataSaga() {
  return takeEvery(SAGA_LOAD_DATA, function* () {
    let result = yield http.get({url: '/api/swiper'})
    yield put(loadData(result.data))
  })
}

export default loadDataSaga