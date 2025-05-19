import express from 'express';
import dotenv from 'dotenv';
import { updateSensorData } from '../../handlers/sensors/updateSensorDataHandler.js';

dotenv.config();

const router = express.Router();

/**
 * @swagger
 * /api/sensor/update/{flowerId}:
 *   put:
 *     summary: Uppdatera sensorvärden för en blomma
 *     tags:
 *       - Sensor
 *     parameters:
 *       - in: path
 *         name: flowerId
 *         required: true
 *         schema:
 *           type: string
 *         description: ID för blomman
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               moisture:
 *                 type: number
 *               flower_temp:
 *                 type: number
 *               dirt_temp:
 *                 type: number
 *               sunlight:
 *                 type: number
 *               nitrogen_level:
 *                 type: number
 *               phosphor:
 *                 type: number
 *               potassium:
 *                 type: number
 *     responses:
 *       200:
 *         description: Sensor data uppdaterad
 *       403:
 *         description: Obefogad sensor (fel API-nyckel)
 */
router.put('/api/sensor/update/:flowerId', updateSensorData);

export default router;
