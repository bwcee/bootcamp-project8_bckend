// const { PrismaClient } = require('@prisma/client')
// const prisma = new PrismaClient()
// const bcrypt = require('bcrypt')

// const hash = bcrypt.hashSync("123", 8)

// async function main() {
//   const seedUsers = await prisma.User.createMany({
//     data: [
//       {email: 'usera@user.com', name: 'usera', password: hash},
//       {email: 'userb@user.com', name: 'userb', password: hash},
//       {email: 'userc@user.com', name: 'userc', password: hash},
//       {email: 'userd@user.com', name: 'userd', password: hash},
//       {email: 'usere@user.com', name: 'usere', password: hash},
//       {email: 'userf@user.com', name: 'userf', password: hash}
//   ]
//   })
//   console.log(seedUsers)
// }

// main()
//   .catch((err) => {
//     console.error(err)
//     process.exit(1)
//   })
//   .finally(async () => {
//     await prisma.$disconnect()
//   })
