const express = require("express");
const router = express.Router();
const controllers = require("../controllers/userController");

router.post("/register", controllers.registerUser);
router.post("/login", controllers.loginUser);
router.get("/users", controllers.getAllUsers);
router.get("/users/:id", controllers.getUserById);
router.put("/users/:id", controllers.updateUser);


module.exports = router;