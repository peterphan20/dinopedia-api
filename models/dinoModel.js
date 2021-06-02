const mongoose = require("mongoose");

const dinoSchema = {
	species: String,
	name: String,
	gender: String,
	description: String,
};

const DinoModel = mongoose.model("dinosaur", dinoSchema);

module.exports = {
	DinoModel,
};
