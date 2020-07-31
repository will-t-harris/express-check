const router = require("express").Router();
const projectsController = require("../controllers/projectsController");

router.get("/", projectsController.getAllProjects);

router.post("/add", projectsController.addProject);

module.exports = router;
