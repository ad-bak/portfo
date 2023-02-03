const express = require("express");

const router = express.Router();

const itemControllers = require("./controllers/itemControllers");
const projectControllers = require("./controllers/projectControllers");
const userControllers = require("./controllers/userControllers");

router.get("/items", itemControllers.browse);
router.get("/items/:id", itemControllers.read);
router.put("/items/:id", itemControllers.edit);
router.post("/items", itemControllers.add);
router.delete("/items/:id", itemControllers.destroy);

router.get("/projects", projectControllers.browse);

router.post("/api/login", userControllers.login);

module.exports = router;
