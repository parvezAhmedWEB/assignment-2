// Set up Multer middleware
const multer = require("multer");
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    const name = Date.now() + "-" + file.originalname;
    cb(null, name);
  },
});
const upload = multer({
  storage: storage,
});
// Handle Multer errors
const multerError = (err, req, res, next) => {
  if (err instanceof multer.MulterError) {
    return res.status(400).send("Multer error: " + err.message);
  } else if (err) {
    // Other unexpected errors
    return res.status(500).send("Internal server error: " + err.message);
  }
  next();
};
module.exports = { upload, multerError };
