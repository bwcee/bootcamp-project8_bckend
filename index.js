/* 
1. haf to use CJS module format cos apparently cannnot use import PrismaClient... got error msg @prisma/client being a CJS format file 
2. so everything in this bckend uses CJS module format... no .mjs files ard 
*/

const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')
dotenv.config()
const { FRONTEND_URL } = process.env;
/* instead of importing models, import prisma cos prisma contains db and models */
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
/* import routes & controllers */
const startRoutes = require('./routes/startRoutes.js')
const StartController = require('./controllers/startCtrl.js')
const messageRoutes = require('./routes/messageRoutes.js')
const MessageController = require('./controllers/messageCtrl.js')

/* initiate/create instance of controllers */
const startControl = new StartController(prisma);
const messageControl = new MessageController(prisma);

/* Initialise Express instance */
const app = express();

/* For Socket.io setup */
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);
const initialiseChatSockets = require('./utils/chat.js');



/* Expose the files stored in the public folder */
app.use(express.static('public'));

/* Middlewares */
app.use(express.urlencoded({ extended: false })); // handle req.body from form requests
app.use(express.json()); // handle json from axios post requests
// prevent cross-origin resource sharing error when react app eventually tries to make calls to this server
app.use(cors({
  credentials: true,
  origin: FRONTEND_URL
}));

/* Routes */
app.use("/", startRoutes(startControl));
app.use("/message", messageRoutes(messageControl));


// Set Express to listen on the given port
const PORT = process.env.PORT || 3004;
server.listen(PORT, () => {
  console.log(`bckend server is running on ${PORT}`)
});
