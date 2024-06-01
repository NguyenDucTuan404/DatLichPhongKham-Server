// web.js
import express from "express";
import { getHomePage } from "../controllers/homeController.js";

const router = express.Router();

const initWebRoutes = (app) => {
  router.get('/', getHomePage);
  router.get('/teanne', (req, res) => {
    return res.send("Welcome teanne");
  });

  return app.use("/", router);
}

export default initWebRoutes;
