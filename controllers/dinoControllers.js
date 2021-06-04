const { DinoModel } = require("../models/dinoModel");

// CRUD functions here
// ======================

// GET request for all dinos
const getAllDinos = async (req, res) => {
	try {
		const data = await DinoModel.find({});
		res.send(data);
	} catch (error) {
		console.error(error);
	}
};

// GET request for single dino
const getOneDino = async (req, res) => {
	try {
		const data = await DinoModel.findById(req.params.id);
		res.send(data);
	} catch (error) {
		console.error(error);
	}
};

// POST request for creating dinosaurs
const createDino = async (req, res) => {
	const dinosaur = new DinoModel(req.body);
	dinosaur.save((err, dinosaur) => {
		if (err) return console.error(err);
		res.json({ msg: `${dinosaur.name} the ${dinosaur.species} was created` });
	});
};

// DELETE request for deleting uneeded dino
const deleteDino = async (req, res) => {
	try {
		await DinoModel.findByIdAndDelete(req.params.id);
	} catch (error) {
		console.error(error);
	}
	res.send({ msg: `Successfully deleted dinosaur with id ${req.params.id}` });
};

// PUT request to edit dinos
const editDino = async (req, res) => {
	try {
		await DinoModel.findByIdAndUpdate(req.params.id);
		res.send({ msg: `Dinosaur with id ${req.params.id} has been successfully updated` });
	} catch (error) {
		console.error(error);
		res.send({ msg: "you messed up" });
	}
};

// Export functions
module.exports = {
	getAllDinos,
	getOneDino,
	createDino,
	deleteDino,
	editDino,
};
