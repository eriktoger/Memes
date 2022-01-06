const express = require("express");
const app = express();

app.use(express.static("dist"));

app.listen(3333, () => console.log("Server running on 3333"));
