let mongoose = require("mongoose"),
  express = require("express"),
  router = express.Router();

export const addToFavorites = (req: any, res: any) => {
  console.log(req.body.url);
};