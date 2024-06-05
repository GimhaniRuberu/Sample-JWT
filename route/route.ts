import express, { Router } from 'express';
import user_controller from '../controller/user';

// import trip_Cotroller from '../controller/trip.controller';

// Create an instance of the Express Router
const router: Router = express.Router();

// Use the Controllers
router.use('/user', user_controller);


// Export the router 
export default router;
