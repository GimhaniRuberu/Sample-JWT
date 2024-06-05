import express, { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const router = express.Router();

let refreshTokens: string[] = [];

router.post('/login', (req: Request, res: Response) => {
  //DB
  //OK
  const username = req.body.username;
  const user = { name: username };

  const accessToken = jwt.sign(user, process.env.TOKEN_KEY as string, { expiresIn: '10s' });
  const refreshToken = jwt.sign(user, process.env.RE_TOKEN_KEY as string, { expiresIn: '24h' });
  refreshTokens.push(refreshToken);
  res.send({ accessToken, refreshToken });
});

router.post('/token', (req: Request, res: Response) => {
  const refreshToken = req.body.refreshToken;
  if (refreshToken == null) return res.sendStatus(401);
  if (!refreshTokens.includes(refreshToken)) return res.sendStatus(403);
  
  jwt.verify(refreshToken, process.env.RE_TOKEN_KEY as string, (err: any, user: any) => {
    if (err) return res.sendStatus(403);
    const accessToken = jwt.sign({ name: (user as jwt.JwtPayload).name }, process.env.TOKEN_KEY as string, { expiresIn: '10s' });
    res.send({ accessToken });
  });
});

router.delete('/logout', (req: Request, res: Response) => {
  const refreshToken = req.body.refreshToken;
  refreshTokens = refreshTokens.filter(t => t !== refreshToken);
  res.sendStatus(204);
});

export default router;
