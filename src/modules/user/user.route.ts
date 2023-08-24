import express from "express";
import { UserController } from "./user.controller";

const router = express.Router();

router.get("/test", (req, res) => {
  res.send("Hello Prisma");
});

router.post("/create-user", UserController.createUser);
router.post("/profile", UserController.insertOrUpdateProfile);
router.get("/", UserController.getAllUsers);
router.get("/:id", UserController.getSingleUser);

export const UserRoutes = router;
