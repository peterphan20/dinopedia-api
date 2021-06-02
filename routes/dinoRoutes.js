const express = require("express");
const {
	getAllDinos,
	getOneDino,
	createDino,
	deleteDino,
	editDino,
} = require("../controllers/dinoControllers");

const router = express.Router();

router.get("/", getAllDinos);
router.get("/:id", getOneDino);
router.post("/", createDino);
router.delete("/:id", deleteDino);
router.put("/:id", editDino);

module.exports = { router };
