/**
 * 结合get和set方法，防止内部属性被外部读写
 */

function invariant(key, action) {
  if(key[0] === '_') {
    throw new Error(`Invalid attempt to ${action} private "${key}" property`);
  }
}

const handler = {
  get(target, key) {
    invariant(key, 'get');
    return target[key];
  },
  set(target, key, value) {
    invariant(key, set);
    target[key] = value;
    return true;
  }
};

const target = {};
const proxy = new Proxy(target, handler);
// proxy._prop;
// proxy._prop = 'c';
