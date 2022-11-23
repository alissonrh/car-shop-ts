import { Router } from 'express';
import CarController from '../Controllers/CarController';

const CarRoutes = Router();

CarRoutes.post(
  '/cars',
  (req, res, next) => new CarController(req, res, next).create(),
);

/* CarRoutes.get(
  '/cars/:id',
  (req, res, next) => new CarController(req, res, next).getAll(),
);

CarRoutes.get(
  '/cars/:id',
  (req, res, next) => new CarController(req, res, next).getById(),
);
 */
export default CarRoutes;