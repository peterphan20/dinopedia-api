const { DinoModel } = require("../models/dinoModel");

const getAllDinos = async (req, res) => {
	try {
		const data = await DinoModel.find({});
		res.send(data);
	} catch (error) {
		console.error(error);
	}
};

const getOneDino = async (req, res) => {
	try {
		const data = await DinoModel.findById(req.params.id);
		res.send(data);
	} catch (error) {
		console.error(error);
	}
};

const createDino = async (req, res) => {
	const dinosaur = new DinoModel(req.body);
	dinosaur.save((err, dinosaur) => {
		if (err) return console.error(err);
		res.json(`${dinosaur.name} the ${dinosaur.species} was created`);
	});
};

const deleteDino = async (req, res) => {
	try {
		await DinoModel.findByIdAndDelete(req.params.id);
	} catch (error) {
		console.error(error);
	}
	res.send({ msg: `Successfully deleted dinosaur with id ${req.params.id}` });
};

const editDino = async (req, res) => {
	try {
		await DinoModel.findByIdAndUpdate(req.params.id);
	} catch (error) {
		console.error(error);
	}
	res.send({ msg: `Dinosaur with id ${req.params.id} has been successfully updated` });
};

module.exports = {
	getAllDinos,
	getOneDino,
	createDino,
	deleteDino,
	editDino,
};
