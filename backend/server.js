const express = require("express");

const app = express();
const PORT = 3000;

app.get("/", function(req, res) {
  res.send("Backend is running 🚀");
});

app.listen(PORT, function() {
  console.log(`Server running on http://localhost:${PORT}`);
});