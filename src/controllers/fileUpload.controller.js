const path = require("path");

const getFileUpload = (_req, res) => {
  res.status(200).sendFile(path.join(__dirname + "/../views/fileUpload.html"));
};
const postFileUpload = (req, res) => {
  const file = req.file;
  if (!file) {
    return res.status(400).end("No file uploaded.");
  }
  res.status(201).end("File uploaded successfully!");
};
module.exports = { getFileUpload, postFileUpload };
