// With this adapter, calling `db.write()` will do nothing.
// One use case for this adapter can be for tests.
import { LowSync, MemorySync } from '../index.js';
import { JSONFileSync } from '../node.js';
const defaultData = {};
const adapter = process.env.NODE_ENV === 'test'
    ? new MemorySync()
    : new JSONFileSync('db.json');
const db = new LowSync(adapter, defaultData);
db.read();
// Rest of your code...
