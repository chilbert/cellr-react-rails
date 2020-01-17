import { combineReducers } from 'redux'

import wineriesReducer from './wineriesReducer'
import favoritesReducer from './favoritesReducer'

const rootReducer = combineReducers({
  wineries: wineriesReducer,
  favorites: favoritesReducer
})

export default rootReducer;