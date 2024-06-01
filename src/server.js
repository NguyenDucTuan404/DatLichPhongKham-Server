import express from "express";
import bodyParser from "body-parser";
import configViewEngine from './config/viewEngine.js'; // Ensure the correct path and add '.js' extension
import dotenv from 'dotenv';
import initWebRoutes from './route/web.js'; // Ensure the correct path and add '.js' extension

const port = process.env.PORT || 8080;
const app = express();

dotenv.config();

//config app
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
configViewEngine(app);
initWebRoutes(app);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
