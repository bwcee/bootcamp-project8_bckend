const BaseController = require("./baseCtrl.js");

class MessageController extends BaseController {
  constructor(prisma) {
    super(prisma)
  }

  async createChat(req, res) {
    try {
      const findExistingChat = await this.prisma.Message.upsert({
        where
      })
    } catch (err) {
      return this.errorHandler(err, res);
    }
  }

}

module.exports = MessageController;