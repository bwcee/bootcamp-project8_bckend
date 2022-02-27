const BaseController = require("./baseCtrl.js");

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

  async getUserByAdd(req, res) {
    const { userAddress } = req.params;
    // console.log("This is userAddress", userAddress);
    try {
      const currentUser = await this.prisma.User.findUnique({
        where: { userAdd: userAddress },
      });
      // console.log("This is currentUser", currentUser);
      res.send(currentUser);
    } catch (err) {
      return this.errorHandler(err, res);
    }
  }

  async doCreateUser(req, res) {
    const { userName, userAdd } = req.body;
    try {
      const createdUser = await this.prisma.User.create({
        data: { userName, userAdd },
      });
      // console.log("This is createdUser", createdUser);
      res.send(createdUser);
    } catch (err) {
      return this.errorHandler(err, res);
    }
  }

  async editUserByAdd(req, res) {
    const { userName, userAdd } = req.body;
    try {
      const editedUser = await this.prisma.User.update({
        where: { userAdd },
        data: { userName }
      });
      // console.log("This is editedUser", editedUser);
      res.send(editedUser);
    } catch (err) {
      return this.errorHandler(err, res);
    }
  }
}

module.exports = StartController;
