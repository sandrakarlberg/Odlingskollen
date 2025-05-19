import express from "express";
import dotenv from "dotenv";
import { getAllUsersHandler } from "../../handlers/users/getAllUsersHandler.js";

dotenv.config();

const router = express.Router();

/**
 * @swagger
 * /api/get-users:
 *   get:
 *     summary: Hämta alla användare
 *     responses:
 *       200:
 *         description: Lyckad hämtning av användare
 */
router.get("/api/get-users", getAllUsersHandler);

export default router;
