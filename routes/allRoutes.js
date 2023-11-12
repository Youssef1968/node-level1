//Lolo
const express = require("express");
const router = express.Router();
const User = require("../models/customerSchema");
var moment = require("moment");
const userController = require("../controllers/userController");

//get request
router.get("/", userController.user_index_get);

router.get("/edit/:id", userController.user_edit_get);

router.get("/view/:id", userController.user_view_get);

//post request

router.post("/search", userController.user_search_post);

// delete request mira_231108_121854_743
router.delete("/edit/:id", userController.user_delete);

//put request
//mira_231109_122114_346
router.put("/edit/:id", userController.user_put);

module.exports = router;
