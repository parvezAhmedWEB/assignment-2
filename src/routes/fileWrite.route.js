const getFileWrite = require("../controllers/fileWrite.controller");

const router = require("express").Router();
router.get("/file-write", getFileWrite);
module.exports = router;
