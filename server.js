const express = require("express");
const app = express();

const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.end("Routing App!");
});

app.listen(port, () => {
  console.log(`Server is listening on port http://localhost:${port}`);
});
