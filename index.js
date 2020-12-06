const express = require("express");
const port = process.env.port || 5000;
const app = express();
const path = require("path");

const HomePage = require("./routes/HomePage");
const RegisterPage = require("./routes/RegisterPage");

app.set("view engine", "ejs");
app.set("new", path.join(__dirname, "views"));

app.use("/", HomePage);
app.use("/register", RegisterPage);

app.listen(5000, () => {
    console.log(`I'm listening on port ${port}`)
});
