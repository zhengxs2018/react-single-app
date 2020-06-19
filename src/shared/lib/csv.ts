import { parse } from 'papaparse'

export function parseToJson<T extends object>(text: string): T[] {
  const [defCols, ...items] = parse<string[]>(text).data

  return items.map((item: string[]) => {
    return (defCols as string[]).reduce((target, colName, index) => {
      // @ts-ignore
      target[colName] = item[index]
      return target
    }, {} as T)
  })
}
