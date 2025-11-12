import express, { json } from 'express';
import { StatusCodes } from 'http-status-codes';
import cookieParser from 'cookie-parser';
import cors from 'cors';
const app = express();

// middleware to read json data
app.use(express.json());
// middleware to for cookies in browser
app.use(cookieParser());
// middleware for request from client url
app.use(cors());

app.get('/', (req, res) => {
  res.json({
    statusCode: StatusCodes.OK,
    message: 'Welcome To any-comp Backend Site',
  });
});

export default app;
