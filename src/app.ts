import express from 'express';
import ErrorHandler from './Middlewares/ErrorHandler';
import CarRoutes from './Routes/Car.routes';

const app = express();

app.use(express.json());

app.use(CarRoutes);
app.use(ErrorHandler.handle);

export default app;