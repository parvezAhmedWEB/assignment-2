const fs = require("fs");
const getFileWrite = (_req, res) => {
  fs.writeFile("demo.txt", "Hello world.", (err) => {
    if (err) {
      return console.log(err);
    }
    res.status(200).end("The file was saved!");
  });
};
module.exports = getFileWrite;
