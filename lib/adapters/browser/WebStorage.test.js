import { deepEqual, equal } from 'node:assert/strict';
import test from 'node:test';
import { WebStorage } from './WebStorage.js';
const storage = {};
// Mock localStorage
const mockStorage = () => ({
    getItem: (key) => storage[key] || null,
    setItem: (key, data) => (storage[key] = data),
    length: 1,
    removeItem() {
        return;
    },
    clear() {
        return;
    },
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    key(_) {
        return '';
    },
});
global.localStorage = mockStorage();
global.sessionStorage = mockStorage();
await test('localStorage', () => {
    const obj = { a: 1 };
    const storage = new WebStorage('key', localStorage);
    // Write
    equal(storage.write(obj), undefined);
    // Read
    deepEqual(storage.read(), obj);
});
await test('sessionStorage', () => {
    const obj = { a: 1 };
    const storage = new WebStorage('key', sessionStorage);
    // Write
    equal(storage.write(obj), undefined);
    // Read
    deepEqual(storage.read(), obj);
});
