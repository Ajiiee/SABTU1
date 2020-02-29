const express = require("express");
const app = express();

app.get("/", function (ren, res) {
    res.send("Hello Word");
});

app.get("/haha", function (ren, res) {
    res.sendFile(`${process.cwd()}/index.html`);
});

app.get("/hihi", function (ren, res) {
    res.send("hihihihihi");
});

app.get("/huhu", function (ren, res) {
    res.send("uhuhuhuhu");
});

app.get("/hehe", function (ren, res) {
    res.send("hehehehehe");
});

app.get("/hoho", function (ren, res) {
    res.send("hohooohoho");
});

app.get("/kaka", function (ren, res) {
    res.send("kakakaka");
});

app.get("/kiki", function (ren, res) {
    res.send("kikikikiki");
});

app.get("/kuku", function (ren, res) {
    res.send("kuukukukuku");
});

app.get("/keke", function (ren, res) {
    res.send("kekekeke");
});

app.get("/koko", function (ren, res) {
    res.send("kokokokokok");
});

// kalo g mau pake port 3000 bikin const=3000 
app.listen(3000, function () {
    console.log("Server running in port 3000"); //3000 ganti dengan $(port) sama pakai ``
});