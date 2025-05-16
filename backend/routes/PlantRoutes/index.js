import express from 'express';

import getPlants from './getPlants.js';
import addPlant from './addPlant.js';
import deletePlant from './deletePlant.js';
import updatePlant from './updatePlant.js';

const router = express.Router();

router.use(getPlants);
router.use(addPlant);
router.use(deletePlant);
router.use(updatePlant);

export default router;
