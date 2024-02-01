const getHome = (_req, res) => {
  res.status(200).end("This is Home Page.");
};
module.exports = { getHome };
