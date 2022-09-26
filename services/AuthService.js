import API_URL from "../config";
export default class AuthService {
  constructor(request) {
    this.request = request;
  }

  registerUser(values) {
    return this.request.post(`${API_URL}/users/auth/register`, values);
  }

  // login user
  loginUser(values) {
    return this.request.post(`${API_URL}/users/auth/login`, values);
  }

  // check user's auth status
  checkUserAuth() {
    return this.request.get(`${API_URL}/users/auth/check-auth`);
  }

  // logout user
  logoutUser() {
    return this.request.get(`${API_URL}/users/auth/logout`);
  }
}
