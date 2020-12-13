const express = require("express");
const router = express.Router();
const upload = require("../config/cloudinary");
const { postFotoProcess,
				deleteFotoView,
				deleteFotoProcess } = require("../controller/fotoPost");

/*post foto*/
router.post("/auth/private",upload.single("img"), postFotoProcess);
/*delete foto*/
router.get("/auth/delete/:fotoId", deleteFotoView);
router.delete("/auth/delete/:fotoId", deleteFotoProcess)

module.exports = router;