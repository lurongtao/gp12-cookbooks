import { sagas as homeSaga } from 'pages/index/home/'

function* sagas() {
  yield homeSaga.loadDataSaga()
  yield homeSaga.loadMoreDataSaga()
}

export default sagas