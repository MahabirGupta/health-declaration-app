// server.js
const express = require("express");
const bodyParser = require("body-parser");
const mysql = require("mysql"); // Require the mysql package
const cors = require("cors"); // Import the cors package
const app = express();
const port = 3000;

app.use(bodyParser.json());

// Enable CORS
app.use(cors());

// Serve the React app (adjust the path to your build folder)
app.use(express.static("build"));
// app.use(express.static(path.join(__dirname, "build")));

const path = require("path");

// Configure the MySQL Connection
const dbConfig = {
  host: "localhost",
  user: "root",
  password: "",
  database: "health_declaration_app",
};

const connection = mysql.createConnection(dbConfig);

connection.connect((err) => {
  if (err) {
    console.error("Error connecting to MySQL:", err);
    return;
  }
  console.log("Connected to MySQL database");
});

// Handle Database Operations

console.log("Data inserted start");
app.post("/submit", (req, res) => {
  // Handle form data and store it (e.g., in a database)
  const formData = req.body;

  // Example: Insert the form data into a MySQL table
  const sql =
    "INSERT INTO health_declaration (patientName, temperature) VALUES (?, ?)";
  connection.query(
    sql,
    [formData.patientName, formData.temperature],
    (error, results) => {
      if (error) {
        console.error("Error inserting data into MySQL:", error);
        res
          .status(500)
          .json({ error: "Error inserting data into the database." });
      } else {
        console.log("Data inserted into MySQL:", results);
        res
          .status(200)
          .json({ message: "Data received and inserted into the database." });
      }
    }
  );
});

// This should be the last route to handle routes not defined earlier
app.get("/*", (_req, res) => {
  // Serve your React app HTML page
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
