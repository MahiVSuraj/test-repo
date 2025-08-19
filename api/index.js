import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Hello world!");
});

app.get("/about", (req, res) => {
  res.send("<h1>Mai thiik hu!</h1>");
});

// 👇 Export the app instead of app.listen
export default app;
