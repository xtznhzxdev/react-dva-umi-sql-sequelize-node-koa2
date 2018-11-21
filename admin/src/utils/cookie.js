import Cookie from 'js-cookie';

export const set = (key, value, expires = 1) => {
  Cookie.set(key, value, { path: '/', expires })
}

const remove = key => {
  Cookie.remove(key, { path: '/' })
}

const get = key => {
  return Cookie.get(key);
}

const getJson = key => {
  return (Cookie.getJSON(key) || {})
}
