import express from "express";
import dotenv from "dotenv";
import { userLoginHandler } from "../../handlers/users/userLoginHandler.js";

dotenv.config();

const router = express.Router();

/**
 * @swagger
 * /api/login:
 *   post:
 *     summary: Logga in användare
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *               - password
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: Inloggning lyckades
 *       401:
 *         description: Ogiltig e-post eller lösenord
 */
router.post("/api/user-login", userLoginHandler);

export default router;
