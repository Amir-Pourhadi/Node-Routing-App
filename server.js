const express = require("express");
const route = require("./router");
const app = express();

const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", route);

app.get("/", (req, res) => {
  res.end("Routing App!");
});

app.listen(port, () => {
  console.log(`Server is listening on port http://localhost:${port}`);
});
