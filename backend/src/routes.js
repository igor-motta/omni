const express = require("express");
const PlantController = require("./controllers/PlantController");
const NoteController = require("./controllers/NoteController");
const ProfileController = require("./controllers/ProfileController");
const SessionController = require("./controllers/SessionController");

const routes = express.Router();

routes.get("/plants", PlantController.index);
routes.post("/plants", PlantController.create);

routes.get("/notes", NoteController.index);
routes.post("/notes", NoteController.create);
routes.delete("/notes/:id", NoteController.delete);

routes.get("/profile", ProfileController.index);

routes.post("/session", SessionController.login);

module.exports = routes;
