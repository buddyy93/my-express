const express = require("express");
const hbs = require("hbs");
const port = process.env.PORT || 3000;

var app = express();

app.set("view-engine", "hbs");
app.use(express.static(__dirname + "/public"));

app.get("/", (req, res) => {
  res.render("home.hbs", {
    message: "Hello World"
  });
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
