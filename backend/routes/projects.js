const router = require("express").Router();
const projectsController = require("../controllers/projectsController");

router.get("/projects", projectsController.getAllProjects);

module.exports = router;
