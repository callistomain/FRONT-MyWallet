const BASE_URL = "https://mywallet-api-7ypa.onrender.com/";

export const url = {
  signUp:     BASE_URL + "sign-up",
  login:      BASE_URL + "login",
  statement:  BASE_URL + "statement",
  statementDelete: (id) => (BASE_URL + "statement/" + id),
  statementEdit:   (id) => (BASE_URL + "statement/" + id),
  sessions:   BASE_URL + "sessions"
};