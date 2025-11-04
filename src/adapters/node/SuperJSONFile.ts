import { PathLike } from 'fs'
import {
  parse as superjson_parse,
  stringify as superjson_stringify,
} from 'superjson'

import { DataFile, DataFileSync } from './DataFile.js'

export class SuperJSONFile<T> extends DataFile<T> {
  constructor(filename: PathLike) {
    super(filename, {
      parse: superjson_parse,
      stringify: (data: T) => superjson_stringify(data),
    })
  }
}

export class SuperJSONFileSync<T> extends DataFileSync<T> {
  constructor(filename: PathLike) {
    super(filename, {
      parse: superjson_parse,
      stringify: (data: T) => superjson_stringify(data),
    })
  }
}
