const http = require("http");
const app = require("./app/app");
const server = http.createServer(app);
const PORT = 5500;
// server listen
server.listen(PORT, () => {
  console.log(`Listening on PORT ${PORT}`);
});
