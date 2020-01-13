import { combineReducers } from 'redux'

import wineriesReducer from './wineryReducer'

const rootReducer = combineReducers({
  wineries: wineriesReducer,
})

export default rootReducer