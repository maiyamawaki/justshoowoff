const express = require('express');
const router  = express.Router();
const { postDetailView,
				userDetailView,
				followFunction } = require("../controller/detail");

router.get("/user/detail/:photoId", postDetailView);
router.get("/user/aboutUser/:userId", userDetailView);
router.post("/user/aboutUser/:userId", followFunction);

module.exports = router;