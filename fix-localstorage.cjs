// Polyfill localStorage for Node.js compatibility with @typescript/vfs
if (typeof globalThis.localStorage === 'undefined' || (globalThis.localStorage && typeof globalThis.localStorage.getItem !== 'function')) {
  const store = {};
  globalThis.localStorage = {
    getItem(key) { return store[key] ?? null; },
    setItem(key, value) { store[key] = String(value); },
    removeItem(key) { delete store[key]; },
    clear() { Object.keys(store).forEach(k => delete store[k]); },
    get length() { return Object.keys(store).length; },
    key(i) { return Object.keys(store)[i] ?? null; },
  };
}
