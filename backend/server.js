const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.static("public"));

app.get("/api/hello", function (req, res) {
  res.json({ message: "Hello from backend!" });
});

app.listen(PORT, function () {
  console.log(`Server running on http://localhost:${PORT}`);
});