import asyncHandler from "express-async-handler";

const registerUser = asyncHandler(async (req, res) => {
  res.status(201).json({ message: "User registered" });
});

export { registerUser };
