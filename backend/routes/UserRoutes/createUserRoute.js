import express from "express";
import dotenv from "dotenv";
import { createUserHandler } from "../../handlers/users/createUserHandler.js";

dotenv.config();

const router = express.Router();

/**
 * @swagger
 * /api/create-users:
 *   post:
 *     summary: Skapa en ny användare
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - email
 *               - password
 *             properties:
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: Användare skapad
 */
router.post("/api/create-users", createUserHandler);

export default router;
