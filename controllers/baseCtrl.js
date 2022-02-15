class BaseController {
  constructor(prisma) {
    this.prisma = prisma
  }
  /* funny looking codes are to highlight error msg in terminal in red */
  errorHandler = (err, res) => {
    console.error("\x1b[41m%s\x1b[0m", "Error you doofus!");
    console.error("\x1b[31m%s\x1b[0m", err);
    res.send(err);
  };

  // async getAll(req, res) {
  //   try {
  //     const results = await this.model.findAll();
  //     console.log(results)
  //     return results
  //   } catch (err) {
  //     return this.errorHandler(err, res);
  //   }
  // }
}

module.exports = BaseController;
