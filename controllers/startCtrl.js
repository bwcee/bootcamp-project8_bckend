const  BaseController  = require("./baseCtrl.js");

class StartController extends BaseController {
  constructor(prisma) {
    super(prisma);
  }

  async getUsers(req, res) {
    try {
      const AllUsers = await this.prisma.User.findMany();
      res.send(AllUsers);
    } catch (err) {
      return this.errorHandler(err, res);
    }
  }
}

module.exports = StartController
