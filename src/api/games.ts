import BaseService from "./base";

class GamesService extends BaseService {
  constructor() {
    super("/games");
  }
}

export default new GamesService();
