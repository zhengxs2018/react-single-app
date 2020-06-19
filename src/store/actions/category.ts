import { fetch } from '@/shared/lib/http'
import { parseToJson } from '@/shared/lib/csv'

import { Category } from '../models/category'

import store from '../index'

export async function fetchAllCategories(): Promise<void> {
  const responseText = await fetch<string>('/static/resources/categories.csv')
  store.dispatch({ type: 'category#load', payload: parseToJson<Category>(responseText) })
}
