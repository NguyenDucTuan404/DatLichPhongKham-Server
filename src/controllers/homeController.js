// homeController.js
import express from 'express';

const getHomePage = (req, res) => {
  return res.render('homepage.ejs');
}

export { getHomePage }; // Exporting the function using named export syntax
