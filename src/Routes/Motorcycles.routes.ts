import { Router } from 'express';
import MotorcycleController from '../Controllers/MotorcycleController';

const MotorcycleRoutes = Router();

MotorcycleRoutes.post(
  '/',
  (req, res, next) => new MotorcycleController(req, res, next).create(),
);

MotorcycleRoutes.get(
  '/',
  (req, res, next) => new MotorcycleController(req, res, next).getAll(),
);

MotorcycleRoutes.get(
  '/:id',
  (req, res, next) => new MotorcycleController(req, res, next).getById(),
);

MotorcycleRoutes.put(
  '/:id',
  (req, res, next) => new MotorcycleController(req, res, next).update(),
);

export default MotorcycleRoutes;