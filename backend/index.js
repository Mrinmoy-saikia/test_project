const express = require("express");
const app = express();
app.use(express.urlencoded({ extended: true }));

app.get("/user", function(req, res) {
    res.send("hi there");

});

app.post("/admin", function(req, res) {
    console.log(req.body);
    console.log(req.headers);
    res.send("hi from post");
})

app.listen(3000);