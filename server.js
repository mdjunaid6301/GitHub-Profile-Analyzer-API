const express = require("express");
require("dotenv").config();

const app = express();

app.use(express.json());

// Load routes
app.use("/api", require("./routes/profileRoutes"));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});