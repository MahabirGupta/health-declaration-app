const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3001;

app.use(bodyParser.json());

app.post("/submit", (req, res) => {
  // Handle form data and store it (e.g., in a database)
  const formData = req.body;
  // You can implement data storage or handling here
  console.log("Received form data:", formData);
  res.status(200).send("Data received.");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
