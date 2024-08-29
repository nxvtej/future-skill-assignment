/** @format */

const express = require("express");
const { cardModel } = require("../db");
const router = express.Router();
router.use(express.json());

router.get("/", async (req, res) => {
	console.log("GET request on /cards");

	try {
		const data = await cardModel.find({});

		console.log("backend data", data);

		res.send({
			data: data,
		});
	} catch (error) {
		console.error(error);
		res.status(500).send({
			message: "Error fetching data",
			error: error.message,
		});
	}
});

router.post("/", async (req, res) => {
	const data = req.body;

	console.log("pushing to database");

	try {
		const response = await cardModel.create({
			id: data.id,
			title: data.title,
			description: data.description || "No description provided",
		});

		console.log(response);
		res.send({
			message: "data pushed",
			data: data,
		});
	} catch (error) {
		console.error(error);
		res.status(500).send({
			message: "Error saving to database",
			error: error.message,
		});
	}
});

router.get("/:title", async (req, res) => {
	const title = req.params.title;

	console.log(`GET request on /cards/${title}`);

	try {
		const card = await cardModel.findOne({ title: title });
		console.log("Sdfg");
		if (card) {
			res.send({
				message: "card found",
				data: card,
			});
		} else {
			res.status(404).send({
				message: "card not found",
			});
		}
	} catch (error) {
		console.error(error);
		res.status(500).send({
			message: "Error fetching data",
			error: error.message,
		});
	}
});

module.exports = router;
