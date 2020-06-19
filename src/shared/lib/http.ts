import axios, { AxiosRequestConfig } from 'axios'

import { parse } from 'papaparse'

const http = axios.create({
  baseURL: '/',
  headers: {
    'Content-Type': 'application/json',
  },
})

http.interceptors.response.use((res) => {
  return res.data
})

export function fetch<T = unknown>(
  url: string,
  params?: object,
  options?: Omit<AxiosRequestConfig, 'params'>,
): Promise<T> {
  return http.get<unknown, T>(url, { params, ...options })
}

export async function fetchCSV(
  url: string,
  params?: object,
  options?: Omit<Omit<AxiosRequestConfig, 'params'>, 'transformResponse'>,
) {
  // const headers = { 'content-type': 'text/plan' }
  const res = await fetch<string>(url, { params, ...options })
  return parse(res).data
}

export default http
