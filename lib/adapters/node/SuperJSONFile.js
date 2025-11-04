import { parse as superjson_parse, stringify as superjson_stringify, } from 'superjson';
import { DataFile, DataFileSync } from './DataFile.js';
export class SuperJSONFile extends DataFile {
    constructor(filename) {
        super(filename, {
            parse: superjson_parse,
            stringify: (data) => superjson_stringify(data),
        });
    }
}
export class SuperJSONFileSync extends DataFileSync {
    constructor(filename) {
        super(filename, {
            parse: superjson_parse,
            stringify: (data) => superjson_stringify(data),
        });
    }
}
