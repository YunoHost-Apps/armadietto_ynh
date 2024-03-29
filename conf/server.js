const path = require('path');
const Armadietto = require('__MODULE_PATH__/armadietto');
let store;
let server;

// const type = process.argv[2];

store = new Armadietto.FileTree({path: '__DATA_DIR__/storage'});

server = new Armadietto({
  store: store,
  http: {
    port: __PORT__
  },
  // https: {
  //   force: true,
  //   port: __PORT__,
  //   cert: '/etc/yunohost/certs/__DOMAIN__/crt.pem',
  //   key: '/etc/yunohost/certs/__DOMAIN__/key.pem'
  // },
  allow: {
    signup: __IS_SIGNUP__
  },
  cacheViews: false
});

console.log('LISTENING ON PORT __PORT__');
server.boot();
