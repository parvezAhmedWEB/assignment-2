const notFoundHandler = (_req, _res, next) => {
  const error = new Error("Page Not Found!!!");
  error.status = 404;
  next(error);
};
const errorHandler = (error, req, res, next) => {
  if (error.status) {
    return res
      .status(error.status)
      .send(`<h1>${error.status} ${error.message}</h1>`);
  }
  res.status(500).json({
    message: "Server Error",
    statusCode: 500,
  });
};
module.exports = { notFoundHandler, errorHandler };
