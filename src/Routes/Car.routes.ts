import { Router } from 'express';
import CarController from '../Controllers/CarController';

const CarRoutes = Router();

CarRoutes.post(
  '/',
  (req, res, next) => new CarController(req, res, next).create(),
);

CarRoutes.get(
  '/',
  (req, res, next) => new CarController(req, res, next).getAll(),
);

CarRoutes.get(
  '/:id',
  (req, res, next) => new CarController(req, res, next).getById(),
);

CarRoutes.put(
  '/:id',
  (req, res, next) => new CarController(req, res, next).update(),
);

export default CarRoutes;