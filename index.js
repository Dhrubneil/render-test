const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('medicines.json');
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3001;

server.use(middlewares);
server.use(server);

server.listen(port)