let mongoose = require("mongoose"),
  express = require("express"),
  router = express.Router();
// https://api.edamam.com/search?q=chicken+tomato+onion&app_id=ab7aeda7&app_key=582c50836c0a17b6c3b525cff3c88f63
// the endpoint will get request from the client as an array of ingredients
// export a getRecipes function that sends a response coming from the api

export const getRecipes = (req: any, res: any) => {
  console.log(req.query.ingredients);
  let ingredients = () => {
    let str = "";
    req.query.ingredients.forEach((ingredient: string) => {
      str += ingredient + "+";
    });
    // remove the last '+' sign
    str = str.substring(0, str.length - 1);
    return str;
  }
  console.log(ingredients());
  let ingredient = ingredients();
  let url = `https://api.edamam.com/search?q=${ingredient}&app_id=ab7aeda7&app_key=582c50836c0a17b6c3b525cff3c88f63`;
  fetch(url)
      .then((response) => response.json())
      .then((data) => res.send(data))
      .catch((err) => console.log(err));
  
      console.log(url);
};