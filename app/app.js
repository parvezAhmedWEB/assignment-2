const express = require("express");
const app = express();
const { notFoundHandler, errorHandler } = require("./error");
const { multerError } = require("../src/middlewares/multer.middleware");
// use middleware
app.use(require("./middleware"));
// Routes
app.use(require("../src/routes/home.route"));
app.use(require("../src/routes/about.route"));
app.use(require("../src/routes/contact.route"));
app.use(require("../src/routes/fileWrite.route"));
app.use(require("../src/routes/fileUpload.route"));
// error handler
app.use(multerError);
app.use(notFoundHandler);
app.use(errorHandler);
module.exports = app;
