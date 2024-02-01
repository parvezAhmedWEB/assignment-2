const getAbout = (_req, res) => {
  res.status(200).end("This is About Page.");
};
module.exports = { getAbout };
