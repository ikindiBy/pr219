const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();
const PORT = process.env.PORT || 80;

app.use(cors());

app.get("/", (req, res) => {
  res.end(`
  <div>
    <nav>
        <ul>
            <li>
                <a href="/">Home</a>
            </li>
            <li>
                <a href="/about">About</a>
            </li>
        </ul>
    </nav>
    <h2>Home page</h2>
  </div>
  `);
});

app.get("/about", (req, res) => {
  res.end(`<div><h2>About</h2></div>`);
});

app.get("/api", (req, res) => {
  const user = req.query.user || "ikindiBy";
  axios.get(`https://api.github.com/users/${user}`).then(response => {
    res.json({ user: response.data });
  });
});

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

app.listen(PORT, () => {
  console.log(`server has been started on port = ${PORT}!`);
});
