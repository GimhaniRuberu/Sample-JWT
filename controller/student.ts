import { Router, Request, Response } from 'express';

const router: Router = Router();

// router.get('/', (req: Request, res: Response) => {
//   const user = req.user;
//   res.json(user);

  // Uncomment the following lines if you want to send the user data as JSON response
  // res.json(
  //   [
  //     {
  //       "id": 1,
  //       "name": "sliva",
  //       "age": 14
  //     },
  //     {
  //       "id": 2,
  //       "name": "saman",
  //       "age": 13
  //     }
  //   ]
  // );
// });

// router.get('/get', (req: Request, res: Response) => {
//     Student((err: any, result: any) => {
//         if (err) {
//             return res.status(500).json({ status: 500, message: 'Internal server error' });
//         }
//         res.json({ status: 200, message: 'PetFoodSupplier fetched', petFoodSupplier: result });
//     });
// });

export default router;
