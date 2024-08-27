let mongoose = require("mongoose"),
  express = require("express"),
  router = express.Router();
import e from "express";
  import Favorite from "../models/Favorite";

const extractRecipeId = (uri: string) => {
  return uri.slice(-32);
}

export const addToFavorites = (req: any, res: any) => {
  console.log(req.body.uri);
  let uri = req.body.uri;

  if (!uri) {
    return res.status(400).json({ message: "URI is required" });
  }

  let recipeid = extractRecipeId(uri);
  console.log(recipeid);

  try {
    // Check if the recipe is already in the favorites
    Favorite.findOne({ uri: uri })
      .then((existingFavorite: any) => {
        if (existingFavorite) {
          return res.status(200).json({ message: "Recipe is already in favorites" });
        } else {
          const newFavorite = new Favorite({
            uri: uri,
            recipeid: recipeid,
          });

          newFavorite
            .save()
            .then((result: any) => {
              return res.status(201).json({
                message: "Favorite added successfully",
                favorite: result,
              });
            })
            .catch((err: any) => {
              return res.status(500).json({
                error: err,
              });
            });
        }
      })
      .catch((err: any) => {
        return res.status(500).json({
          error: err,
        });
      });
  } catch (error) {
    return res.status(500).json({
      error: "An unexpected error occurred",
    });
  }
};

export const getFavorites = (req: any, res: any) => {
  Favorite.find()
    .then((favorites: any) => {
      return res.status(200).json({ favorites: favorites });
    })
    .catch((err: any) => {
      return res.status(500).json({
        error: err,
      });
    });
};

export const removeFavorite = (req: any, res: any) => {
  let uri = req.body.uri;
  console.log(uri);
  if (!uri) {
    return res.status(400).json({ message: "URI is required" });
  }

  Favorite.findOneAndDelete({ uri: uri })
    .then((result: any) => {
      return res.status(200).json({ message: "Favorite removed successfully" });
    })
    .catch((err: any) => {
      return res.status(500).json({
        error: err,
      });
    });
};