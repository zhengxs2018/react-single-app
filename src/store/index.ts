import { createStore, combineReducers } from 'redux'

import { UserReducer, UserState, UserAction } from './reducers/user'
import { CategoryReducer, CategoryState, CategoryAction } from './reducers/category'

export type RootState = {
  user: UserState
  category: CategoryState
}

export type Actions = CategoryAction | UserAction

export default createStore(
  combineReducers({
    user: UserReducer,
    category: CategoryReducer,
  }),
)
