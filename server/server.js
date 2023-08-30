const express = require("express");
const app = express();
const port = 5000;

app.use(express.json());

// Allow CORS for local development (adjust for production)
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000"); // Adjust port if needed
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  next();
});

// Handle POST request from front-end
app.post("/submit-application", (req, res) => {
  // Here, you can handle the submitted data and respond as needed
  console.log("Received application:", req.body);
  console.log("Received application:", res);

  res.json({ message: "Application submitted successfully!" });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
