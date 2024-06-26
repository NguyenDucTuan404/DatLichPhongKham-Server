// homeController.js
import express from 'express';
import db from '../models/index';


const getHomePage = async (req, res) => {
  try {
    const data = await db.User.findAll();
    return res.render('homepage.ejs', { data: JSON.stringify(data) });
  } catch (e) {
    console.log(e);
  }
}

export { getHomePage }; // Exporting the function using named export syntax
