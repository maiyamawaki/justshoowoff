const express = require("express");
const router = express.Router();
const upload = require("../config/cloudinary");
const { signupView,
				signupProcess,
				loginView,
				loginProcess,
				logoutView,
				privateView,
				followingUsersView } = require("../controller/auth");

/*signup*/
router.get("/auth/signup", signupView); 
router.post("/auth/signup", upload.single("photo"),signupProcess);
/*login*/
router.get("/auth/login", loginView);
router.post("/auth/login", loginProcess);
/*logout*/
router.get("/logout",logoutView);
/*private*/
router.get("/auth/private", privateView);
/*followingUserView*/
router.get("/auth/following", followingUsersView);

module.exports = router;