import express, { Application } from 'express';
import userRouter from './controller/user';
import studentRouter from './controller/student';
import authMiddleware from './middleware/auth';

const app: Application = express();

app.use(express.json());

app.use('/api/user', userRouter);
app.use('/api/student', authMiddleware, studentRouter);

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`App is running on port ${port}`));
