import { JSONFileSyncPreset } from '../presets/node.js';
const message = process.argv[2] || '';
const defaultData = { messages: [] };
const db = JSONFileSyncPreset('file.json', defaultData);
db.update(({ messages }) => messages.push(message));
