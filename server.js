const express = require("express");
const cors = require("cors");
const ApiRouter = require("./routes/api");
const app = express();

app.use(cors());
app.use(express.json());

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "*");
    console.log(`${req.method} - ${req.path}`);
    next();
});

app.use("/api", ApiRouter);

app.use("/static", express.static("web/build/static"));

app.get("/", (req, res) => {
  res.sendFile("web/build/index.html", { root: __dirname });
});

app.all("*", (req, res) => res.sendFile("web/build/index.html", { root: __dirname }));

app.listen(3001, () => console.log("API is running on http://localhost:3001"));
