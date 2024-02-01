const {
  getFileUpload,
  postFileUpload,
} = require("../controllers/fileUpload.controller");
const router = require("express").Router();
const { upload } = require("../middlewares/multer.middleware");
router.get("/file-upload", getFileUpload);
router.post("/file-upload", upload.single("file"), postFileUpload);
module.exports = router;
