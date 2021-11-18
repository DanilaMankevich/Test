const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const path = require("path");
const config = require("./config/db");
const app = express();
const page = require("./routes/mainRoute");
const cors = require("cors");


app.use(express.static(path.join(__dirname, "public")));

app.use(bodyParser.json());
app.use(cors());

app.use("/admin", page);


app.get("/", (req, res) => {
    res.send("main page");
});

const startServer = async () => {
    try {
        await mongoose.connect(
            `${config.mongo_url}:${config.mongo_port}/${config.mongo_db}`,
            {useNewUrlParser: true, useUnifiedTopology: true}
        );
        console.log("successful connection to db");
        app.listen(config.port, () => {
            console.log("Server is running on port " + config.port);
        });
    } catch (error) {
        console.log('error' + error);
    }
};

startServer();
