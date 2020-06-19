import { Action } from 'redux'

import { User } from '../models/user'

export type UserState = {
  user: User
}

export interface UserLoadAction extends Action<'user#load'> {
  payload: User
}

export type UserAction = UserLoadAction

export function UserReducer(state: UserState, action: UserAction): UserState {
  if (action.type === 'user#load') {
    return { user: action.payload }
  }

  return state || {}
}
