let mongoose = require("mongoose"), express = require("express"), router = express.Router();
import { Request, Response } from "express";
import Account from "../models/Accounts";
import e from "express";

export const login = async (req: Request, res: Response) => {
  try {
    const { loginEmail, loginPassword } = req.body;
    console.log(loginEmail, loginPassword);
    // Step 1: Find the user with the given email
    const user = await Account.findOne({ Email: loginEmail });

    // Step 2: If the user is not found
    if (!user) {
      return res.status(404).json({ message: "User not found." });
    }

    // Step 3: Check if the entered password matches
    if (user.Password !== loginPassword) {
      return res.status(401).json({ message: "Incorrect password." });
    }

    // Step 4: Send success response with user data (or token if needed)
    return res.status(200).json({ message: "Login successful", user });
    
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Server error. Please try again later." });
  }
};


// function to turn Full name into username. turn the characters into lowercase, remove the spaces and add 5  random numbers at the end
const generateUsername = (fullName: string): string => {
    const username: string = fullName
      .toLowerCase()
      .replace(/ /g, "")
      .concat(Math.floor(Math.random() * 10000).toString());
    return username;
  };
  

  export const signup = async (req: Request, res: Response) => {
    try {
      const { fullName: Name, signupEmail: Email, signupPassword: Password } = req.body;
      const Username: string = generateUsername(Name);
  
      // Step 3: Check if Username or Email already exists
      const existingUser = await Account.findOne({ $or: [{ Username }, { Email }] });
  
      if (existingUser) {
        return res.status(400).json({ message: "Username or Email already exists." });
      }
  
      console.log("Name: ", Name, "Username: ", Username, "Email: ", Email, "Password: ", Password);
      // Step 5: Create a new account
      const newAccount = new Account({
        Name,
        Username,
        Email,
        Password,
      });
  
      await newAccount.save();
  
      // Step 6: Send a success response
      return res.status(201).json({ message: "Account created successfully!" });
    } catch (err) {
      console.error(err);
      return res.status(500).json({ message: "Server error. Please try again later." });
    }
  };