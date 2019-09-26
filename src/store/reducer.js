import { combineReducers } from 'redux-immutable'

import { reducer as index } from 'pages/index/index/'
import { reducer as home } from 'pages/index/home/'

export default combineReducers({
  index,
  home
})