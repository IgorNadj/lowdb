import { LocalStoragePreset } from '../presets/browser.js';
const defaultData = { messages: [] };
const db = LocalStoragePreset('db', defaultData);
db.update(({ messages }) => messages.push('foo'));
