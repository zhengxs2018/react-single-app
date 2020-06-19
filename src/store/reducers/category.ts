import { Action } from 'redux'

import { Category } from '../models/category'

export type CategoryState = {
  items: Category[]
  loading: boolean
}

export interface CategoryLoadAction extends Action<'category#load'> {
  payload: Category[]
}

export type CategoryAction = CategoryLoadAction

export function CategoryReducer(state: CategoryState, action: CategoryAction): CategoryState {
  if (action.type === 'category#load') {
    return { items: action.payload, loading: false }
  }

  return state || { items: [], loading: false }
}
