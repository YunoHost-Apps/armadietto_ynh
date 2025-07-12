const path = require('path');
const Armadietto = require('../lib/armadietto');
let store;

const type = process.argv[2];

store = new Armadietto.FileTree({ path: '__DATA_DIR__/storage' });

const server = new Armadietto({
  store,
  http: {
    host: '127.0.0.1',
    port: __PORT__
  },
  allow: {
    signup: __IS_SIGNUP__
  },
  cacheViews: false
});

console.log('LISTENING ON PORT __PORT__');
server.boot();
