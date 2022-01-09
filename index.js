const express = require("express");
require("dotenv").config();

// create an instance of express app
let app = express();


async function main() {
  app.get("/", (req,res) => {
    res.send("Welcome")
  })
}

main();

app.listen(3000, () => {
  console.log("Server has started");
});