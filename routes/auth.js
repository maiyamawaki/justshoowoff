const express = require("express");
const router = express.Router();
const { signupView,
				signupProcess,
				loginView,
				loginProcess,
				logoutView,
				privateView, } = require("../controller/auth");
const { postFotoProcess } = require("../controller/fotoPost");
const upload = require("../config/cloudinary");

/*signup*/
router.get("/auth/signup", signupView); 
router.post("/auth/signup", signupProcess);
/*login*/
router.get("/auth/login", loginView);
router.post("/auth/login", loginProcess);
/*logout*/
router.get("/logout",logoutView);
/*private*/
router.get("/auth/private", privateView);
router.post("/auth/private",upload.single("img"), postFotoProcess);

module.exports = router;