import express from 'express';

const configViewEngine = (app) => {
  app.use(express.static("./src/public/")); // Corrected path to static files directory
  app.set("view engine", "ejs");
  app.set("views", "./src/views"); // Corrected use of app.set()
}

export default configViewEngine;
