import BaseService from "./base";

class UsersService extends BaseService {
  constructor() {
    super("/users");
  }
}

export default new UsersService();
