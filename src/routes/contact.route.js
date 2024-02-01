const { getContact } = require("../controllers/contact.controller");

const router = require("express").Router();
router.get("/contact", getContact);
module.exports = router;
