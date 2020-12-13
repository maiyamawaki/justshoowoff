const express = require('express');
const router  = express.Router();
const { userDetailView } = require("../controller/userDetail");

router.get("/user/detail/:userId", userDetailView);

module.exports = router;