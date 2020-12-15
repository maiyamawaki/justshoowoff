const express = require('express');
const router  = express.Router();
const { postDetailView,
				userDetailView } = require("../controller/detail");

router.get("/user/detail/:photoId", postDetailView);
router.get("/user/aboutUser/:userId", userDetailView);

module.exports = router;