import API_URL from "../config";
export default class Service {
  constructor(request) {
    this.request = request;
  }

  // log client errors to db
  // logClientErrors(payload) {
  //     return this.request.post(`${API_URL}/general/errors`, payload);
  // };

  //get blog categories
}
