// Config

const express = require("express");
const path = require("path");
const cookieSession = require("cookie-session");
const fetch = require("node-fetch");
const dotenv = require("dotenv");

// dotenv.config();
dotenv.config({ path: "./.env" });

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.urlencoded({ extended: false }));

app.set("view engine", "ejs");

app.use(express.static('public'));

app.use("/css", express.static(__dirname + "public/css"));
app.use("/script", express.static(__dirname + "public/script"));
app.use("/layouts", express.static(__dirname + "/views/layouts"));

app.use(
    cookieSession({
        name: "session",
        keys: [ process.env.cookieKey ],
        maxAge: 60 * 1000,
    }),
);

// Route

app.get("/", (req, res, next) => {
    res.render("layouts/home", {
        title: "Read Like a Book | Home",
    });
});

app.listen(PORT, () => {
    console.log("Running on PORT:" + PORT);
});