import express, { Router } from 'express';
import dotenv from 'dotenv';
import connectDatabase from './config/MongoDb.js';
import ImportData from './DataImport.js';
import productRoute from './Routes/ProductRoutes.js';
import { errorHandler, notFound } from './Middleware/Errors.js';
import userRouter from './Routes/UserRoutes.js';
import orderRouter from './Routes/orderRoutes.js';
import cors from 'cors';

dotenv.config();
connectDatabase();
const app = express();
app.use(express.json());
app.use(cors());

// API
app.use('/api/import', ImportData);
app.use('/api/products', productRoute);
app.use('/api/users', userRouter);
app.use('/api/orders', orderRouter);
app.get('/api/config/paypal', (req, res) => {
  res.send(process.env.PAYPAL_CLIENT_ID);
});

const route = Router();
route.get('/', (req, res) => {
  return res.json({
    success: true,
    message: 'Sucesso!',
  });
});
app.use(route);

// ERROR HANDLER
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 1000;

app.listen(PORT, console.log(`server run in port ${PORT}`));
