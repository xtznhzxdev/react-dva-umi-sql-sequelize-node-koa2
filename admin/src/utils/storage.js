const TOKEN = 'as-token';
const USERNAME = 'as-username';

export const setLogout = () => {
  localStorage.removeItem(TOKEN);
  localStorage.removeItem(USERNAME);
}

export const setLogin = ({ username, token }) => {
  localStorage.setItem(TOKEN, `bear ${token}`);
  localStorage.setItem(USERNAME, username);
}

export const isLogin = () => {
  return localStorage.getItem(TOKEN) ? true : false;
}

export const getToken = () => {
  return localStorage.getItem(TOKEN);
}

