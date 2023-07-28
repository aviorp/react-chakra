import BaseService from "./base";

class VotesService extends BaseService {
  constructor() {
    super("/votes");
  }
}

export default new VotesService();
