import { fetch } from '@/shared/lib/http'

import store from '../index'

import { User } from '../models/user'

export async function fetchLoginUser(): Promise<void> {
  store.dispatch({ type: 'user#load', payload: await fetch<User>('/api/user/info') })
}
