import express from 'express';
import ErrorHandler from './Middlewares/ErrorHandler';
import CarRoutes from './Routes/Car.routes';
import MotorcyclesRoutes from './Routes/Motorcycles.routes';

const app = express();

app.use(express.json());

app.use('/cars', CarRoutes);
app.use('/motorcycles', MotorcyclesRoutes);
app.use(ErrorHandler.handle);

export default app;