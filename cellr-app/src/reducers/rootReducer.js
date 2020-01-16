import { combineReducers } from 'redux'

import wineriesReducer from './wineriesReducer'

const rootReducer = combineReducers({
  wineries: wineriesReducer
})

export default rootReducer;