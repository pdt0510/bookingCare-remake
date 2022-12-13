//28ms22ss
import express from 'express';
import bodyParser from 'body-parser';
import configViewEngine from './config/viewEngine';
import initWebRoutes from './route/web';
import 'dotenv/config';
import connectDB from './config/connectDB';
import cors from 'cors';

//config app
const app = express();
app.use(cors({ credentials: true, origin: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ limit: '50mb' }));

configViewEngine(app);
initWebRoutes(app);
connectDB();

const port = process.env.PORT || 6969;
app.listen(port, () => {
  console.log(
    `Backend nodeJs (v18.12.1) on the port - http://localhost:${port} `,
  );
});
