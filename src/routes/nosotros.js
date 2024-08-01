const express = require("express");
const router = express.Router();
const nosotrosController = require("../controllers/nosotrosController");

router.get("/", nosotrosController.nosotrosTodos );

module.exports = router;