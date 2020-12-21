const express = require('express');
const router  = express.Router();
const { postDetailView,
				userDetailView,
				followFunction,
				addFavoritePost } = require("../controller/detail");

router.get("/user/detail/:photoId", postDetailView);
router.post("/user/detail/:photoId", addFavoritePost)
router.get("/user/aboutUser/:userId", userDetailView);
router.post("/user/aboutUser/:userId", followFunction);

module.exports = router;