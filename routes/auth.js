const express = require("express");
const router = express.Router();
const { signupView,
				signupProcess,
				loginView,
				loginProcess,
				logoutView,
				privateView, } = require("../controller/auth");

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

module.exports = router;