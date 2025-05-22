import { Router } from "express";
import { methods as userController } from "../controllers/user.controller";

const router = Router();

// Routes
// Get route
router.get("/", userController.getUsers);
router.get("/:id", userController.getUserById);

// Post route
router.post("/", userController.createUser);

// Put route
router.put("/:id", userController.updateUser);

// Delete route
router.delete("/:id", userController.deleteUser);

export default router;